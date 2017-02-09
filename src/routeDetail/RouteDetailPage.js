import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import RouteDetails from './RouteDetails';
import Heading from '../common/Heading';

class RouteDetailPage extends React.Component {
    constructor() {
        super();

        this.backToDashboard = this.backToDashboard.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }
    backToDashboard() {
        browserHistory.push('/');
    }
    redirectToEdit() {
        browserHistory.push(`/manageRoute/${this.props.route.id}`);
    }
    render() {
        return (
            <main>
                <Heading message="Route Details:" />
                <RouteDetails route={this.props.route} backButtonClick={this.backToDashboard} />
            </main>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        route: getRouteById(state.routeReducer, ownProps.params.id)
    };
}

function getRouteById(routeArray, id) {
    console.log(`Route Array Object: ${routeArray}. Id: ${id}`);
    
    let filteredRoute = routeArray.filter((route) => parseInt(route.id, 10) === parseInt(id, 10));//parseInt to make sure both are numbers
    console.log(filteredRoute[0].id);    

    if (filteredRoute[0]) return filteredRoute[0];
    return null;
}

export default connect(mapStateToProps)(RouteDetailPage);
