import React from 'react';
import { mockObj } from '../mockData';
import { mapDispatchToProps } from './AppContainer';
import { getMovies } from '../Actions/Actions';

describe('Container', () => {
  describe('AppContainer', () => {
    it('calls dispatch with an getMovies action when getMovies is called', () => {
        //mock dispatch fn
      const dispatch = jest.fn()
      //caling getmovies Actions
      const actionToDispatch = getMovies(mockObj.results)

      //Calling mdp with fake dispatch
      const mappedProps = mapDispatchToProps(dispatch)
        
      //with stored data--targeting the prop key name 
      //and pssing in data.results
      mappedProps.storeMovies(mockObj.results) //caling it

      
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});