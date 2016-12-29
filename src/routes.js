import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import AddRoutePage from './addRoute/AddRoutePage';
import EditRoute from './editRoute/EditRoute';
import Dashboard from './dashboard/Dashboard';
//import HomePage from './HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="addRoute" component={AddRoutePage} />
        <Route path="editRoute/:id" component={EditRoute} />        
    </Route>
);