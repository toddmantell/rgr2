import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import routes from './routes';
import routeReducer from './reducers/routeReducer';
import optionsReducer from './reducers/optionsReducer';
import gymReducer from './reducers/gymReducer';
import {loadOptionsAsync} from './actions/startupActions';
import {loadRoutesAsync} from './actions/routeActions';
//import routeGrades from './routeGrades'; used load into the store directly instead of an http call
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//Because we're using the Chrome redux add-on, we have to use compose to combine the middleware and the add on (see this Stack Overflow: http://stackoverflow.com/questions/38074154/redux-the-previous-state-received-by-the-reducer-has-unexpected-type-of-functi)
const composeMiddleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(combineReducers({routeReducer, optionsReducer, gymReducer}), composeMiddleware);

//store.dispatch(loadOptionsSuccess(routeGrades));//fetch the dropdpwn options for the app so they are loaded into the store on app init
store.dispatch(loadOptionsAsync());
store.dispatch(loadRoutesAsync());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
