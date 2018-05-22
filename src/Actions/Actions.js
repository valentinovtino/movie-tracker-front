import { truncate } from "fs";

export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const createUser = ({ name, email, password, id, favorites }) => ({
  type: 'CREATE_USER',
  name,
  email,
  password,
  id,
  favorites: favorites || []
});

export const addUserFavorite = (movie) => ({
  type: 'ADD_USER_FAVORITE',
  movie
})

export const removeUserFavorite = (movieID) => ({
  type: 'REMOVE_USER_FAVORITE',
  movieID
})

export const userLoggedOut = () => ({
  type: 'USER_LOGGED_OUT'
});

export const userHasErrored = (bool, error) => ({
  type: 'USER_HAS_ERRORED',
  userHasErrored: bool,
  error
});

export const postUser = (user) => {
  return async (dispatch) => {
    try { 
      const response = await fetch('http://localhost:3000/api/users/new', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
      });
      if (!response.ok) {
        dispatch(userHasErrored(true, 'That email is already linked to an account'));
        return true;
      }
      const id = await response.json();
      dispatch(createUser({ ...user, id }));
      dispatch(userHasErrored(false, ''));
      return false;
    } catch (error) {
      dispatch(userHasErrored(true, error));
      return true;
    }
  };
};

export const fetchUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify(user),  
        headers: { 'content-type': 'application/json' }
      });
      if (!response.ok) {
        dispatch(userHasErrored(true, 'Email and password do not match'));
        return true;
      }
      const data = await response.json();
      const favoritesResponse = await fetch(`http://localhost:3000/api/users/${data.data.id}/favorites`);
      const favorites = await favoritesResponse.json();
      dispatch(createUser({...data.data, favorites: favorites.data}));
      dispatch(userHasErrored(false, ''));
      return false;
    } catch (error) {
      dispatch(userHasErrored(true, 'Email and password do not match'));
      return true;
    }
  };
};

export const addFavorite = (movie, user_id) => {
  return async (dispatch) => {
    try {
      const movieBody = {
        movie_id: movie.id,
        title: movie.title,
        poster_path: movie.posterPath,
        release_date: movie.releaseData,
        vote_average: movie.averageRating,
        overview: movie.overview, 
        user_id: user_id
      };
      const response = await fetch('http://localhost:3000/api/users/favorites/new', {
        method: 'POST',
        body: JSON.stringify(movieBody),
        headers: {
          'content-type': 'application/json'
        },
      });
      if (!response.ok) {
        dispatch(userHasErrored(true, 'Please log in to save a favorite'));
        return true
      }
      dispatch(addUserFavorite(movie));
      return false
    } catch (error) {
      dispatch(userHasErrored(true, 'Something went wrong, sorry'));
      return true
    }
  };
};