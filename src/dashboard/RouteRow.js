import React from 'react';
import {Link} from 'react-router';

const RouteRow = props => {
    const {route} = props;
    return (
        <tr key={route.routeId}>
            <td><Link to={`/RouteDetail/:${route.routeId}`}>{route.routeName}</Link></td>
            <td>{route.routeGrade}</td>
            <td>{route.routeSetter}</td>
            <td>{route.routeColor}</td>
            <td>{route.routePopularity}</td>
            <td>{route.routeType}</td>
        </tr>
    );
}



export default RouteRow;
