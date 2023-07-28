import { useCallback } from 'react';

import { gql, useQuery } from '@apollo/client';

import { IRepository } from 'models/repository';

import { MIN_QUERY_LENGTH } from 'constants/common';

const SEARCH_REPOSITORY = gql`
  query GetRepositories(
    $query: String!
    $type: SearchType!
    $first: Int!
    $after: String
  ) {
    search(query: $query, type: $type, first: $first, after: $after) {
      repositoryCount
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
            forkCount
            watchers {
              totalCount
            }
            discussions {
              totalCount
            }
            assignableUsers {
              totalCount
            }
            owner {
              login
            }
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

type UseSearchRepositoriesProps = {
  query: string;
};

export type UseSearchRepositoriesReturn = {
  search: {
    repositoryCount: number;
    edges: {
      cursor: string;
      node: IRepository;
    }[];
  };
};

const REPOSITORY_TYPE = 'REPOSITORY';
const FIRST_COUNT = 30;

// const MOCK = [
//   {
//     cursor: '1',
//     node: {
//       id: '1',
//       name: 'Fdeddy',
//       description:
//         'Long story shooort.Long story shooort.Long story shooort.Long story shooort.Long story shooort.Long story shooort...',
//       url: 'string',
//       stargazerCount: 123,
//       forkCount: 123,
//       isPrivate: false,
//       owner: {
//         login: 'Madness',
//       },
//       primaryLanguage: {
//         name: 'F#',
//         color: 'yellow',
//       },
//     },
//   },
//   {
//     cursor: '2',
//     node: {
//       id: '2',
//       name: 'Freddy',
//       description: 'Long story loong...',
//       url: 'string',
//       stargazerCount: 23,
//       forkCount: 3,
//       isPrivate: false,
//       owner: {
//         login: 'Derk',
//       },
//       primaryLanguage: {
//         name: 'C#',
//         color: 'red',
//       },
//     },
//   },
//   {
//     cursor: '2',
//     node: {
//       id: '3',
//       name: 'Seddy',
//       description: 'Long story...',
//       url: 'string',
//       stargazerCount: 56,
//       forkCount: 71,
//       isPrivate: true,
//       owner: {
//         login: 'Bull',
//       },
//       primaryLanguage: {
//         name: 'JS',
//         color: 'green',
//       },
//     },
//   },
// ];

const useSearchRepositories = ({ query }: UseSearchRepositoriesProps) => {
  const skip = !(query.length >= MIN_QUERY_LENGTH);
  const { loading, error, data, fetchMore } =
    useQuery<UseSearchRepositoriesReturn>(SEARCH_REPOSITORY, {
      variables: {
        query,
        type: REPOSITORY_TYPE,
        first: FIRST_COUNT,
        after: null,
      },
      skip,
      notifyOnNetworkStatusChange: true,
    });

  const edges = data?.search?.edges || [];
  const after = edges[edges.length - 1]?.cursor || '';

  const requestNextPage = useCallback(() => {
    if (query) {
      fetchMore({
        variables: {
          query,
          after,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEntries = fetchMoreResult?.search?.edges || [];

          return {
            ...previousResult,
            search: {
              repositoryCount: fetchMoreResult.search.repositoryCount,
              edges: [...previousResult.search.edges, ...newEntries],
            },
          };
        },
      });
    }
  }, [after, query, fetchMore]);

  return {
    isLoading: loading,
    error,
    data: data?.search?.edges,
    isFetched: data !== undefined,
    requestNextPage,
  };
};

export { useSearchRepositories };
