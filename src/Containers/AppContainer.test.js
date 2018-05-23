import { mapStateToProps, mapDispatchToProps } from './AppContainer';
import { mockObj } from '../mockData';
import { getMovies, userLoggedOut } from '../Actions/Actions';

describe('AppContainer', () => {
    it('calls dispatch with an getMovies action when getMovies is called', () => {
        //mock dispatch fn
      const dispatch = jest.fn()
      //calling getmovies Actions
      const actionToDispatch = getMovies(mockObj.results)

      //Calling mdp with fake dispatch
      const mappedProps = mapDispatchToProps(dispatch)
        
      //with stored data--targeting the prop key name 
      //and passing in data.results
      mappedProps.storeMovies(mockObj.results) //calling it

      
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  it('calls dispatch with a userLoggedOut action', () => {
    const dispatch = jest.fn()

    const actionToDispatch = userLoggedOut()

    const mappedProps = mapDispatchToProps(dispatch)

    mappedProps.userLoggedOut()

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch)
  });

    it('should return the user object', () => {
      const mockState = {
        user: {}
      };

      let expected = {}

      const mappedProps = mapStateToProps(mockState).user

      expect(mappedProps).toEqual(expected)
    });
});


