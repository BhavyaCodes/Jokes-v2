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
  const changeFlags = (e) => {
    setFlags({
      ...flags,
      [e.target.name]: !flags[e.target.name],
    });
  };

  return (
    <BlacklistContext.Provider value={{ flags, changeFlags }}>
      {props.children}
    </BlacklistContext.Provider>
  );
}
