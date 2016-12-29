import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function gymReducer(state = initialState.gyms, action) {
    switch (action.type) {
        case actionTypes.LOAD_GYMS:
            return action.gyms;
    }
}