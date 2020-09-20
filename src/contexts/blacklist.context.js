import React, { useReducer, createContext } from "react";
import blacklistReducer from "../reducers/blacklist.reducer";

export const BlacklistContext = createContext();
export const DispatchBlacklistContext = createContext();

export function BlacklistProvider(props) {
  const [flags, dispatch] = useReducer(blacklistReducer, {
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false,
  });

  return (
    <BlacklistContext.Provider value={flags}>
      <DispatchBlacklistContext.Provider value={dispatch}>
        {props.children}
      </DispatchBlacklistContext.Provider>
    </BlacklistContext.Provider>
  );
}
