import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
// import { useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Tooltip from "@material-ui/core/Tooltip";

import {
  CategoryContext,
  DispatchCategoryContext,
} from "../contexts/category.context";
import {
  BlacklistContext,
  DispatchBlacklistContext,
} from "../contexts/blacklist.context";
import {
  SearchContext,
  DispatchSearchContext,
} from "../contexts/search.context";

import JokeList from "./JokeList";
import FavoriteJokeList from "./FavoriteJokeList";
import Footer from "./Footer";
import logo from "../images/logo512.png";
import useStyles from "../styles/HomeStyles";

function Home(props) {
  const categories = useContext(CategoryContext);
  const dispatchCategory = useContext(DispatchCategoryContext);
  const flags = useContext(BlacklistContext);
  const dispatchBlacklist = useContext(DispatchBlacklistContext);
  // const { term, handleInput, resetTerm } = useContext(SearchContext);
  const term = useContext(SearchContext);
  const dispatchSearch = useContext(DispatchSearchContext);
  const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = props.location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const refresh = () => {
    dispatchBlacklist({ type: "RESET" });
  };

  const handleSearch = (e) => {
    dispatchSearch({ type: "UPDATE", term: e.target.value });
  };
  const handleCategoryChange = (e) => {
    if (e.target.name === "all") {
      dispatchCategory({ type: "ALL" });
    } else {
      dispatchCategory({ type: "TOGGLE_CHECKBOX", name: e.target.name });
    }
  };

  const handleBlacklistChange = (e) => {
    dispatchBlacklist({ type: "TOGGLE", name: e.target.name });
  };
  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.drawerHeader}>
          <Typography className={classes.filterText} variant="h4">
            Filters
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.chevronIcon}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handleSearch}
          value={term}
          placeholder="search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
      <Typography className={classes.subHeading} variant="h6">
        Categories
      </Typography>
      <List>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            value="all"
            control={
              <Radio
                color="primary"
                checked={categories.all}
                name="all"
                onChange={handleCategoryChange}
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.programming}
                onChange={handleCategoryChange}
                name="programming"
                color="primary"
              />
            }
            label="Programming"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.miscellaneous}
                onChange={handleCategoryChange}
                name="miscellaneous"
                color="primary"
              />
            }
            label="Miscellaneous"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.dark}
                onChange={handleCategoryChange}
                name="dark"
                color="primary"
              />
            }
            label="Dark"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.pun}
                onChange={handleCategoryChange}
                name="pun"
                color="primary"
              />
            }
            label="Pun"
          />
        </FormGroup>
      </List>
      <Divider />
      <Typography className={classes.subHeading} variant="h6">
        Flags to blacklist
      </Typography>
      <List>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={flags.nsfw}
                onChange={handleBlacklistChange}
                name="nsfw"
                color="primary"
              />
            }
            label="NSFW"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={flags.religious}
                onChange={handleBlacklistChange}
                name="religious"
                color="primary"
              />
            }
            label="Religious"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={flags.political}
                onChange={handleBlacklistChange}
                name="political"
                color="primary"
              />
            }
            label="Political"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={flags.racist}
                onChange={handleBlacklistChange}
                name="racist"
                color="primary"
              />
            }
            label="Racist"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={flags.sexist}
                onChange={handleBlacklistChange}
                name="sexist"
                color="primary"
              />
            }
            label="Sexist"
          />
        </FormGroup>
      </List>
      <div className={classes.boxContainer}>
        <Button
          className={classes.resetButton}
          variant="contained"
          onClick={() => {
            dispatchCategory({ type: "RESET" });
            dispatchBlacklist({ type: "RESET" });
            dispatchSearch({ type: "RESET" });
          }}
        >
          Reset filters
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.logoAndName}>
            <Link to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
            <Typography className={classes.name} variant="h6" noWrap>
              <Link to="/">Jokes</Link>
            </Typography>
          </div>

          <div className={classes.appBarIconsRight}>
            {location === "/favorites" ? (
              <IconButton
                aria-label="view favorite jokes"
                color="inherit"
                onClick={() => props.history.push("/")}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <Tooltip title="Favorites">
                <IconButton
                  aria-label="view favorite jokes"
                  color="inherit"
                  onClick={() => props.history.push("/favorites")}
                >
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <SwipeableDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
      <div className={classes.contentWrapper}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {location === "/favorites" ? <FavoriteJokeList /> : <JokeList />}
          {location === "/favorites" ? null : (
            <Tooltip title="Refresh Jokes">
              <Fab
                color="secondary"
                aria-label="refresh"
                className={classes.refreshButton}
                onClick={refresh}
              >
                <RefreshIcon />
              </Fab>
            </Tooltip>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
