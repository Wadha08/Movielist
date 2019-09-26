import React, { Component } from "react";
import { connect } from "react-redux";

import { watchedMovies } from "./store/actions";
import { deleteMovie } from "./store/actions";
import { notwatchedMovies } from "./store/actions";

class Card extends Component {
  getview = () => {
    if (this.props.movie.done) {
      return (
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.watchedMovies(this.props.movie)}
        >
          {this.props.text}
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.notwatchedMovies(this.props.movie)}
        >
          {this.props.text}
        </button>
      );
    }
  };
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{this.props.movie.name}</p>
            <div>{this.getview()}</div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                this.props.deleteMovie(this.props.movie);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    watchedMovies: movie => dispatch(watchedMovies(movie)),
    deleteMovie: movie => dispatch(deleteMovie(movie)),
    notwatchedMovies: movie => dispatch(notwatchedMovies(movie))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Card);
