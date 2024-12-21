import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Set up the GraphQL endpoint
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql', 
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
  },
});

// Create Apollo Client
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
