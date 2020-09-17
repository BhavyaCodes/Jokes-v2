import React from "react";
import Chip from "@material-ui/core/Chip";

import useStyles from "../styles/ChipsStyles";

function Chips({ category, flags }) {
  const classes = useStyles();
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
