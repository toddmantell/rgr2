import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function optionsReducer(state = initialState.options, action) {
    switch(action.type) {
        case actionTypes.LOAD_OPTIONS:
            return action.options;
        default:
            return state; 
    }
}