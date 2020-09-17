import React from "react";

import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";

import useStyles from "../styles/FooterStyles";

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
