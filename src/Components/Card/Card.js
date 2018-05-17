import React from 'react';


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

export default Card;