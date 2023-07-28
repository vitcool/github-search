import { Typography } from '@mui/material';

import { IRepository } from 'models/repository';

import RepositoriesList from 'components/common/RepositoriesList';

import { MIN_QUERY_LENGTH } from 'constants/common';

type RepositoriesListProps = {
  repositories?: { node: IRepository }[];
  isFetched: boolean;
  isLoading: boolean;
};

const SearchResults = ({ repositories, isFetched }: RepositoriesListProps) => {
  if (!isFetched && !repositories) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        Start typing to see the result (search will be performed after typing at
        least {MIN_QUERY_LENGTH} characters)
      </Typography>
    );
  }

  if (repositories && !repositories.length) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        No repositories found by your query, please try another one ;)
      </Typography>
    );
  }

  return (
    <RepositoriesList repositories={repositories?.map((r) => r.node) || []} />
  );
};

export default SearchResults;
