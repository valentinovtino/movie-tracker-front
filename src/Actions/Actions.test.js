import { mockCleanedData } from "../mockData";
import { getMovies, createUser, postUser, userHasErrored } from './Actions';

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
        password: 'secretlyuncool',
        id: null
      }

      let expected = {
        type: 'CREATE_USER',
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool',
        id: null
      }

      let actual = createUser(user)

      expect(actual).toEqual(expected);
    });
  });

  describe('USER HAS ERRORED', () => {
    it('should return a boolean', () => {
      let expected = {
        type: 'USER_HAS_ERRORED',
        userHasErrored: true
      }

      let actual = userHasErrored(true);

      expect(actual).toEqual(expected);
    });
  });

  describe('POST USER', () => {
    
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => 
       Promise.resolve({
        status: 200,
        json: () => 
        Promise.resolve(2)}));
    });

    // it('calls fetch with the correct data when adding a new user', async () => {
    //   let user = {
    //     name: 'Cool Guy',
    //     email: 'coolguy@aol.com',
    //     password: 'secretlyuncool'
    //   }

    //   const expectedFetchBody = {
    //     method: 'POST',
    //     body: JSON.stringify(user),
    //     headers: {'content-type': 'application/json'}
    //   }

    //   await postUser(user); 

    //   await expect(window.fetch).toHaveBeenCalledWith('http://localhost3000/api/users/new', expectedFetchBody)

    // });

  });
});










