export const movies = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES' :
      return [...state, ...action.movies];
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER' :
      return {...state, 
        name: action.name,
        email: action.email,
        password: action.password,
        favorites: action.favorites,
        id: action.id
      };
    case 'ADD_USER_FAVORITE' :
      return {...state, favorites: [...state.favorites, action.movie]};
    case 'REMOVE_USER_FAVORITE' :
      console.log(state)
      console.log('**********')
      const newState = {...state, favorites: state.favorites.filter(currentMovie => currentMovie.movie_id !== action.movie_id)};
      return newState;
    case 'USER_LOGGED_OUT' :
      return {};
    default:
      return state;
  }
};

export const userErrorReceived = (state = {userHasErrored: false, error: ''}, action) => {
  switch (action.type) {
    case 'USER_HAS_ERRORED' :
      return {
        userHasErrored: action.userHasErrored,
        error: action.error
      };
    default:
      return state;
  }
}



