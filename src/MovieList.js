import React, { Component } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

class MovieList extends Component {
  render() {
    console.log(this.props);
    let movieCards = [];
    if (this.props.watch) {
      movieCards = this.props.movies
        .filter(movie => movie.done === true)
        .map(movie => <Card key={movie.name} movie={movie} />);
    } else {
      movieCards = this.props.movies
        .filter(movie => movie.done === false)
        .map(movie => <Card key={movie.name} movie={movie} />);
    }

    return (
      <div>
        <SearchBar search={this.props.search} />
        <div className="row">{movieCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(MovieList);
