import * as actionType from "../actions/actionType";
import movies from "../../data";
const initialState = {
  movies: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.NOTWATCHED:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie !== action.payload ? movie : { ...movie, done: false }
        )
      };
    case actionType.WATCHED:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie !== action.payload ? movie : { ...movie, done: true }
        )
      };

    case actionType.ADD_MOVIE:
      const addmovie = action.payload;
      return {
        ...state,
        movies: state.movies.concat(addmovie)
      };
    case actionType.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
