import { mapStateToProps } from './CardHolderContainer';
import { mockObj } from '../mockData';

describe('CardHolderContainer', () => {
    it('should return an array of movies', () => {
      const mockState = {
        movies: mockObj.results
      };

      let expected = mockObj.results 

      const mappedProps = mapStateToProps(mockState).movies

      expect(mappedProps).toEqual(expected)
    });
});