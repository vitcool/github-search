import { ReactNode, createContext, useState } from 'react';

import { IRepository, IRepositoryWithRating } from 'models/repository';

type FavouritesContextProviderProps = {
  children: ReactNode;
};

interface IToastMessageContext {
  favourites: IRepositoryWithRating[];
  addToFavourites: (repository: IRepository) => void;
  removeFromFavourites: (repositoryId: string) => void;
  checkIsInFavourites: (repositoryId: string) => boolean;
  setRatingFavourite: (repositoryId: string, rating: number | null) => void;
}

export const FavouritesContext = createContext<IToastMessageContext>(
  {} as IToastMessageContext
);

export const FavouritesContextProvider = ({
  children,
}: FavouritesContextProviderProps) => {
  const [favourites, setFavourites] = useState<IRepositoryWithRating[]>([]);

  const addToFavourites = (repository: IRepository): void => {
    setFavourites((currentFavourites) => [
      ...currentFavourites,
      { ...repository, rating: 0 },
    ]);
  };

  const removeFromFavourites = (repositoryId: string): void => {
    setFavourites((currentFavourites) =>
      currentFavourites.filter(
        (favouriteItem) => favouriteItem.id !== repositoryId
      )
    );
  };

  const checkIsInFavourites = (repositoryId: string): boolean =>
    favourites.some((favouriteItem) => favouriteItem.id === repositoryId);

  const setRatingFavourite = (
    repositoryId: string,
    rating: number | null
  ): void => {
    const itemIndex = favourites.findIndex(
      (favouriteItem) => favouriteItem.id === repositoryId
    );
    const updatedRepository = { ...favourites[itemIndex], rating: rating || 0 };
    const updatedRepositories = [...favourites];
    updatedRepositories.splice(itemIndex, 1, updatedRepository);
    setFavourites(updatedRepositories);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        checkIsInFavourites,
        setRatingFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
