import React, { createContext } from "react";
import useLocalStorageStage from "../hooks/useLocalStorageState";

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
  const [favorites, setFavorites] = useLocalStorageStage("favoriteId", []);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
