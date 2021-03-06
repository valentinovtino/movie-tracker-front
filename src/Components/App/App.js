import React, { Component } from 'react';
import { fetchMovieData } from '../../apiCalls/api';
import './App.css';
import CardHolderContainer from '../../Containers/CardHolderContainer';
import LogInPageContainer from '../../Containers/LogInPageContainer';
import FavoritesDisplayContainer from '../../Containers/FavoritesDisplayContainer';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=b896e3605c38d8f6ffb3a181d5bb558d&language=en-US&include_adult=false&sort_by=created_at.asc';

    const response = await fetchMovieData(url);
    const results = response.results;

    this.props.storeMovies(results);
  }
  
  render() {
    const userLoggedIn = this.props.user.name ? 
      <button className='log-out-button' onClick={this.props.userLoggedOut}>Log Out</button> :
      <NavLink className='log-in-button nav-btn' to='/login'>Log in</NavLink>;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MOVIE - TRACKER</h1>
        <Route exact path='/' component={CardHolderContainer} />
        <Route exact path='/login' component={LogInPageContainer} />
        <Route exact path='/favorites' component={FavoritesDisplayContainer} />
        </header>
        <div className='nav-container'>
          <NavLink  className='nav-btn' to='/'>Home</NavLink>
          {userLoggedIn}
          <NavLink className='log-in-button nav-btn' to='/favorites'>Your Favorites</NavLink>
        </div>
      </div>
    );

  }
}

App.propTypes = {
  user: PropTypes.object,
  storeMovies: PropTypes.func,
  userLoggedOut: PropTypes.func
};

export default App;
