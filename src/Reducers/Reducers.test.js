import { moviesReducer, userReducer } from './Reducers';
import { mockObj } from '../mockData';
import { getMovies, createUser } from '../Actions/Actions';

describe('Reducers', () => {
  describe('Movies Reducer', () => {
    it('should return an empty array if there is no given state', () => {
      let expected = [];

      let actual = moviesReducer(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return an array of movies when receives the correct action', () => {
      let expected = mockObj.results;

      let actual = moviesReducer(undefined, getMovies(mockObj.results));

      expect(actual).toEqual(expected);
    });
  });

  describe('User Reducer', () => {
    it('should return and empty object if there is no given state', () => {
      let expected = {};

      let actual = userReducer(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return a user object when it receives the correct action', () => {
      let user = {
        formState: 'create-user',
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool'
      }

      let expected = {
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool',
        favorites: []
      }

      let actual = userReducer(undefined, createUser(user));

      expect(actual).toEqual(expected);
    })
  });
});