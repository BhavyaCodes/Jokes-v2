import React, { useContext } from "react";

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
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { CategoryContext } from "../contexts/CategoryContext";
import { BlacklistContext } from "../contexts/BlacklistContext";
import { SearchContext } from "../contexts/SearchContext";

import JokeList from "./JokeList";
import FavoriteJokeList from "./FavoriteJokeList";
import Footer from "./Footer";
import logo from "../images/logo512.png";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[200],
  },
  filterText: {
    paddingLeft: theme.spacing(2),
  },
  subHeading: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  formGroup: {
    marginLeft: theme.spacing(2),
  },
  boxContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logoAndName: {
    display: "flex",
  },
  logo: {
    height: "48px",
  },
  name: {
    margin: "auto",
    marginLeft: theme.spacing(2),
  },
  search: {
    position: "relative",
    margin: theme.spacing(1),
  },
  searchIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: theme.spacing(5),
    color: "black",
    zIndex: 2,
  },
  inputRoot: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[100],
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingButtom: theme.spacing(1),
    paddingLeft: theme.spacing(6),
  },
  refreshButton: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
  resetButton: {
    width: "90%",
  },
  appBarIconsRight: {
    margin: "auto",
    marginRight: 0,
  },
  drawerHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  chevronIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  contentWrapper: {
    width: "100%",
  },
}));

function ResponsiveDrawer(props) {
  const { categories, changeCategories, resetCategories } = useContext(
    CategoryContext
  );
  const { flags, changeFlags, resetFlags, setFlags } = useContext(
    BlacklistContext
  );
  const { term, handleInput, resetTerm } = useContext(SearchContext);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = props.location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const refresh = () => {
    setFlags({ ...flags });
  };

  console.log(props);
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
          onChange={handleInput}
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
                onChange={changeCategories}
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.programming}
                onChange={changeCategories}
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
                onChange={changeCategories}
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
                onChange={changeCategories}
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
                onChange={changeCategories}
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
                onChange={changeFlags}
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
                onChange={changeFlags}
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
                onChange={changeFlags}
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
                onChange={changeFlags}
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
                onChange={changeFlags}
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
            resetCategories();
            resetFlags();
            resetTerm();
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
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography className={classes.name} variant="h6" noWrap>
              Jokes
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
              <IconButton
                aria-label="view favorite jokes"
                color="inherit"
                onClick={() => props.history.push("/favorites")}
              >
                <FavoriteIcon />
              </IconButton>
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
            <Fab
              color="secondary"
              aria-label="refresh"
              className={classes.refreshButton}
              onClick={refresh}
            >
              <RefreshIcon />
            </Fab>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ResponsiveDrawer;
