import React from 'react';
import ReactDOM from 'react-dom/client';

// apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// end apollo

import config from './config/index.ts';

import App from './App.tsx';

import './index.css';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
