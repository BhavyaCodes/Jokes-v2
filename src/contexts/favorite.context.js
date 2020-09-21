import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import favoriteReducer from "../reducers/favorite.reducer";

export const FavoriteContext = createContext();
export const DispatchFavoriteContext = createContext();

export function FavoriteProvider(props) {
  const [favoritesId, dispatchId] = useLocalStorageReducer(
    "favoritesId",
    [],
    favoriteReducer
  );
  const [favoriteJokes, dispatchJoke] = useLocalStorageReducer(
    "favoriteJokes",
    [],
    favoriteReducer
  );

  return (
    <FavoriteContext.Provider value={{ favoritesId, favoriteJokes }}>
      <DispatchFavoriteContext.Provider value={{ dispatchId, dispatchJoke }}>
        {props.children}
      </DispatchFavoriteContext.Provider>
    </FavoriteContext.Provider>
  );
}
