import { moviesReducer } from './Reducers';

describe('Reducers', () => {
  describe('Movies Reducer', () => {
    it('should return an empty array if there is no given state', () => {
      let expected = [];

      let actual = moviesReducer(undefined, {type: '@@INIT'});

      expect(actual).toEqual(expected)
    });
  });
});