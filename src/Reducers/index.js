import { combineReducers } from 'redux';
import { movies, user, userErrorReceived } from './Reducers';

export const rootReducer = combineReducers({
  movies, user, userErrorReceived
}); 