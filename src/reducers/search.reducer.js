const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return action.term;
    }
    case "RESET": {
      return "";
    }
    default:
      return state;
  }
};

export default reducer;
