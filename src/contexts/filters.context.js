import React, { useReducer, createContext } from "react";
import filtersReducer from "../reducers/filters.reducer";

export const FiltersContext = createContext();
export const DispatchFiltersContext = createContext();

export function FiltersProvider(props) {
  const [filters, dispatch] = useReducer(filtersReducer, {
    term: "",
    categories: {
      all: true,
      programming: false,
      miscellaneous: false,
      dark: false,
      pun: false,
    },
    blacklist: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
    },
  });

  return (
    <FiltersContext.Provider value={filters}>
      <DispatchFiltersContext.Provider value={dispatch}>
        {props.children}
      </DispatchFiltersContext.Provider>
    </FiltersContext.Provider>
  );
}
