import { Typography } from '@mui/material';

import RepositoriesList from 'components/common/RepositoriesList';

import { IRepositoryWithRating } from 'models/repository';

type FavouritesList = {
  favourites: IRepositoryWithRating[];
};

const FavouritesList = ({ favourites }: FavouritesList) => {
  if (!favourites.length) {
    return (
      <Typography variant="subtitle1" gutterBottom>
        There is no repositories in the favourites list yet
      </Typography>
    );
  }

  return <RepositoriesList repositories={favourites} withRating />;
};

export default FavouritesList;
