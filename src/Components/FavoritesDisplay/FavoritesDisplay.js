import React from 'react';
import Card from '../Card/Card';

export const FavoritesDisplay = (props) => {
  const parsedMovies = cleanData(props.favorites);
  const cards = parsedMovies.map((movie) => {
    return (
      <Card movie={movie} key={movie.id} addUserFavorite={props.addUserFavorite} userID={props.userID} />
    );
  });

  const display = this.props.favorites.length > 0 ? 
    {cards} : <h3> You haven't added any favorites yet! </h3>;

  return (
    <div>
      {display}
    </div>
  );
};