import { Grid, Typography } from '@mui/material';

import FavouritesList from 'components/FavouritesPage/components/FavouritesList';

import { useFavouriteRepositories } from 'hooks/useFavouriteRepositories';

const FavouritesPage = () => {
  const { favourites } = useFavouriteRepositories();

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ p: 2 }}
      flexDirection="column"
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Favourites
        </Typography>
      </Grid>

      <Grid item>
        <FavouritesList favourites={favourites} />
      </Grid>
    </Grid>
  );
};

export default FavouritesPage;
