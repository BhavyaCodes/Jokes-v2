import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "orange",
    padding: 0,
    margin: 0,
  },
}));

function Footer() {
  const classes = useStyles();
  return <div className={classes.root}>asdfads</div>;
}

export default Footer;
