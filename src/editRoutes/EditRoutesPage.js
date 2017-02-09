import React from 'react';
import {connect} from 'react-redux';
import Heading from '../common/Heading';

class EditRoutesPage extends React.Component {
    constructor() {
        super();
        
        this.state = {
            route: {
                routeName: ''
            }        
        };
    
    }
    render() {
        return <Heading message="Edit My Routes" />;
    }
}

EditRoutesPage.propTypes = {
    route: React.PropTypes.object.isRequired
};

function mapStateToProps() {}

function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(EditRoutesPage);