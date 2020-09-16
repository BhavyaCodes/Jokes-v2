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

  const resetFlags = () => {
    setFlags({
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
    });
  };

  return (
    <BlacklistContext.Provider value={{ flags, changeFlags, resetFlags }}>
      {props.children}
    </BlacklistContext.Provider>
  );
}
