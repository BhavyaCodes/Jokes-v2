import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
