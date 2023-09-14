
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String

// change add skill and remove skill 
const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    comments: [Comment]
  }

  type Comment {
    createdAt: Int
    commentBody: String
    username: String
  }

  type Location {
    _id: ID
    createdAt: Int
    name: String
    lat: Float
    lng: Float
    photo_ref: String
    description: String
    username: String
    comments: [Comment]

  }

  type Auth {
    token: ID!
    user: User

type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    
    locations: [Location]!
    location(locationId: ID!): Location
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: Profile
    removeSkill(skill: String!): Profile

    addLocation(name: String!, lat: Float!, lng: Float!, photo_red: String!, description: String!, username: String!): Location
    removeLocation(locationId: ID!): Location

    addComment(locationId: ID!, commentBody: String!, username: String! ): Location
    
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
