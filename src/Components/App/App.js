import React, { Component } from 'react';
import { fetchMovieData } from '../../apiCalls/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async componentDidMount() {
    const url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=b896e3605c38d8f6ffb3a181d5bb558d&language=en-US&include_adult=false&sort_by=created_at.asc'

    const response = await fetchMovieData(url);
    const results = response.results

    this.props.getMovies(results)

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movie-Tracker</h1>
        </header>

      </div>
    );
  }
}

export default App;
