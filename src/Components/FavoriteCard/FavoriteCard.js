import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class FavoriteCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasErrored: false
    }
  }

  handleFavorite = () => {
    this.props.removeUserFavorite(this.props.movie, this.props.movie.user_id)
  };

  render() {
    const errorRedirect =
      this.state.hasErrored === true ?
        <Redirect to='/login' /> :
        <div></div>;

    return (
      <div className='flip-container'>
        {errorRedirect}
        <div className='flipper'>
          <div className='Card front'>
            <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} />
          </div>
          <div className='Card back'>
            <h1 className='font'>{this.props.movie.title}</h1>
            <h3 className='font'>Rating: {this.props.movie.average_rating}</h3>
            <button className='font' onClick={this.handleFavorite}> Remove from favorites </button>
            <h3 className='font'>{this.props.movie.release_date}</h3>
            <p className='font'>{this.props.movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

FavoriteCard.propTypes = {
  // movie: PropTypes.object.isRequired
};

export default FavoriteCard;