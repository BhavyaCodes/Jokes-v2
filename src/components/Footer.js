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
    marginLeft: theme.spacing(1),
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
      <Button
        className={classes.apiBtn}
        variant="contained"
        color="secondary"
        disableElevation
        endIcon={<OpenInNewIcon />}
      >
        API
      </Button>
      <div className={classes.icons}>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
