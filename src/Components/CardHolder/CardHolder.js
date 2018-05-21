import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './CardHolder.css';
import PropTypes from 'prop-types';

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

CardHolder.propTypes = {
  parsedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardHolder;