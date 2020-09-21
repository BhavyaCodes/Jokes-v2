import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "../styles/LoadingListStyles";

export default function LoadingList() {
  const classes = useStyles();
  console.log("LoadingList");
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
