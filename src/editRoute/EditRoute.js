import React from 'react';
import {connect} from 'react-redux';

class EditRoutePage extends React.Component {
    constructor() {
        super();
        
        this.state = {route: {

        }
        
        };
    
    }
    render() {
        return <h1>Edit!</h1>;
    }
}

EditRoutePage.propTypes = {
    route: React.PropTypes.object.isRequired
};

function mapStateToProps() {}

function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(EditRoutePage);