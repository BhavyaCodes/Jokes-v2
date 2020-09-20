import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export function SearchProvider(props) {
  const [term, setTerm] = useState("");

  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  const resetTerm = () => {
    setTerm("");
  };
  return (
    <SearchContext.Provider value={{ term, handleInput, resetTerm }}>
      {props.children}
    </SearchContext.Provider>
  );
}
