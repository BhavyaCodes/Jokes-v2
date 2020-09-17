import React, { createContext } from "react";
import useLocalStorageStage from "../hooks/useLocalStorageState";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
  const [favoritesId, setFavoritesId] = useLocalStorageStage("favoritesId", []);
  const [favoriteJokes, setFavoriteJokes] = useLocalStorageStage(
    "favoriteJokes",
    []
  );

  const addFavoriteJoke = (joke) => {
    setFavoriteJokes([...favoriteJokes, joke]);
    addFavoriteId(joke.id);
  };

  const removeFavoriteJoke = (id) => {
    setFavoriteJokes(favoriteJokes.filter((joke) => joke.id !== id));
    removeFavoriteId(id);
  };

  const addFavoriteId = (id) => {
    setFavoritesId([...favoritesId, id]);
  };

  const removeFavoriteId = (idToRemove) => {
    const updatedFavorites = favoritesId.filter((id) => id !== idToRemove);
    setFavoritesId(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoritesId,
        setFavoritesId,
        addFavoriteJoke,
        removeFavoriteJoke,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}
