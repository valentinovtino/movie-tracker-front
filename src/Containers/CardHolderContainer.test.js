import { mapStateToProps, mapDispatchToProps } from './CardHolderContainer';
import { mockObj } from '../mockData';
import { addFavorite} from '../Actions/Actions'

describe('CardHolderContainer', () => {
  it('should return an array of movies and the user id', () => {
    const mockState = {
      movies: mockObj.results,
      user: {id: 15}
    };
    const expected = {movies: mockObj.results, userID: 15}

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });

  it('should return dispatch of the addFavorite action', () => {
    const dispatch = jest.fn();
    const actionToDispatch = addFavorite()

    const mappedDispatch = mapDispatchToProps(dispatch)

    expect(mappedDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
