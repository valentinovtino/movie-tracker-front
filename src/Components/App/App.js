import React, { Component } from 'react';
import { fetchMovieData } from '../../apiCalls/api';
import './App.css';
import CardHolderContainer from '../../Containers/CardHolderContainer';
import { NavLink, Route } from 'react-router-dom'
import LogInPage from '../LogInPage/LogInPage.js'
import PropTypes from 'prop-types';

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

    this.props.storeMovies(results)

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/"><h1 className="App-title">Welcome to Movie-Tracker</h1></NavLink>
          <NavLink to="/login"><span>Log in</span></NavLink>
          <LogInPage />
        </header>
        <Route exact match='/' component={CardHolderContainer} />
      </div>
    );
  }
}



export default App;
