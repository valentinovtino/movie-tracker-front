import { movies, user, userErrorReceived } from './Reducers';
import { mockObj } from '../mockData';
import { getMovies, createUser, userHasErrored } from '../Actions/Actions';

describe('Reducers', () => {
  describe('Movies Reducer', () => {
    it('should return an empty array if there is no given state', () => {
      let expected = [];

      let actual = movies(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return an array of movies when receives the correct action', () => {
      let expected = mockObj.results;

      let actual = movies(undefined, getMovies(mockObj.results));

      expect(actual).toEqual(expected);
    });
  });

  describe('User Reducer', () => {
    it('should return and empty object if there is no given state', () => {
      let expected = {};

      let actual = user(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected);
    });

    it('should return a user object when it receives the correct action', () => {
      let mockUser = {
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

      let actual = user(undefined, createUser(mockUser));

      expect(actual).toEqual(expected);
    })
  });

  describe('User Has Errored', () => {
    it('should return a default of false if there is no given state', () => {
      let actual = userErrorReceived(undefined, {type: '@@INIT'})
    
      let expected = {userHasErrored: false, error: ''}

      expect(actual).toEqual(expected);
    });

    ('it should return a boolean', () => {
      let actual = userErrorReceived(undefined, userHasErrored(true));

      expected(actual).toEqual(true);
    });
  });































});