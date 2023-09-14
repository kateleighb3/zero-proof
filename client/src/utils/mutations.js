import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation($name: String!, $lat: Float!, $lng: Float!, $photo_ref: String!, $description: String!, $username: String!) {
    addLocation(name: $name, lat: $lat, lng: $lng, photo_ref: $photo_ref, description: $description, username: $username) {
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

export const REMOVE_LOCATION = gql`
  mutation removeLocation($locationId: ID!) {
    removeLocation(locationId: $locationId) {
      location {
        _id
      createdAt
      name
      lat
      lng
      photo_ref
      description
      username
      }
      user {
        _id
        name
      }
    }
  }
`

