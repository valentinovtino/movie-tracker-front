import { mockCleanedData } from "../mockData";
import { getMovies } from './Actions'

describe('Actions', () => {
  describe('GET MOVIE', () => {
    it('should return an action object', () => {
      let expected = {
        type: 'GET_MOVIES',
        movies: mockCleanedData
      };
      let actual = getMovies(mockCleanedData);

      expect(actual).toEqual(expected);
    });
  });
});