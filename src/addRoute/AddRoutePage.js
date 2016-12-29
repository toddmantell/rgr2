import React from 'react';
//import {connect} from 'react-redux';
import AddRouteForm from './AddRouteForm';
import toastr from 'toastr';

class AddRoutePage extends React.Component {
    constructor() {
        super();

        this.state = {
            course: {
                id: 0,
                routeName: '',
                routeSetter: '',
                routeGrade: ''
            }
        };

        this.update = this.update.bind(this);
        this.saveRoute = this.saveRoute.bind(this);
        this.redirect = this.redirect.bind(this);
    }
    update(event) {
        this.setState({[event.target.name]: event.target.value });

    }
    saveRoute() {
        let {route} = this.state; 
        this.redirect();
    }
    redirect() {
        toastr.success('success!');
    }
    render() {
        return (
         <div className="col-xs-8 col-md-10">
            <h2>Add A Route</h2>
            <hr />
            <AddRouteForm update={this.update} addRoute={this.saveRoute}/>        
        </div>
        );
    }
}

// AddRoutePage.propTypes = {

// }

// function mapStateToProps() {
//     return {};  
// }

export default AddRoutePage;