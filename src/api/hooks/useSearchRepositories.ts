import { gql, useQuery } from '@apollo/client';

import IRepository from 'models/repository';

const SEARCH_REPOSITORY = gql`
  query GetRepositories($query: String!, $type: SearchType!, $first: Int!, $after: String) {
    search(query: $query, type: $type, first: $first, after: $after) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazerCount
          forkCount
          isPrivate
          owner {
            login
          }
        }
      }
      edges {
        cursor
      }
    }
  }
`;

type UseSearchRepositoriesProps = {
  query: string;
};

type UseSearchRepositoriesReturn = {
  search: {
    repositoryCount: number;
    nodes: IRepository[];
    edges: {
      cursor: string;
    }[];
  };
};

const REPOSITORY_TYPE = 'REPOSITORY';

const useSearchRepositories = ({ query }: UseSearchRepositoriesProps) => {
  const { loading, error, data, previousData, fetchMore } =
    useQuery<UseSearchRepositoriesReturn>(SEARCH_REPOSITORY, {
      variables: { query, type: REPOSITORY_TYPE, first: 31, after: null },
    });

  console.log('edges', data?.search.edges)
  console.log('nodes', data?.search.nodes)

  return {
    isLoading: loading,
    error,
    data: data?.search?.nodes || [],
    cursor: data?.search?.edges[0]?.cursor || '',
    isFetched: previousData !== undefined,
    fetchMore,
  };
};

export { useSearchRepositories };
