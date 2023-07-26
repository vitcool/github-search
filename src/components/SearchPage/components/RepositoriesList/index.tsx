import { Grid, Typography } from '@mui/material';

import IRepository from 'models/repository';

import RepositoryCard from 'components/SearchPage/components/RepositoryCard';

type RepositoriesListProps = {
  repositories: IRepository[];
  isFetched: boolean;
};

const RepositoriesList = ({
  repositories,
  isFetched,
}: RepositoriesListProps) => {
  if (!isFetched) {
    return null;
  }

  if (repositories.length === 0) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        No repositories found by your query, please try another one ;)
      </Typography>
    );
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      {repositories.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <RepositoryCard repository={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoriesList;
