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

export const userHasErrored = (bool) => ({
  type: 'USER_HAS_ERRORED',
  userHasErrored: bool
});

export const postUser = (user) => {
  return async (dispatch) => {
    console.log(user)
    try { 
      const response = await fetch('http://localhost3000/api/users/new', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
      })
      const id = await response.json()
      dispatch(createUser({ ...user, id }))
    } catch(error) {
      dispatch(userHasErrored(true))
    }
  }
}
