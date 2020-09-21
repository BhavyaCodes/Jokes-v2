import React, { useContext, memo } from "react";

import Grid from "@material-ui/core/Grid";

import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";

import { FavoriteContext } from "../contexts/favorite.context";

import useStyles from "../styles/FavoriteJokeListStyles";

function JokeList() {
  const classes = useStyles();

  const { favoriteJokes } = useContext(FavoriteContext);
  console.log("FavoriteJokeList");
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {favoriteJokes.map((joke) => (
          <Grid key={joke.id} item sm={12} md={6} className={classes.gridItem}>
            {joke.type === "single" ? (
              <SingleJoke joke={joke} />
            ) : (
              <TwoPartJoke joke={joke} />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default memo(JokeList);
