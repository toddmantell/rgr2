import React from 'react';
import RouteProperty from './RouteProperty';

const RouteDetails = props => {
    return (
        <section>                        
            <RouteProperty label="Route Name:" value={props.route.routeName} />
            <RouteProperty label="Route Grade:" value={props.route.routeGrade} />
            <RouteProperty label="Route Setter:" value={props.route.routeSetter} />
            <RouteProperty label="Route Color:" value={props.route.routeColor} />            
            <RouteProperty label="Route Popularity:" value={props.route.routePopularity} />
            <br />
            <button className="btn btn-large btn-primary" onClick={props.backButtonClick}>Back To Dashboard</button>
            <button className="btn btn-small btn-default" onClick={props.redirectToEdit}>Edit Route</button>
        </section>
    );
}

export default RouteDetails;