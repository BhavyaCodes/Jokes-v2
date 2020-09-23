import React, { useContext, memo, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LinkIcon from "@material-ui/icons/Link";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import Chips from "./Chips";

import {
  FavoriteContext,
  DispatchFavoriteContext,
} from "../contexts/favorite.context";
import useStyles from "../styles/SingleJokeStyles";

function SingleJoke({ joke }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShareLink = () => {
    setSnackbarText("Link Copied");
    setOpenSnackbar(true);
    setAnchorEl(null);
  };

  const handleShareJoke = () => {
    setSnackbarText("Joke Copied");
    setOpenSnackbar(true);
    setAnchorEl(null);
  };

  const handleShareClose = () => {
    setAnchorEl(null);
  };

  const getJokeUrl = (joke) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/joke/${joke.id}`;
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarText, setSnackbarText] = useState("abcd");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const classes = useStyles();
  const { favoritesId } = useContext(FavoriteContext);
  const { dispatchId, dispatchJoke } = useContext(DispatchFavoriteContext);

  const checkFavorite = (id) => {
    return favoritesId.includes(id);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setSnackbarText("Added to favorites");
      setOpenSnackbar(true);
      dispatchJoke({ type: "ADD_JOKE", joke });
      dispatchId({ type: "ADD_ID", jokeId: joke.id });
    }
    if (e.target.checked === false) {
      dispatchJoke({ type: "REMOVE_JOKE", jokeId: joke.id });
      dispatchId({ type: "REMOVE_ID", jokeId: joke.id });
    }
  };

  console.log("SingleJoke");
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
        <CardActions disableSpacing className={classes.CardActions}>
          <Tooltip title="Add to Favorites">
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
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              aria-label="share"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleShareClick}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleShareClose}
          >
            <CopyToClipboard text={getJokeUrl(joke)}>
              <MenuItem onClick={handleShareLink}>
                <ListItemIcon>
                  <LinkIcon fontSize="small" />
                </ListItemIcon>
                Copy Link
              </MenuItem>
            </CopyToClipboard>
            <CopyToClipboard text={joke.joke}>
              <MenuItem onClick={handleShareJoke}>
                <ListItemIcon>
                  <FileCopyIcon fontSize="small" />
                </ListItemIcon>
                Copy Joke
              </MenuItem>
            </CopyToClipboard>
          </Menu>
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
            {(() => {
              if (snackbarText === "Added to favorites") {
                return <FavoriteIcon color="secondary" />;
              } else if (snackbarText === "Link Copied") {
                return <LinkIcon />;
              } else {
                return <FileCopyIcon />;
              }
            })()}
            <div className={classes.SnackbarText}>{snackbarText}</div>
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

export default memo(SingleJoke);
