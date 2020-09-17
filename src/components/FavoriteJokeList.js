import React, { useState, useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";

import { FavoriteContext } from "../contexts/FavoriteContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridItem: {
    width: "100%",
  },
}));

function JokeList() {
  const classes = useStyles();

  const { favoriteJokes } = useContext(FavoriteContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {favoriteJokes.map((joke) => (
          <Grid item sm={12} md={6} className={classes.gridItem}>
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

export default JokeList;
