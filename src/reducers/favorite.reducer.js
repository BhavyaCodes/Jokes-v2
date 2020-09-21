const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_JOKE": {
      return [action.joke, ...state];
    }
    case "ADD_ID": {
      return [action.jokeId, ...state];
    }
    case "REMOVE": {
      const updatedState = { ...state };
      updatedState.favoriteJokes = updatedState.favoriteJokes.filter(
        (joke) => joke.id !== action.id
      );
      updatedState.favoritesId = updatedState.favoritesId.filter(
        (joke) => joke.id !== action.id
      );
      return updatedState;
    }
    case "REMOVE_JOKE": {
      return state.filter((joke) => joke.id !== action.jokeId);
    }
    case "REMOVE_ID": {
      return state.filter((id) => id !== action.jokeId);
    }
    default:
      return state;
  }
};

export default reducer;
