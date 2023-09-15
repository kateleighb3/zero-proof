
const { Location, Comment, User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts').populate('locations').populate('favorites');
    },
    user: async (parent, { username }) => {
      return User.findOne({ _id: username }).populate('thoughts').populate('locations');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts').populate('locations').populate('favorites');
      }
      throw AuthenticationError;
    },

    // location queries

    locations: async () => {
      return Location.find();
    },

    location: async (parent, { locationId }) => {
      return Location.findOne({_id: locationId});
    }
  },

  Mutation: {
    // user mutations

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);

      return { token, user };
    },

    addFavorite: async (parent, { userId, locationId }, context) => {
        const user = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { favorites: locationId } },
          {
            new: true,
            runValidators: true,
          }
        );

          return user;
    },

    removeFavorite: async (parent, {userId, locationId }, context) => {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favorites: locationId } },
        {new: true}
      );
      return user;
    },

    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    // location mutations

    addLocation: async (parent, {name, lat, lng, photo_ref, description, username}, context) => {
      if(context.user) {
        const location = await Location.create({name, lat, lng, photo_ref, description, username});

        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: { locations: location._id }},
          {new: true}
        );

        return location;
      }
      throw AuthenticationError;
    },

    // user can only remove location if it is theirs
    removeLocation: async (parent, { locationId }, context) => {
      if (context.user) {
        // remove location
        const location = await Location.findOneAndRemove({_id: locationId});

        if (!location) {
          return res.status(404).json({ message: 'No location with this id!' });
        }

        // get current user
        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          { $pull: { locations: locationId }},
          {new: true}
        );

        if (!user) {
          return res
            .status(404)
            .json({ message: 'Location deleted but no user with this id!' });
        }

        return { location, user };
      }
      throw AuthenticationError;
    },

    // comment mutations

    addReply: async (parent, { locationId, commentBody, username}, context) => {
      if (context.user) {
        const comment = await Comment.create({commentBody, username})

        const location = await Location.findOneAndUpdate(
          { _id: locationId },
          { $addToSet: { comments: comment._id } },
          { new: true, runValidators: true}
        );

        return { comment, location };

      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;

