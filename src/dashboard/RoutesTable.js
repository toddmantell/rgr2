import React from 'react';
import RouteRow from './RouteRow';
import TableHeading from '../common/TableHeading';

const RoutesTable = props => {
    return (
        <section id="latest-routes-grid" className="row">        
                <div className="col-md-8 col-xs-10">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-condensed" id="tbl-latest-routes">
                            <thead>
                                <tr>
                                    {props.headings.map(heading => <TableHeading headingKey={props.headings.indexOf(heading)} heading={heading} />)}                                  
                                </tr>
                            </thead>
                            <tbody>
                               {props.routes.map(route => <RouteRow route={route} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
    );
}

export default RoutesTable;