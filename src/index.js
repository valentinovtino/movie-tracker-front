import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import { createStore } from 'redux';
import { rootReducer } from './Reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools);

ReactDOM.render( 
  <Provider store={store}>
    <Router >
      <AppContainer /> 
    </ Router>
  </Provider>, document.getElementById('root'));

