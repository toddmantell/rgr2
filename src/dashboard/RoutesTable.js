import React from 'react';

const RoutesTable = props => {
    return (
        <section id="latest-routes-grid" className="row">        
                <div className="col-md-8 col-xs-10">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-condensed" id="tbl-latest-routes">
                            <thead>
                                <tr>
                                    <td>Route Name</td>
                                    <td>Route Setter</td>
                                    <td>Route Grade</td>
                                    <td>Popularity</td>
                                    <td>Route Type</td>
                                    <td>Entered By</td>
                                    <td>Edit</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Blue Steel</td>
                                    <td>Zoolander</td>
                                    <td>5.10a</td>
                                    <td>4.7</td>
                                    <td>TR/Lead</td>
                                    <td>John Doe</td>
                                    <td><button className="btn btn-info btn-sm"><i className="fa fa-angle-left"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Whatever floats your boat</td>
                                    <td>Crash Pad</td>
                                    <td>5.12a</td>
                                    <td>4.1</td>
                                    <td>Lead</td>
                                    <td>Melissa H.</td>
                                    <td><button className="btn btn-info btn-sm"><i className="fa fa-angle-left"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Everest</td>
                                    <td>The Mechanic</td>
                                    <td>5.13d</td>
                                    <td>4.9</td>
                                    <td>Lead</td>
                                    <td>James R.</td>
                                    <td><button className="btn btn-info btn-sm"><i className="fa fa-angle-left"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Everest</td>
                                    <td>The Mechanic</td>
                                    <td>v14</td>
                                    <td>4.6</td>
                                    <td>Boulder</td>
                                    <td>Daniel W.</td>
                                    <td><button className="btn btn-info btn-sm"><i className="fa fa-angle-left"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Wildstyle</td>
                                    <td>Emmett</td>
                                    <td>5.13d</td>
                                    <td>2.9</td>
                                    <td>Lead</td>
                                    <td>Bill B.</td>
                                    <td><button className="btn btn-info btn-sm"><i className="fa fa-angle-left"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Everest</td>
                                    <td>The Mechanic</td>
                                    <td>5.13d</td>
                                    <td>4.9</td>
                                    <td>Lead</td>
                                    <td>Daniel W.</td>
                                    <td><button className="btn btn-info btn-sm"><i className="fa fa-angle-left"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
    );
}

export default RoutesTable;