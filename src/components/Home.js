import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Tooltip from "@material-ui/core/Tooltip";

import { DispatchBlacklistContext } from "../contexts/blacklist.context";

import Drawer from "./Drawer";
import JokeList from "./JokeList";
import FavoriteJokeList from "./FavoriteJokeList";
import Footer from "./Footer";
import logo from "../images/logo512.png";
import useStyles from "../styles/HomeStyles";

function Home(props) {
  // const dispatchBlacklist = useContext(DispatchBlacklistContext);
  const { window } = props;
  // const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = props.location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  // const refresh = () => {
  //   // dispatchBlacklist({ type: "RESET" });
  //   forceUpdate();
  // };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log("Home");
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
            <Drawer
              mobileOpen={mobileOpen}
              handleDrawerClose={handleDrawerClose}
            />
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <SwipeableDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            variant="permanent"
            open
          >
            <Drawer
              mobileOpen={mobileOpen}
              handleDrawerClose={handleDrawerClose}
            />
          </SwipeableDrawer>
        </Hidden>
      </nav>
      <div className={classes.contentWrapper}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {location === "/favorites" ? <FavoriteJokeList /> : <JokeList />}
          {/*location === "/favorites" ? null : (
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
          )*/}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
