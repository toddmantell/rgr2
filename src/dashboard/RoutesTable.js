import React from 'react';
import RouteRow from './RouteRow';
import TableHeading from '../common/TableHeading';

const RoutesTable = props => {
    return (
        <section id="latest-routes-grid" className="row">        
                <div className="col-md-8 col-xs-10">
                <h3>{props.message}</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-condensed" id="tbl-latest-routes">
                            <thead>
                                <tr>
                                    {props.headings.map(heading => <TableHeading key={heading} heading={heading} />)}                                  
                                </tr>
                            </thead>
                            <tbody>
                               {props.routes.map(route => <RouteRow key={Math.random()} route={route} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
    );
}

export default RoutesTable;