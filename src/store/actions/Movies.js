import * as actionType from "./actionType";

//add movie
export const addMovie = Movie => {
  return {
    type: actionType.ADD_MOVIE,
    payload: Movie
  };
};

//already watched movied
export const watchedMovies = movie => {
  return {
    type: actionType.WATCHED,
    payload: movie
  };
};

// notwatched movied
export const notwatchedMovies = movie => {
  return {
    type: actionType.NOTWATCHED,
    payload: movie
  };
};

//want to delete a movie
export const deleteMovie = movie => {
  return {
    type: actionType.DELETE_MOVIE,
    payload: movie
  };
};
