import React, { useState, useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { CategoryContext } from "../contexts/CategoryContext";
import { BlacklistContext } from "../contexts/BlacklistContext";
import { SearchContext } from "../contexts/SearchContext";

import jokesApi from "../api/jokesApi";

import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";

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
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  const { flags } = useContext(BlacklistContext);
  const { categories } = useContext(CategoryContext);
  const { term } = useContext(SearchContext);

  useEffect(() => {
    const getJokes = async () => {
      let categoryString = "";
      let flagString = "";

      if (categories.all) {
        categoryString = "any";
      } else {
        for (const key in categories) {
          if (categories[key]) {
            categoryString += key.toString() + ",";
          }
        }
        categoryString = categoryString.slice(0, -1);
      }

      for (const key in flags) {
        if (flags[key]) {
          flagString += key.toString() + ",";
        }
      }
      flagString = flagString.slice(0, -1);

      try {
        // console.log("tryblock");
        const response = await jokesApi.get(`/${categoryString}?amount=6`, {
          params: {
            blacklistFlags: flagString || undefined,
            contains: term || undefined,
          },
        });
        if (response.data.error) {
          setError(true);
        } else {
          setJokes(response.data.jokes);
          setError(false);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getJokes();
  }, [flags, categories, term]);
  return (
    <div className={classes.root}>
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
