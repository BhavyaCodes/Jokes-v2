import React, { createContext } from "react";
import useLocalStorageStage from "../hooks/useLocalStorageState";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
  const [favorites, setFavorites] = useLocalStorageStage("favoriteId", []);

  const addFavorites = (id) => {
    setFavorites([...favorites, id]);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites, addFavorites }}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
