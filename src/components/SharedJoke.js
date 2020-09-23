import React, { useState, useEffect } from "react";

import jokeApi from "../api/jokesApi";
import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";
import LoadingJoke from "./LoadingJoke";
import useStyles from "../styles/SharedJokeStyles";

function SharedJoke(props) {
  const classes = useStyles();
  const { jokeId } = props.match.params;

  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getJoke = async () => {
      const joke = await jokeApi.get(`/Any?idRange=${jokeId}`);
      setError(joke.data.error);
      setJoke(joke.data);
      setIsLoading(false);
    };
    getJoke();
  }, [jokeId]);

  return (
    <div className={classes.root}>
      <div className={classes.jokeContainer}>
        {error ? (
          <h2>{"404 - Joke not found :("}</h2>
        ) : isLoading ? (
          <LoadingJoke />
        ) : joke.type === "single" ? (
          <SingleJoke joke={joke} />
        ) : (
          <TwoPartJoke joke={joke} />
        )}
      </div>
    </div>
  );
}

export default SharedJoke;
