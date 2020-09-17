import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

import Chips from "./Chips";

import { FavoriteContext } from "../contexts/FavoriteContext";

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
  favorite: {
    paddingLeft: "12px",
    marginRight: 0,
  },
  SnackbarMessage: {
    display: "flex",
  },
  SnackbarText: {
    margin: "auto",
    marginLeft: theme.spacing(1),
  },
}));

function SingleJoke({ joke }) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const classes = useStyles();
  const { favoritesId, addFavoriteJoke, removeFavoriteJoke } = useContext(
    FavoriteContext
  );

  const checkFavorite = (id) => {
    return favoritesId.includes(id);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setOpenSnackbar(true);
      addFavoriteJoke(joke);
    }
    if (e.target.checked === false) {
      removeFavoriteJoke(joke.id);
    }
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {joke.setup}
        </Typography>
        <Typography variant="body1" component="p">
          <br />
          {joke.delivery}
        </Typography>
      </CardContent>
      <div className={classes.footer}>
        <CardContent className={classes.chipContainer}>
          <Chips category={joke.category} flags={joke.flags} />
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          <FormControlLabel
            className={classes.favorite}
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={checkFavorite(joke.id)}
                name="checkedH"
                onChange={handleChange}
              />
            }
          />
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <div className={classes.SnackbarMessage}>
            <FavoriteIcon color="secondary" />
            <div className={classes.SnackbarText}>Added to favorites</div>
          </div>
        }
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Card>
  );
}

export default SingleJoke;
