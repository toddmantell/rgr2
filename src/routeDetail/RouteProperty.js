import React from 'react';

const RouteProperty = props => {
    return (
        <div className="">
            <label className="control-label">{props.label}</label> {props.value}
        </div>
    );
}

export default RouteProperty;