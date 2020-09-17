import React, { createContext } from "react";
import useLocalStorageStage from "../hooks/useLocalStorageState";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
  const [favorites, setFavorites] = useLocalStorageStage("favoriteId", []);

  const addFavorite = (id) => {
    setFavorites([...favorites, id]);
  };

  const removeFavorite = (idToRemove) => {
    const updatedFavorites = favorites.filter((id) => id !== idToRemove);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}
