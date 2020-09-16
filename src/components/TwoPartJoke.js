import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import Chips from "./Chips";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chipContainer: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
}));

function SingleJoke(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.joke.setup}
        </Typography>
        <Typography variant="body1" component="p">
          <br />
          {props.joke.delivery}
        </Typography>
      </CardContent>
      <div className={classes.footer}>
        <CardContent className={classes.chipContainer}>
          <Chips />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default SingleJoke;
