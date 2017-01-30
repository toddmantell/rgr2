import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import ManageRoutePage from './manageRoute/ManageRoutePage';
import EditRoutesPage from './editRoutes/EditRoutesPage';
import Dashboard from './dashboard/Dashboard';
//import HomePage from './HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="manageRoute" component={ManageRoutePage} />
        <Route path="manageRoute/:id" component={ManageRoutePage} />
        <Route path="editRoutes" component={EditRoutesPage} />
    </Route>
);

//EditRoutes should be for updating or deleting in a table?