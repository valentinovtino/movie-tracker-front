export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const createUser = ({ name, email, password, id }) => ({
  type: 'CREATE_USER',
  name,
  email,
  password,
  id
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
        dispatch(userHasErrored(true, response));
        return response;
      }
      const id = await response.json();
      dispatch(createUser({ ...user, id }));
    } catch (error) {
      dispatch(userHasErrored(true, Error(error)));
    }
  };
};
