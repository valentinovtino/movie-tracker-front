export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES' :
      return [...state, ...action.movies];
    default:
      return state;
  }
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER' :
      return {...state, 
        name: action.name,
        email: action.email,
        password: action.password,
        favorites: []
      }
    default:
      return state;
  }
}
