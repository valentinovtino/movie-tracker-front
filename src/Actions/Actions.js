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

export const userLoggedOut = () => ({
  type: 'USER_LOGGED_OUT'
})

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
        return dispatch(userHasErrored(true, 'That email is already linked to an account'));
      }
      const id = await response.json();
      dispatch(createUser({ ...user, id }));
      dispatch(userHasErrored(false, ''));
    } catch (error) {
      dispatch(userHasErrored(true, error));
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
        return dispatch(userHasErrored(true, 'Email and password do not match'));
      }
      const data = await response.json();
      dispatch(createUser(data.data));
      dispatch(userHasErrored(false, ''));
    } catch (error) {
      dispatch(userHasErrored(true, 'Email and password do not match'));
    }
  };
};