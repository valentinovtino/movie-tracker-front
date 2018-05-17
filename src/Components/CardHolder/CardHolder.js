import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';

const CardHolder = ({ movies }) => {
  const parsedMovies = cleanData(movies);

  const movieCards = parsedMovies.map((movie) => {
    return (
      <Card {...movie} />
    );
  });

  return (
    <div>
      {movieCards}
    </div>
  );
};

export default CardHolder;