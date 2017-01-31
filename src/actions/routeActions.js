import * as actionTypes from './actionTypes';

export const addRoute = route => {
    return {
        type: actionTypes.ADD_ROUTE,
        route
    }
}

export const updateRoute = route => {
    return {
        type: actionTypes.UPDATE_ROUTE,
        route
    }
}

export const loadRoutesSuccess = routes => {
    return {
        type: actionTypes.LOAD_ROUTES,
        routes
    }
}

export function loadRoutesAsync() {
    return function(dispatch) {
        return fetch('http://localhost:8080/routes')
            .then(response => response.json())
            .then(routes => dispatch(loadRoutesSuccess(routes)))
            .catch(error => {throw(error)});
    }
}