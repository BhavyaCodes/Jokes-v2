import React from "react";
import { Switch, Route } from "react-router-dom";

import { FavoriteProvider } from "../contexts/favorite.context";
import { FiltersProvider } from "../contexts/filters.context";
import Home from "./Home";

function App() {
  return (
    <FavoriteProvider>
      <FiltersProvider>
        <Switch>
          <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </FiltersProvider>
    </FavoriteProvider>
  );
}

export default App;
