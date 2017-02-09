import * as actionTypes from './actionTypes';
import API from './apiUrl';

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
        return fetch(API.routes)
            .then(response => response.json())
            .then(routes => dispatch(loadRoutesSuccess(routes)))
            .catch(error => {throw(error)});
    }
}

export function addRouteAsync(route) {
    return function (dispatch) {
        return fetch(API.routes,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(route)
        }).then(response => response.json())
            .catch(error => error); 
                       
    }
}