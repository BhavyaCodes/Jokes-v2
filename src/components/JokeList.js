import React, { useState, useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";

import { CategoryContext } from "../contexts/category.context";
import { BlacklistContext } from "../contexts/blacklist.context";
import { SearchContext } from "../contexts/search.context";

import jokesApi from "../api/jokesApi";

import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";
import LoadingList from "./LoadingList";
import useStyles from "../styles/JokeListStyles";

function JokeList() {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  const flags = useContext(BlacklistContext);
  const categories = useContext(CategoryContext);
  const { term } = useContext(SearchContext);

  const [debouncedInfo, setDebouncedInfo] = useState({
    flags,
    categories,
    term,
  });

  useEffect(() => {
    const getJokes = async () => {
      let categoryString = "";
      let flagString = "";

      if (debouncedInfo.categories.all) {
        categoryString = "any";
      } else {
        for (const key in debouncedInfo.categories) {
          if (debouncedInfo.categories[key]) {
            categoryString += key.toString() + ",";
          }
        }
        categoryString = categoryString.slice(0, -1);
      }

      for (const key in debouncedInfo.flags) {
        if (debouncedInfo.flags[key]) {
          flagString += key.toString() + ",";
        }
      }
      flagString = flagString.slice(0, -1);

      try {
        const response = await jokesApi.get(`/${categoryString}?amount=6`, {
          params: {
            blacklistFlags: flagString || undefined,
            contains: debouncedInfo.term || undefined,
          },
        });
        if (response.data.error) {
          setError(true);
        } else {
          setJokes(response.data.jokes);
          setError(false);
          setIsLoading(false);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getJokes();
  }, [debouncedInfo]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isLoading) {
        setDebouncedInfo({ flags, categories, term });
      }
    }, 400);
    return () => {
      clearInterval(timeoutId);
    };
  }, [flags, categories, term]);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((i) => (
            <Grid item sm={12} md={6} className={classes.gridItem}>
              <LoadingList />
            </Grid>
          ))}
        </Grid>
      ) : null}
      {jokes && !error ? (
        <Grid container spacing={3}>
          {jokes.map((joke) => (
            <Grid item sm={12} md={6} className={classes.gridItem}>
              {joke.type === "single" ? (
                <SingleJoke joke={joke} />
              ) : (
                <TwoPartJoke joke={joke} />
              )}
            </Grid>
          ))}
        </Grid>
      ) : (
        <h2>No jokes found!! try updating your filters</h2>
      )}
    </div>
  );
}

export default JokeList;
