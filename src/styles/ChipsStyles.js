import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {},
  chip: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    fontWeight: 600,
  },
  Programming: {
    backgroundColor: "#394bad",
    color: "white",
  },
  Miscellaneous: {
    backgroundColor: "#ffed58",
    color: "black",
  },
  Dark: {
    backgroundColor: "black",
    color: "white",
  },
  Pun: {
    backgroundColor: "#68d751",
    color: "black",
  },
  nsfw: {
    backgroundColor: "#eb3d30",
    color: "white",
  },
  political: {
    backgroundColor: "red",
    color: "white",
  },
  racist: {
    backgroundColor: "#553529",
    color: "white",
  },
  religious: {
    backgroundColor: "#672881",
    color: "white",
  },
  sexist: {
    backgroundColor: "#f97d94",
    color: "black",
  },
}));
