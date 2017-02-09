import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import * as routeTypes from '../common/routeTypes';

class RoutesChart extends React.Component {
  render() {
    const data = [
      {routeType: routeTypes.TOP_ROPE, routes: 120},
      {routeType: routeTypes.LEAD, routes: 58},
      {routeType: routeTypes.BOULDER, routes: 43}
    ];
    return (
      <div>
      <h3>Number of Routes By Type: </h3>
        <svg height={300} width={500}>
            <VictoryChart theme={VictoryTheme.material} domainPadding={50}>
                <VictoryAxis tickValues={["Top Rope","Lead","Boulder"]} />
                <VictoryAxis dependentAxis tickFormat={(x) => x} />
                <VictoryBar data={data} 
                x="routeType"
                y="routes"
                />
            </VictoryChart>
        </svg>
      </div>
    );
  }
}

export default RoutesChart;