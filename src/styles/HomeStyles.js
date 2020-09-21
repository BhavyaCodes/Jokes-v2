import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;

export default makeStyles((theme) => ({
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
  boxContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logoAndName: {
    display: "flex",
    "& a": {
      textDecoration: "none",
    },
  },
  logo: {
    height: "48px",
    [theme.breakpoints.down("sm")]: {
      height: "36px",
    },
  },
  name: {
    margin: "auto",
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    "& a": {
      color: "white",
    },
  },
  refreshButton: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },

  appBarIconsRight: {
    margin: "auto",
    marginRight: 0,
  },
  contentWrapper: {
    width: "100%",
  },
}));
