import React, { Component } from "react";

import "./App.css";

import MovieList from "./MovieList";
import Add from "./Add";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Add />

        <h3>Watchlist</h3>
        <MovieList watch={true} />
        <h3>
          Watched <button disabled className="count"></button>
        </h3>
        <MovieList watch={false} />
        <br />
      </div>
    );
  }
}

export default App;
