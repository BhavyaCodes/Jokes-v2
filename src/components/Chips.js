import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
  Programming: {
    backgroundColor: "blue",
  },
}));

function Chips({ category, flags }) {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <div className={classes.root}>
      <Chip
        className={`${classes[`${category}`]} ${classes.chip}`}
        size="small"
        label={category}
      />
      {Object.keys(flags).map((key) => (
        <>
          {flags[key] ? (
            <Chip
              className={`${classes[`${key}`]} ${classes.chip} `}
              size="small"
              label={key.toString()}
            />
          ) : null}
        </>
      ))}
    </div>
  );
}

export default Chips;
