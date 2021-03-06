import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

export const FavoritesDisplay = (props) => {
  let cards;
  const determineDisplay = () => {
    if (props.favorites) {
      cards = props.favorites.map((movie) => {
        return (
          <FavoriteCard 
            movie={movie} 
            key={movie.id} 
            addUserFavorite={props.addUserFavorite} 
            userID={props.user_ID}
            removeUserFavorite={props.removeUserFavorite}
          />
        );
      });
      return props.favorites.length > 0 ?
        cards : <h3> You haven't added any favorites yet! </h3>;
    } else {
      return <h3> You should log in to track your favorites </h3>;
    }
  };

  cards = determineDisplay();

  return (
    <div className='Card-container'>
      {cards}
    </div>
  );
};