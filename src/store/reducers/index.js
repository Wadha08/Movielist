import { combineReducers } from "redux";
import moviesReducer from "./MovieList";

const rootReducer = combineReducers({
  moviesState: moviesReducer
});

export default rootReducer;
