import React, { Component } from 'react';
//import './index.css';
import './css/site.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import SideBar from './common/SideBar';

class App extends Component {
  render() {
    return (
      <main id="application-wrapper" className="container-fluid">
        <SideBar />
        {this.props.children}
      </main>
    );
  }
}

export default App;
