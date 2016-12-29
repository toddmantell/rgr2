import React from 'react';
import StatBlock from './StatBlock';

const StatsRow = props => {
    return (
        <section id="stats-row" className="row">
            <StatBlock statistic={props.totalRoutes} label="Total Routes:" icon="fa fa-file-archive-o" />
            <StatBlock statistic={props.totalUsers} label="Total Users:" icon="fa fa-user" />
            <StatBlock statistic={props.averageRouteGrade} label="Average Route Grade:" icon="fa fa-area-chart" />            
            <div className="col-xs-2"></div>
            <div className="col-xs-2"></div>
        </section>
        );
}

export default StatsRow;