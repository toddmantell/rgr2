import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ManageRouteForm from './ManageRouteForm';
import {browserHistory} from 'react-router';
import Heading from '../common/Heading';
import toastr from 'toastr';
import * as routeActions from '../actions/routeActions';

class ManageRoutePage extends React.Component {
    constructor() {
        super();

        this.state = {
            route: {                
                routeName: '',
                routeSetter: '',
                routeGrade: '',
                routeType: ''
            }
        };

        this.update = this.update.bind(this);
        this.saveRoute = this.saveRoute.bind(this);
        this.redirect = this.redirect.bind(this);
    }
    update(event) {
        let field = event.target.name;
        let {route} = this.state;
        route[field] = event.target.value;        
        this.setState({route});
    }
    saveRoute() {
        let {route} = this.state;
        
        if (route.id) {
            this.props.actions.updateRouteAsync(route)
                .then(() => toastr.success(`Route ${route.routeName} Successfully Updated!`))
                .catch(error => toastr.error(`There was an error: ${error}`));
        }
        else {
        this.props.actions.addRouteAsync(route)
            .then(() => {this.redirect(route.routeName);})
            .catch(error => toastr.error(`There was an error: ${error}`));
        }
    }
    redirect(routeName) {
        toastr.success(`Route ${routeName} Successfully Added!`);
        this.props.actions.loadRoutesAsync();//this is to rehydrate the store so the new route appears in Dashboard
        setTimeout(() => {            
            browserHistory.push('/');
        }, 1000); 
    }
    render() {
        return (
         <div className="col-xs-8 col-md-10">
            <h2>{(this.state.route.routeId) ? <Heading message="Edit Route" /> : <Heading message="Add A Route" />}</h2>
            <ManageRouteForm update={this.update} routeGrades={this.props.routeGrades} saveRoute={this.saveRoute}/>        
        </div>
        );
    }
}

ManageRoutePage.propTypes = {
    routeGrades: React.PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        routeGrades: state.optionsReducer
    };  
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(routeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRoutePage);