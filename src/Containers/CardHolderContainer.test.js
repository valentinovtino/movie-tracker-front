import { mapStateToProps, mapDispatchToProps } from './CardHolderContainer';
import { mockObj } from '../mockData';
import { addFavorite } from '../Actions/Actions';

describe('CardHolderContainer', () => {
    it('should return an array of movies and the user id', () => {
      const mockState = {
        movies: mockObj.results,
        user: {id: 15}
      };
      const expected = {movies: mockObj.results, userID: 15};

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    it('calls dispatch of (addFavorite) action', () => {
    const dispatch = jest.fn();

    const mappedDispatch = mapDispatchToProps(dispatch);

    expect(mappedDispatch).toEqual({addUserFavorite: expect.any(Function)});
  })
});
