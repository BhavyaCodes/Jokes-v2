import React from "react";

import { CategoryProvider } from "../contexts/CategoryContext";
import { BlacklistProvider } from "../contexts/BlacklistContext";
import { SearchProvider } from "../contexts/SearchContext";
import Drawer from "./Drawer";

function App() {
  return (
    <CategoryProvider>
      <BlacklistProvider>
        <SearchProvider>
          <Drawer />
        </SearchProvider>
      </BlacklistProvider>
    </CategoryProvider>
  );
}

export default App;
