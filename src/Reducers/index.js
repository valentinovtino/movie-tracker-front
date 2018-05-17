import { combineReducers } from 'redux';
import { moviesReducer } from './Reducers';

export const rootReducer = combineReducers({
  movies: moviesReducer
}); 