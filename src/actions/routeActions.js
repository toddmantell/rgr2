import * as actionTypes from './actionTypes';

const addRoute = route => {
    return {
        type: actionTypes.ADD_ROUTE,
        route
    }
}

const updateRoute = route => {
    return {
        type: actionTypes.UPDATE_ROUTE,
        route
    }
}

const loadRoutes = //add code for loading the gyms from mock and real api