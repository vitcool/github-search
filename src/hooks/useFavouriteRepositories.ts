import { useContext } from 'react';

import { FavouritesContext } from 'context/FavouritesContext';

const useFavouriteRepositories = () => {
  const context = useContext(FavouritesContext);

  if (context === undefined) {
    throw new Error(
      'FavouritesContext must be within FavouritesContextProvider'
    );
  }

  return context;
};

export { useFavouriteRepositories };
