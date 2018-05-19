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
        favorites: []
      }
    default:
      return state;
  }
}

export const userErrorReceived = (state = false, action) => {
  switch (action.type) {
    case 'USER_HAS_ERRORED' :
      return action.bool;
    default:
      return state;
  }
}



