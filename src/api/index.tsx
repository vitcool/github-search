import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import config from 'configs/index';
import { IRepository } from 'models/repository';

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

interface SearchResultItemEdge {
  __typename: string;
  cursor: string;
  node: IRepository;
}

interface SearchResultItemConnection {
  __typename: string;
  repositoryCount: number;
  edges: SearchResultItemEdge[];
}

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            // Custom merge function for the search field
            merge(
              existing: SearchResultItemConnection,
              incoming: SearchResultItemConnection
            ) {
              const { edges: existingEdges = [] } = existing || {};
              const { edges: incomingEdges = [] } = incoming;

              // Merge and deduplicate edges based on their cursors
              const mergedEdges = [...existingEdges, ...incomingEdges].reduce(
                (acc, edge) => {
                  if (!acc.find((item) => item.cursor === edge.cursor)) {
                    acc.push(edge);
                  }
                  return acc;
                },
                [] as SearchResultItemEdge[]
              );

              return {
                ...incoming,
                edges: mergedEdges,
              };
            },
          },
        },
      },
    },
  }),
});

export default client;
