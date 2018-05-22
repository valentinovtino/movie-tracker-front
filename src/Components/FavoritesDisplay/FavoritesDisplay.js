import React from 'react';
import Card from '../Card/Card';
import { cleanData } from '../../apiCalls/helper';

export const FavoritesDisplay = (props) => {
  let cards;
  const determineDisplay = () => {
    if (props.favorites) {
      const parsedMovies = cleanData(props.favorites);
      cards = parsedMovies.map((movie) => {
        return (
          <Card movie={movie} key={movie.id} addUserFavorite={props.addUserFavorite} userID={props.userID} />
        );
      });
      return this.props.favorites.length > 0 ?
        { cards } : <h3> You haven't added any favorites yet! </h3>;
    } else {
      return <h3> You should log in to track your favorites </h3>;
    }
  }

  

  return (
    <div>
      {determineDisplay()}
    </div>
  );
};