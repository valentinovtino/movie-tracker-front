import React from 'react';
import PropTypes from 'prop-types';

const Card = ({movie, addUserFavorite, userID}) => {
  return (
    <div className='flip-container'>
      <div className='flipper'>
        <div className='Card front'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} />
        </div>
        <div className='Card back'>
          <h1>{movie.title}</h1>
          <h3>Rating: {movie.averageRating}</h3>
          <button onClick={() => addUserFavorite(movie, userID)}> Add to favorites </button>
          <h3>{movie.releaseData}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Card;