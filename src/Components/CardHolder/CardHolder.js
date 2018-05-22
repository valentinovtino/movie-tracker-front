import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './CardHolder.css';
import PropTypes from 'prop-types';

const CardHolder = (props) => {
  const parsedMovies = cleanData(props.movies);

  const movieCards = parsedMovies.map((movie) => {
    return (
      <Card movie={movie} key={movie.id} addUserFavorite={props.addUserFavorite} userID={props.userID}/>
    );
  });

  return (
    <div className='Card-container'>
      {movieCards}
    </div>
  );
};

CardHolder.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  addUserFavorite: PropTypes.func.isRequired,
  userID: PropTypes.number
};

export default CardHolder;