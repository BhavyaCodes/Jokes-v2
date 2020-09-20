import { red } from "@material-ui/core/colors";

const reducer = (state, action) => {
  switch (action.type) {
    case "ALL": {
      return {
        all: true,
        programming: false,
        miscellaneous: false,
        dark: false,
        pun: false,
      };
    }
    case "TOGGLE_CHECKBOX": {
      return { ...state, all: false, [action.name]: !state[action.name] };
    }
    case "RESET": {
      return {
        all: true,
        programming: false,
        miscellaneous: false,
        dark: false,
        pun: false,
      };
    }
    default: {
      return { state };
    }
  }
};

export default reducer;
