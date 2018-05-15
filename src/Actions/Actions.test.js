import { mockCleanedData } from "../mockData";
import { getFilms } from './Actions'

describe('Actions', () => {
  describe('GET MOVIE', () => {
    it('should return an action object', () => {
      let expected = {
        type: 'GET_MOVIES',
        movies: mockCleanedData
      };
      let actual = getFilms(mockCleanedData);

      expect(actual).toEqual(expected);
    });
  });
});