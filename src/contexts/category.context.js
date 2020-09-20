import React, { createContext, useReducer } from "react";
import categoryReducer from "../reducers/category.reducer";

export const CategoryContext = createContext();
export const DispatchCategoryContext = createContext();

export function CategoryProvider(props) {
  const [categories, dispatch] = useReducer(categoryReducer, {
    all: true,
    programming: false,
    miscellaneous: false,
    dark: false,
    pun: false,
  });

  return (
    <CategoryContext.Provider value={categories}>
      <DispatchCategoryContext.Provider value={dispatch}>
        {props.children}
      </DispatchCategoryContext.Provider>
    </CategoryContext.Provider>
  );
}
