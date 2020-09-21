const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return action.filters;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
