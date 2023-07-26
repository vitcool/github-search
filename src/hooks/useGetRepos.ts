import { gql, useQuery } from "@apollo/client";

const GET_ME = gql`
  query Viewer {
    viewer {
      id
      name
    }
  }
`;

const useGetRepos = () => {
  const { loading, error, data } = useQuery(GET_ME);

  return {
    loading,
    error,
    data,
  };
}

export { useGetRepos } ;



