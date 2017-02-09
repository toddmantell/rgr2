import React from 'react';
import {connect} from 'react-redux';
import RoutesTable from './RoutesTable';
import Heading from '../common/Heading';
import StatsRow from './StatsRow';
import RoutesChart from './RoutesChart';

class Dashboard extends React.Component {
    render() {
        const statsRowProps = {
            totalRoutes: 217,
            totalUsers: 583,
            averageRouteGrade: '5.10b'
        };
        //todo: Read the routes from server and display them in the dashboard table with links to route details (the details page should have an edit button or link)
        return (
            <main>
                <Heading message="Rock Gym Route Rater (RGR2) Dashboard:" />                
                <StatsRow {...statsRowProps} />
                <RoutesChart />
                <RoutesTable headings={['Route Name','Route Grade','Route Setter','Route Color','Popularity','Route Type']}
                message="Latest Routes:" routes={this.props.routes} />
            </main>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { 
        routes: state.routeReducer
    };
}

Dashboard.propTypes = {
    routes: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Dashboard);