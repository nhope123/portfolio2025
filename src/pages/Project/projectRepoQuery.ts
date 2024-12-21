import { gql } from '@apollo/client';

const getRepositories = gql`
  query GetRepositories($username: String!) {
    user(login: $username) {
      repositories(
        first: 100
        privacy: PUBLIC
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          description
          url
          visibility
          homepageUrl
        }
      }
    }
  }
`;

export default getRepositories;
