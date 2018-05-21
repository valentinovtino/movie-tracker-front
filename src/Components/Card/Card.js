import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, averageRating, posterPath, releaseData, overview}) => {



  return (
    <div className='flip-container'>
      <div className='flipper'>
        <div className='Card front'>
          <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
        </div>
        <div className='Card back'>
          <h1>{title}</h1>
          <h3>Rating: {averageRating}</h3>
          <h3>{releaseData}</h3>
          <p>{overview}</p>

        </div>
      </div>
      
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string, 
  averageRating: PropTypes.number,
  posterPath: PropTypes.string,
  releaseData: PropTypes.string,
  overview: PropTypes.string
};

export default Card;