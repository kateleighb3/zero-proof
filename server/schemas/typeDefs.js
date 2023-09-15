
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]
    locations: [Location]
    favorites: [Location]
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Reply {
    createdAt: String
    commentBody: String
    username: String
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Location {
    _id: ID
    createdAt: String
    name: String
    lat: Float
    lng: Float
    photo_ref: String
    description: String
    username: String
    comments: [Reply]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(profileId: ID!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User    
    locations: [Location]
    location(locationId: ID!): Location
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addFavorite(userId: ID!, locationId: ID!): User!
    removeFavorite(userId: ID!, locationId: ID!): User!

    removeUser: User
    removeSkill(skill: String!): User

    addLocation(name: String!, lat: Float!, lng: Float!, photo_ref: String!, description: String!, username: String!): Location
    removeLocation(locationId: ID!): Location

    addReply(locationId: ID!, commentBody: String!, username: String! ): Location
    
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
