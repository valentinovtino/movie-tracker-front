import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './CardHolder.css';

const CardHolder = ({ movies }) => {
  const parsedMovies = cleanData(movies);

  const movieCards = parsedMovies.map((movie) => {
    return (
      <Card {...movie} />
    );
  });

  return (
    <div className='Card-container'>
      {movieCards}
    </div>
  );
};

export default CardHolder;