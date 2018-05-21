import { mockCleanedData } from "../mockData";
import { getMovies, createUser, postUser, userHasErrored } from './Actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
      };

      let expected = {
        type: 'CREATE_USER',
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool',
        id: null
      };

      let actual = createUser(user);

      expect(actual).toEqual(expected);
    });
  });

  describe('USER HAS ERRORED', () => {
    it('should return a boolean', () => {
      let expected = {
        type: 'USER_HAS_ERRORED',
        userHasErrored: true
      };

      let actual = userHasErrored(true);

      expect(actual).toEqual(expected);
    });
  });

  describe('POST USER', () => {
    let store;
    const mockStore = configureStore([thunk]);
    const url = 'http://localhost:3000/api/users/new';

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}
    };

    const user = {
      name: 'Cool Guy',
      email: 'coolguy@aol.com',
      password: 'secretlyuncool'
    };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => 
            Promise.resolve(2)}));

      store = mockStore({});
    });

    it('calls fetch with the correct data when adding a new user', async () => {
      await store.dispatch(postUser(user)).then(() => store.getActions());

      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('calls createUser and userHasErrored actions if fetch response is ok', async () => {
      const expectedActions = await store.dispatch(postUser(user))
        .then(() =>  store.getActions());

      expect(expectedActions[0]).toEqual(createUser({...user, id: 2}));
      expect(expectedActions[1]).toEqual(userHasErrored(false, ''));
    });

    it('calls userHasErrored with true if fetch response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: false,
          json: () => 
            Promise.resolve(2)}));

      const expectedActions = await store.dispatch(postUser(user))
        .then(() =>  store.getActions());

      expect(...expectedActions).toEqual(userHasErrored(true, "That email is already linked to an account"));    
    });
  });
});







