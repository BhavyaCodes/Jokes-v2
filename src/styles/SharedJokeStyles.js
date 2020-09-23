import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(2),
    justifyContent: "center",
  },
  jokeContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
