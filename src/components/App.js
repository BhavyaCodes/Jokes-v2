import React from "react";
import { Switch, Route } from "react-router-dom";

import { CategoryProvider } from "../contexts/category.context";
import { BlacklistProvider } from "../contexts/blacklist.context";
import { SearchProvider } from "../contexts/search.context";
import { FavoriteProvider } from "../contexts/favorite.context";
import { FiltersProvider } from "../contexts/filters.context";
import Home from "./Home";

function App() {
  return (
    <CategoryProvider>
      <BlacklistProvider>
        <SearchProvider>
          <FavoriteProvider>
            <FiltersProvider>
              <Switch>
                <Route
                  path="/"
                  render={(routeProps) => <Home {...routeProps} />}
                />
                <Route render={() => <h2>404</h2>} />
              </Switch>
            </FiltersProvider>
          </FavoriteProvider>
        </SearchProvider>
      </BlacklistProvider>
    </CategoryProvider>
  );
}

export default App;
