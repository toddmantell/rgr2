import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import routes from './routes';
import routeReducer from './reducers/routeReducer';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const store = createStore(routeReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
