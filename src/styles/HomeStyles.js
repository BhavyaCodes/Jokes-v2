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
