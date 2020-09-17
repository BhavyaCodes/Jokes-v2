import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  apiBtn: {
    height: "90%",
    margin: "auto",
    marginRight: theme.spacing(1),
  },
  icons: {
    "& svg": {
      color: "white",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.icons}>
        <a
          href="https://github.com/Juggernaut9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          href="https://twitter.com/BhavyaTomar7"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </a>
      </div>
      <Button
        href="https://sv443.net/jokeapi/v2/"
        target="_blank"
        className={classes.apiBtn}
        variant="contained"
        color="secondary"
        disableElevation
        rel="noreferrer noopener"
        endIcon={<OpenInNewIcon />}
      >
        API
      </Button>
    </div>
  );
}

export default Footer;
