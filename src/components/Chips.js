import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    fontWeight: 600,
  },
  Programming: {
    backgroundColor: "#394bad",
    color: "white",
  },
  Miscellaneous: {
    backgroundColor: "#ffed58",
    color: "black",
  },
  Dark: {
    backgroundColor: "black",
    color: "white",
  },
  Pun: {
    backgroundColor: "#68d751",
    color: "black",
  },
  nsfw: {
    backgroundColor: "#eb3d30",
    color: "white",
  },
  political: {
    backgroundColor: "red",
    color: "white",
  },
  racist: {
    backgroundColor: "#553529",
    color: "white",
  },
  religious: {
    backgroundColor: "#672881",
    color: "white",
  },
  sexist: {
    backgroundColor: "#f97d94",
    color: "black",
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
