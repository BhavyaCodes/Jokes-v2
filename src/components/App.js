import React from "react";

import { CategoryProvider } from "../contexts/CategoryContext";
import Drawer from "./Drawer";

function App() {
  return (
    <CategoryProvider>
      <Drawer />
    </CategoryProvider>
  );
}

export default App;
