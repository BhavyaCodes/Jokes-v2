import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  skeleton: {
    marginTop: "10px",
    borderRadius: "3px",
  },
});

export default function LoadingList() {
  const classes = useStyles();
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
