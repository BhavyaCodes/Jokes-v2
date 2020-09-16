import React from "react";

import { CategoryProvider } from "../contexts/CategoryContext";
import { BlacklistProvider } from "../contexts/BlacklistContext";
import Drawer from "./Drawer";

function App() {
  return (
    <CategoryProvider>
      <BlacklistProvider>
        <Drawer />
      </BlacklistProvider>
    </CategoryProvider>
  );
}

export default App;
