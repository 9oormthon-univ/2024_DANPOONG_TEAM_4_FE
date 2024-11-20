import { useCallback, useEffect, useState } from 'react';

const FAVORITES = 'favorites';

export const useFavoriteStore = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    setIsLoading(false);
  }, []);

  const toggleHandler = useCallback(
    (store) => {
      const isFavorite = favorites.some((fav) => fav.id === store.id);

      const updatedFavorites = isFavorite
        ? favorites.filter((fav) => fav.id !== store.id)
        : [...favorites, store];

      setFavorites(updatedFavorites);
      localStorage.setItem(FAVORITES, JSON.stringify(updatedFavorites));
    },
    [favorites],
  );

  return { favorites, toggleHandler, isLoading };
};
