import React, { useState, createContext } from "react";

export const BlacklistContext = createContext();

export function BlacklistProvider(props) {
  const [flags, setFlags] = useState({
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false,
  });

  return (
    <BlacklistContext.Provider value={{ flags }}>
      {props.children}
    </BlacklistContext.Provider>
  );
}
