import React from 'react';
import RoutesTable from './RoutesTable';
import Heading from '../common/Heading';
import StatsRow from './StatsRow';

class Dashboard extends React.Component {
    render() {
        const statsRowProps = {
            totalRoutes: 217,
            totalUsers: 583,
            averageRouteGrade: '5.10b'
        };
        return (
            <main>
                <Heading message="Rock Gym Route Rater (RGR2) Dashboard:" />                
                <StatsRow {...statsRowProps} />
                <img src="../images/generic-chart.png" alt="chart" />
                <RoutesTable />
            </main>
        );
    }
}

Dashboard.propTypes = {

}

export default Dashboard;