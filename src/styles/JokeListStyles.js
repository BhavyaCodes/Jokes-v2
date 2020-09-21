import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridItem: {
    width: "100%",
  },
  refreshButton: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));
