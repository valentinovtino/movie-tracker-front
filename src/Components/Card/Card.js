import React from 'react';

const Card = ({title, averageRating, posterPath, releaseData, overview}) => {



  return (
    <div>
      <h1>{title}</h1>
      <h3>{averageRating}</h3>
      <h3>{releaseData}</h3>
      <p>{overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} />

    </div>
  );
};

export default Card;