import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import { createStore } from 'redux';
import { rootReducer } from './Reducers';
import { Provider } from 'react-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools);

ReactDOM.render( 
  <Provider store={store}>
    <AppContainer /> 
  </Provider>, document.getElementById('root'));

