import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  contentWrapper: {
    width: "100%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[200],
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
  },
}));
