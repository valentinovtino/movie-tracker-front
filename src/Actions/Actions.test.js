import { mockCleanedData } from "../mockData";
import { getMovies, createUser } from './Actions';

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

  describe('CREATE USER', () => {
    it('should return an action object', () => {
      const user = {
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool'
      }

      let expected = {
        type: 'CREATE_USER',
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool'
      }

      let actual = createUser(user)

      expect(actual).toEqual(expected);
    });
  });

});