// change add skill and remove skill 
const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Comment {
    createdAt: Date
    commentBody: String
    username: String
  }

  type Location {
    _id: ID
    createdAt: Date
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
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    
    locations: [Location]!
    locations(locationId: ID!): Location
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile

    addLocation(name: String!, lat: Float!, lng: Float!, photo_red: String!, description: String!, username: String!): Location
    removeLocation(locationId: ID!): Location

    addComment(locationId: ID!, comment: Comment! ): Location
  }
`;

module.exports = typeDefs;