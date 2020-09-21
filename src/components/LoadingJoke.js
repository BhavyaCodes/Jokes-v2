import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "../styles/LoadingJokeStyles";

export default function LoadingJoke() {
  const classes = useStyles();
  console.log("LoadingJoke");
  return (
    <div className={classes.root}>
      <Skeleton
        className={classes.skeleton}
        animation="wave"
        variant="rect"
        height={100}
      />
      <Skeleton
        className={classes.skeleton}
        animation="wave"
        variant="rect"
        height={20}
      />
      <Skeleton
        className={classes.skeleton}
        animation="wave"
        variant="rect"
        height={20}
        width="100%"
      />
    </div>
  );
}
