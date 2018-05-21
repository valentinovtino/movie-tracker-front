import React, { Component } from 'react';
import { fetchMovieData } from '../../apiCalls/api';
import './App.css';
import CardHolderContainer from '../../Containers/CardHolderContainer';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogInPageContainer from '../../Containers/LogInPageContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testThis: ''

    }
  }

  async componentDidMount() {
    const url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=b896e3605c38d8f6ffb3a181d5bb558d&language=en-US&include_adult=false&sort_by=created_at.asc'

    const response = await fetchMovieData(url);
    const results = response.results;

    this.props.storeMovies(results);
  }
  
  render() {
    const userLoggedIn = this.props.user.name ? 
      <button className='log-out-button'>Log Out</button> : 
      <NavLink className='log-in-button' to='/login'>Log in</NavLink>
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movie-Tracker</h1>
          <NavLink to='/'>Home</NavLink>
          {userLoggedIn}
        </header>
        <Route exact path='/' component={CardHolderContainer} />
        <Route exact path='/login' component={LogInPageContainer} />
      </div>
    );

  }
}

export default App;
