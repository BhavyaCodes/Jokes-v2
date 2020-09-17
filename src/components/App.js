import React from "react";

import { CategoryProvider } from "../contexts/CategoryContext";
import { BlacklistProvider } from "../contexts/BlacklistContext";
import { SearchProvider } from "../contexts/SearchContext";
import { FavoriteProvider } from "../contexts/FavoriteContext";
import Drawer from "./Drawer";

function App() {
  return (
    <CategoryProvider>
      <BlacklistProvider>
        <SearchProvider>
          <FavoriteProvider>
            <Drawer />
          </FavoriteProvider>
        </SearchProvider>
      </BlacklistProvider>
    </CategoryProvider>
  );
}

export default App;
