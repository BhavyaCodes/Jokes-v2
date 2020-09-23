import React, { useState, useEffect } from "react";

import jokeApi from "../api/jokesApi";
import SingleJoke from "./SingleJoke";
import TwoPartJoke from "./TwoPartJoke";
import LoadingJoke from "./LoadingJoke";
import useStyles from "../styles/SharedJokeStyles";

function SharedJoke(props) {
  const classes = useStyles();
  const { jokeId } = props.match.params;
  console.log(jokeId);

  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getJoke = async () => {
      const joke = await jokeApi.get(`/Any?idRange=${jokeId}`);
      setJoke(joke.data);
      // console.log(joke);
      setIsLoading(false);
      setError(joke.data.error);
      // console.log(error);
    };
    getJoke();
  }, [jokeId]);
  console.log("joke", joke);
  console.log("isLoading", isLoading);

  const renderJoke = () => {
    return joke.type === "single" ? (
      <SingleJoke joke={joke} />
    ) : (
      <TwoPartJoke joke={joke} />
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.jokeContainer}>
        {isLoading ? <LoadingJoke /> : renderJoke()}
      </div>
    </div>
  );
}

export default SharedJoke;
