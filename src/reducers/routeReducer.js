import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function routeReducer(state = initialState.routes, action) {
    switch(action.type) {
        case actionTypes.ADD_ROUTE:
            return [...state, Object.assign({}, action.route)];
        case actionTypes.UPDATE_ROUTE:
            return [...state.filter(route => route.id !== action.id), Object.assign({}, action.route)];
        case actionTypes.LOAD_ROUTES:
            return action.routes;
        default:
            return state;
    }
}