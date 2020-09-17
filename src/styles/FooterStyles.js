import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  apiBtn: {
    height: "90%",
    margin: "auto",
    marginRight: theme.spacing(1),
  },
  icons: {
    "& svg": {
      color: "white",
    },
  },
}));
