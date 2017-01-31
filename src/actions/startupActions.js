import * as actionTypes from './actionTypes';

//THis will eventually be a success handler for the successful promise resolution in the loadOptions thunk
export function loadOptionsSuccess(options) {
    return {
        type: actionTypes.LOAD_OPTIONS, 
        options
    }
};

export function loadOptionsAsync() {
    return function(dispatch) {
        //return the data retrieved from the api call and dispatch the success action
        return fetch('http://localhost:8080/grades')
                .then(response => response.json())
                .then(grades => {
                    console.log(`grades retrieved ${JSON.stringify(grades)}`);            
                    dispatch(loadOptionsSuccess(grades));
                })
                .catch(error => {throw(error)});        
    }
}