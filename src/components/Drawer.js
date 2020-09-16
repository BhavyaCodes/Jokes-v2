import React, { useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
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

import { CategoryContext } from "../contexts/CategoryContext";
import { BlacklistContext } from "../contexts/BlacklistContext";

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
}));

function ResponsiveDrawer(props) {
  const { categories, changeCategories } = useContext(CategoryContext);
  const { flags, changeFlags } = useContext(BlacklistContext);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography className={classes.filterText} variant="h4">
          Filters
        </Typography>
      </div>
      <Divider />
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
        <Button variant="contained">Reset filters</Button>
        <Button variant="contained" color="primary">
          Refresh
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
          <Typography variant="h6" noWrap>
            Jokes
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
