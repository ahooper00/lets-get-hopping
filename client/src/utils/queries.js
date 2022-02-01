import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
    query getReviews {
        reviews {
            _id
            reviewText
            reviewAuthor
            createdAt
            starReview
        }
    }
`;

export const QUERY_BEERS = gql`
    query getBeers {
        beers {
          beerId
          name
          brand
          description
          image
          link
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
    }
  }
`;