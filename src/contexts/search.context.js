import React, { useReducer, createContext } from "react";
import searchReducer from "../reducers/search.reducer";

export const SearchContext = createContext();
export const DispatchSearchContext = createContext();

export function SearchProvider(props) {
  // const [term, setTerm] = useState("");
  const [term, dispatch] = useReducer(searchReducer, "");

  // const handleInput = (e) => {
  //   setTerm(e.target.value);
  // };

  // const resetTerm = () => {
  //   setTerm("");
  // };
  return (
    <SearchContext.Provider value={term}>
      <DispatchSearchContext.Provider value={dispatch}>
        {props.children}
      </DispatchSearchContext.Provider>
    </SearchContext.Provider>
  );
}
