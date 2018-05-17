import { moviesReducer } from './Reducers';
import { mockObj } from '../mockData';
import {getMovies} from '../Actions/Actions';

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
  
});