import { useCallback } from 'react';

import { Grid } from '@mui/material';

import { IRepository } from 'models/repository';

import RepositoryCard from 'components/common/RepositoryCard';
import { useFavouriteRepositories } from 'hooks/useFavouriteRepositories';

type RepositoriesListProps = {
  repositories: IRepository[];
  withRating?: boolean;
};

const RepositoriesList = ({
  repositories,
  withRating = false,
}: RepositoriesListProps) => {
  const {
    addToFavourites,
    removeFromFavourites,
    checkIsInFavourites,
    setRatingFavourite,
  } = useFavouriteRepositories();

  const handleToggleFavouritesClick = useCallback(
    (repository: IRepository) => {
      const { id } = repository;
      const isInFavourites = checkIsInFavourites(id);
      if (isInFavourites) {
        removeFromFavourites(id);
      } else {
        addToFavourites(repository);
      }
    },
    [addToFavourites, removeFromFavourites, checkIsInFavourites]
  );

  const handleRatingChange = useCallback(
    (id: string, newValue: number | null) => {
      setRatingFavourite(id, newValue);
    },
    [setRatingFavourite]
  );

  const getIsInFavourites = useCallback(
    (id: string) => checkIsInFavourites(id),
    [checkIsInFavourites]
  );

  return (
    <Grid container justifyContent="center" spacing={2}>
      {repositories.map((repository) => (
        <Grid item key={repository.id} xs={12} sm={6} md={4} lg={3}>
          <RepositoryCard
            repository={repository}
            withRating={withRating}
            onToggleFavouritesClick={handleToggleFavouritesClick}
            onRatingChange={handleRatingChange}
            getIsInFavourites={getIsInFavourites}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoriesList;
