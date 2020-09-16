import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider(props) {
  const [categories, setCategories] = useState({
    all: true,
    programming: false,
    miscellaneous: false,
    dark: false,
    pun: false,
  });

  const changeCategories = (e) => {
    console.log(e.target.name);
  };
  return (
    <CategoryContext.Provider value={{ categories, changeCategories }}>
      {props.children}
    </CategoryContext.Provider>
  );
}
