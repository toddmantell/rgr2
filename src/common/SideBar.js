import React from 'react';
import {Link, IndexLink} from 'react-router';
import logo from '../logo.svg';

const SideBar = props => {
    return (        
        <section id="sidebar">
          <div id="logo">
              <Link to="/"><img src={logo} alt="RGR2" /></Link>
          </div>        
          <ul className="nav">
              <IndexLink to="/" className="sidebar-item text-info btn-lg active"><i className="fa fa-home"></i> Home</IndexLink>
              <Link to="/manageRoute" className="sidebar-item text-info btn-lg"><i className="fa fa-arrow-circle-o-up"></i> Add Route</Link>
              <Link to="/editRoutes" className="sidebar-item text-info btn-lg"><i className="fa fa-database"></i> Edit Routes</Link>
          </ul>
        </section>
        );
}

export default SideBar;