import { mockCleanedData } from "../mockData";
import * as actions from './Actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Actions', () => {
  describe('GET MOVIE', () => {
    it('should return an action object', () => {
      let expected = {
        type: 'GET_MOVIES',
        movies: mockCleanedData
      };
      let actual = actions.getMovies(mockCleanedData);

      expect(actual).toEqual(expected);
    });
  });

  describe('CREATE USER', () => {
    it('should return an action object', () => {
      const user = {
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool',
        id: null,
      };

      let expected = {
        type: 'CREATE_USER',
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool',
        id: null,
        favorites: []
      };

      let actual = actions.createUser(user);

      expect(actual).toEqual(expected);
    });
  });

  describe('ADD USER FAVORITE', () => {
    it('should return an action object', () => {
      let movie = {
        averageRating: 2.9,
        id: 510819,
        overview: "A movie...",
        posterPath: "/r70GGoZ5PqqokDDRnVfTN7PPDtJ.jpg",
        releaseData: "2018-03-30",
        title:  "Dirty Dead Con Men"
      }

      let expected = {
        type: 'ADD_USER_FAVORITE',
        movie: {
          averageRating: 2.9,
          id: 510819,
          overview: "A movie...",
          posterPath: "/r70GGoZ5PqqokDDRnVfTN7PPDtJ.jpg",
          releaseData: "2018-03-30",
          title:  "Dirty Dead Con Men"
        }
      }

      let actual = actions.addUserFavorite(movie);

      expect(actual).toEqual(expected);
    });
  });

  describe('REMOVE_USER_FAVORITE', () => {
    it('should return an action object', () => {
      let expected = {
        type: 'REMOVE_USER_FAVORITE',
        movieID: 510819
      }

      let actual = actions.removeUserFavorite(510819);

      expect(actual).toEqual(expected);
    });
  });

  describe('USER LOGGED OUT', () => {
    it('should return its type', () => {
      let actual = actions.userLoggedOut();

      let expected = {type: 'USER_LOGGED_OUT'}

      expect(actual).toEqual(expected)
    });
  });

  describe('USER HAS ERRORED', () => {
    it('should return a boolean', () => {
      let expected = {
        type: 'USER_HAS_ERRORED',
        userHasErrored: true
      };

      let actual = actions.userHasErrored(true);

      expect(actual).toEqual(expected);
    });
  });

  describe('POST USER', () => {
    const mockStore = configureStore([thunk]);
    let store;
    let url;
    let options;
    let user;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => 
            Promise.resolve(2)}));

      store = mockStore({});

      url = 'http://localhost:3000/api/users/new';

      user = {
        name: 'Cool Guy',
        email: 'coolguy@aol.com',
        password: 'secretlyuncool'
      };

      options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
      };

    });

    it('calls fetch with the correct data when adding a new user', async () => {
      await store.dispatch(actions.postUser(user)).then(() => store.getActions());

      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('calls createUser and userHasErrored actions if fetch response is ok', async () => {
      const expectedActions = await store.dispatch(actions.postUser(user))
        .then(() =>  store.getActions());

      expect(expectedActions[0]).toEqual(actions.createUser({...user, id: 2}));
      expect(expectedActions[1]).toEqual(actions.userHasErrored(false, ''));
    });

    it('calls userHasErrored with true if fetch response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: false,
          json: () => 
            Promise.resolve(2)}));

      const expectedActions = await store.dispatch(actions.postUser(user))
        .then(() =>  store.getActions());

      expect(...expectedActions).toEqual(actions.userHasErrored(true, "That email is already linked to an account"));    
    });
  });

  describe('FETCH USER', () => {
    const mockStore = configureStore([thunk]);
    let store;
    let url;
    let options;
    let user;
    let userDetails;

    beforeEach(() => {
      userDetails = {
        data: {
          name: 'Cool Guy',
          email: 'coolguy@aol.com',
          password: 'secretlyuncool',
          id: 2,
          favorites: []
      }}

      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => 
            Promise.resolve(userDetails)}));

      store = mockStore({});

      url = 'http://localhost:3000/api/users';

      user = {
        email: 'coolguy@aol.com',
        password: 'secretlyuncool'
      };


      options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
      };

    });

    it('calls fetch with the correct data when adding a new user', async () => {
      await store.dispatch(actions.fetchUser(user)).then(() => store.getActions());

      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    // it('calls createUser and userHasErrored actions if fetch response is ok', async () => {
    //   const expectedActions = await store.dispatch(fetchUser(user))
    //     .then(() =>  store.getActions());
    //   console.log(expectedActions)

    //   expect(expectedActions[0]).toEqual(createUser(userDetails.data));
    //   expect(expectedActions[1]).toEqual(userHasErrored(false, ''));
    // });

    it('calls userHasErrored with true if fetch response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: false,
          json: () => 
            Promise.resolve(2)}));

      const expectedActions = await store.dispatch(actions.fetchUser(user))
        .then(() =>  store.getActions());

      expect(...expectedActions).toEqual(actions.userHasErrored(true, "Email and password do not match"));    
    });
  });


  describe('ADD FAVORITE', () => {
    const mockStore = configureStore([thunk]);
    let store;
    let url;
    let options;
    let movie;
    let user_id;
    let movieBody;

    beforeEach(() => {
      movie = {
        id: 1234 ,
        title: 'Movie',
        posterPath: '/abcdef.jpg',
        releaseData: "2018-04-25",
        averageRating: 5,
        overview: 'A movie...'
      }

      user_id = 5

      movieBody = {
        movie_id: 1234,
        title: 'Movie',
        poster_path: '/abcdef.jpg',
        release_date: "2018-04-25",
        vote_average: 5,
        overview: 'A movie...',
        user_id: 5
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true }));

      store = mockStore({});

      url = 'http://localhost:3000/api/users/favorites/new';

      options = {
        method: 'POST',
        body: JSON.stringify(movieBody),
        headers: {'content-type': 'application/json'}
      };

    });

    it('calls fetch with the correct data when adding a favorite', async () => {
      await store.dispatch(actions.addFavorite(movie, user_id)).then(() => store.getActions());

      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });

    it('calls addUserFavorite if fetch response is ok', async () => {
      const expectedActions = await store.dispatch(actions.addFavorite(movie, user_id))
        .then(() =>  store.getActions());

      expect(...expectedActions).toEqual(actions.addUserFavorite(movie));
    });

    it('calls userHasErrored with true if fetch response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({ ok: false }));

      const expectedActions = await store.dispatch(actions.addFavorite(movie, user_id))
        .then(() =>  store.getActions());

      expect(...expectedActions).toEqual(actions.userHasErrored(true, 'Please log in to save a favorite'));    
    });
  });
});







