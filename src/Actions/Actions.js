export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const createUser = ({ name, email, password }) => ({
  type: 'CREATE_USER',
  name,
  email,
  password
})