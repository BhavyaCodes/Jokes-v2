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
    if (e.target.name !== "all") {
      setCategories({
        ...categories,
        [e.target.name]: !categories[e.target.name],
        all: false,
      });
    } else if (e.target.name === "all") {
      setCategories({
        all: true,
        programming: false,
        miscellaneous: false,
        dark: false,
        pun: false,
      });
    }
  };
  return (
    <CategoryContext.Provider value={{ categories, changeCategories }}>
      {props.children}
    </CategoryContext.Provider>
  );
}
