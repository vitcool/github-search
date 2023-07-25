import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import config from 'config/index.ts';

const httpLink = createHttpLink({
  uri: config.apiUrl,
});

const authLink = setContext((_, { headers }) => {
  const { token } = config;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

client
  .query({
    query: gql`
      query Viewer {
        viewer {
          id
          name
        }
      }
    `,
  })
  .then((result) => console.log('result', result));
