//import {mount, shallow} from 'enzyme';
import routeReducer from '../reducers/routeReducer';
import * as actionTypes from '../actions/actionTypes';

describe('route reducer tests', () => {
    it('adds a new route to state', () =>{
        const state = [{routeId: 1, routeName: 'test1'}, {routeId: 2, routeName: 'test2'}]
        const action = {
            type: actionTypes.ADD_ROUTE,
            route: {routeId: 3, routeName: 'test3'}
        };

        let result = routeReducer(state, action);

        expect(result.length).toBe(3);
        expect(result[2].routeName).toEqual('test3');
    });
})
