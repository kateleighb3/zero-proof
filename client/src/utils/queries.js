import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($profileId: ID!) {
    user(profileId: $profileId) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
      locations {
        _id
        createdAt
        name
        lat
        lng
        photo_ref
        description
        username
      }
      favorites {
        _id
        createdAt
        name
        lat
        lng
        photo_ref
        description
        username
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
      `;


export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
      `;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
      locations {
        _id
        createdAt
        name
        lat
        lng
        photo_ref
        description
        username
      }
      favorites {
        _id
        createdAt
        name
        lat
        lng
        photo_ref
        description
        username
      }
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query allLocations {
    locations {
      _id
      createdAt
      name
      lat
      lng
      photo_ref
      description
      username
    }
  }
`;

export const QUERY_SINGLE_LOCATION = gql`
  query singleLocation($locationId: ID!) {
    location(locationId: $locationId) {
      _id
      createdAt
      name
      lat
      lng
      photo_ref
      description
      username
      comments
    }
  }
`
