import React from 'react';

const StatBlock = props => {
    return (
        <div className="col-xs-2 stats-container">
            <p className="text-center">
                <i className={props.icon}></i>{props.label}
                <br />{props.statistic}
            </p>
        </div>
    );
}

export default StatBlock;