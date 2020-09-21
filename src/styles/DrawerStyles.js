import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  filterText: {
    paddingLeft: theme.spacing(2),
  },
  chevronIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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
  subHeading: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  formGroup: {
    marginLeft: theme.spacing(2),
  },
  resetButton: {
    width: "90%",
  },
}));
