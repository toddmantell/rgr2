import * as actionTypes from './actionTypes';

//THis will eventually be a success handler for the successful promise resolution in the loadOptions thunk
export function loadOptionsSuccess(options) {
    return {
        type: actionTypes.LOAD_OPTIONS, 
        options
    }
};

// export function loadOptions() {
//     return function(dispatch) {
//         //return the data retrieved from the api call and dispatch the success action
//         return fetch('http://localhost:62697/api/SelectOptions').then((response) => {
//                 dispatch(loadOptionsSuccess(response.json()))
//             }).catch();        
//     }
// }