import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false
    };
  }
  
  handleFavorite = () => {
    if (!this.props.userID) {
      this.setState({ hasErrored: true });
    } else {
      this.props.addUserFavorite(this.props.movie, this.props.userID);
    } 
  };

  render () {
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
            <h3 className='font'>Rating: {this.props.movie.averageRating}</h3>
            <button className='font' onClick={this.handleFavorite}> Add to favorites </button>
            <h3 className='font'>{this.props.movie.releaseData}</h3>
            <p className='font'>{this.props.movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Card;