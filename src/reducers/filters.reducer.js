const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return action.filters;
    }
    // case "RESET": {
    //   return {
    //     term: "",
    //     categories: {
    //       all: true,
    //       programming: false,
    //       miscellaneous: false,
    //       dark: false,
    //       pun: false,
    //     },
    //     blacklist: {
    //       nsfw: false,
    //       religious: false,
    //       political: false,
    //       racist: false,
    //       sexist: false,
    //     },
    //   };
    // }
    default: {
      return state;
    }
  }
};

export default reducer;
