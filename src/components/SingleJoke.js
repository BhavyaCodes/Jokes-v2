import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

function SingleJoke({ joke }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {joke.joke}
        </Typography>
      </CardContent>
      <div className={classes.footer}>
        <CardContent className={classes.chipContainer}>
          <Chips category={joke.category} flags={joke.flags} />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default SingleJoke;
