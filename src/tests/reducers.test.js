import routeReducer from '../reducers/routeReducer';
import optionsReducer from '../reducers/optionsReducer';
import gymReducer from '../reducers/gymReducer';
import * as actionTypes from '../actions/actionTypes';

describe('reducer tests', () => {
    it('adds a new route to state', () =>{
        const state = [{routeId: 1, routeName: 'test1'}, {routeId: 2, routeName: 'test2'}];
        const action = {
            type: actionTypes.ADD_ROUTE,
            route: {routeId: 3, routeName: 'test3'}
        };

        let result = routeReducer(state, action);

        expect(result.length).toBe(3);
        expect(result[2].routeName).toEqual('test3');
    });
    it('adds options from the optionsReducer', () => {
        const options = [{}, {}];
        const action = {
            type: actionTypes.LOAD_OPTIONS,
            options: options
        };

        let result = optionsReducer([], action);

        expect(result.length).toBe(2);
    });

    it('loads the gyms in the gymReducer', () => {
        const gyms = [{gymId: 1, gymName: "VE - GH"}, {}];
        const action = {
            type: actionTypes.LOAD_GYMS,
            gyms
        };

        let result = gymReducer([], action);

        expect(result.length).toBe(2);
    });
})
