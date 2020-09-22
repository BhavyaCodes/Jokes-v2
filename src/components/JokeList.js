import React, { useState, useContext, useEffect, useReducer } from "react";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";

import { FiltersContext } from "../contexts/filters.context";

import jokesApi from "../api/jokesApi";

import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";
import LoadingJoke from "./LoadingJoke";
import useStyles from "../styles/JokeListStyles";

function JokeList() {
  const classes = useStyles();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  const filters = useContext(FiltersContext);

  const refresh = () => {
    forceUpdate();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jokes]);

  useEffect(() => {
    const getJokes = async () => {
      let categoryString = "";
      let flagString = "";

      if (filters.categories.all) {
        categoryString = "any";
      } else {
        for (const key in filters.categories) {
          if (filters.categories[key]) {
            categoryString += key.toString() + ",";
          }
        }
        categoryString = categoryString.slice(0, -1);
      }

      for (const key in filters.blacklist) {
        if (filters.blacklist[key]) {
          flagString += key.toString() + ",";
        }
      }
      flagString = flagString.slice(0, -1);

      try {
        const response = await jokesApi.get(`/${categoryString}?amount=6`, {
          params: {
            blacklistFlags: flagString || undefined,
            contains: filters.term || undefined,
          },
        });
        if (response.data.error) {
          setError(true);
        } else {
          setIsLoading(false);
          setJokes(response.data.jokes);
          setError(false);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getJokes();
  }, [filters, ignored]);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((i, index) => (
            <Grid key={index} item sm={12} md={6} className={classes.gridItem}>
              <LoadingJoke />
            </Grid>
          ))}
        </Grid>
      ) : null}
      {jokes && !error ? (
        <Grid container spacing={3}>
          {jokes.map((joke) => (
            <Grid
              key={joke.id}
              item
              sm={12}
              md={6}
              className={classes.gridItem}
            >
              {joke.type === "single" ? (
                <SingleJoke joke={joke} />
              ) : (
                <TwoPartJoke joke={joke} />
              )}
            </Grid>
          ))}
          {isLoading ? null : (
            <Tooltip title="Refresh Jokes">
              <Fab
                color="secondary"
                aria-label="refresh"
                className={classes.refreshButton}
                onClick={refresh}
              >
                <RefreshIcon />
              </Fab>
            </Tooltip>
          )}
        </Grid>
      ) : (
        <h2>No jokes found!! try updating your filters</h2>
      )}
    </div>
  );
}

export default JokeList;
