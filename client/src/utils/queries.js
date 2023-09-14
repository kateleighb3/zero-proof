import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      locations
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      locations
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      locations
      favorites
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