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
          homepageUrl
          createdAt

          repositoryTopics(first: 20) {
                nodes {
                    topic {
                        name
                    }
                }
            }
            languages(first: 5) {
                edges {
                    node {
                    name
                    }
                }
            }
        }
      }
    }
  }
`;

export default getRepositories;
