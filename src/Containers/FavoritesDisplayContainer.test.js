import { mockObj } from '../mockData';
import {mapStateToProps} from './FavoritesDisplayContainer';

describe('FAVORITES_DISPLAY_CONTAINER', () => {
  it('should return and object with a favorites array and user id', () => {
    const mockState = {user: {
      favorites: [{title: 'movie'}],
      id: 15
    }};

    const expected = {favorites: [{title: 'movie'}], userID: 15}

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});