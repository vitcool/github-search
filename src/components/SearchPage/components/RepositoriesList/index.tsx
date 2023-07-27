import { Grid, Typography } from '@mui/material';

import IRepository from 'models/repository';

import RepositoryCard from 'components/SearchPage/components/RepositoryCard';

import { MIN_QUERY_LENGTH } from 'constants/common';

type RepositoriesListProps = {
  repositories: { node: IRepository }[];
  isFetched: boolean;
  isLoading: boolean;
};

const RepositoriesList = ({
  repositories,
  isFetched,
}: RepositoriesListProps) => {
  if (!isFetched) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        Start typing to see the result (search will be performed after typing at
        least {MIN_QUERY_LENGTH} characters)
      </Typography>
    );
  }

  if (!repositories.length) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        No repositories found by your query, please try another one ;)
      </Typography>
    );
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      {repositories.map(({ node: item }) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <RepositoryCard repository={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoriesList;
