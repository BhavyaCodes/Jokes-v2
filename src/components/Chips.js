import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
}));

function Chips() {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <div className={classes.root}>
      <Chip className={classes.chip} size="small" label="Basic" />
      <Chip className={classes.chip} size="small" label="Basic" />
    </div>
  );
}

export default Chips;
