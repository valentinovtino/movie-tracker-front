import {mapStateToProps, mapDispatchToProps} from './LogInPageContainer';
import { postUser, fetchUser } from '../Actions/Actions';

describe('LogInPageContainer', () => {
  it('should return an error object', () => {
    const mockState = {
      userErrorReceived: {
        userHasErrored: false,
        error: ''
      }
    };

    const expected = {
      userHasErrored: {
        userHasErrored: false,
        error: ''
      }
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('should return dispatch of the postUser and fetchUser actions', () => {
    const dispatch = jest.fn();

    const mappedDispatch = mapDispatchToProps(dispatch);

    expect(mappedDispatch).toEqual({
      fetchUser: expect.any(Function),
      postUser: expect.any(Function)
    });
  });
}); 