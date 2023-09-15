import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($userId: ID!, $locationId: ID!) {
    addFavorite(userId: $userId, locationId: $locationId) {
      _id
      username
      favorites {
        _id
        name
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($userId: ID!, $locationId: ID!) {
    removeFavorite(userId: $userId, locationId: $locationId) {
      _id
      username
      favorites {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
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


export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
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

