const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      // console.log(state, action);
      // console.log(state[action.name]);
      return { ...state, [action.name]: !state[action.name] };
    }
    case "RESET": {
      return {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
