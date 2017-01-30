import React from 'react';
import {connect} from 'react-redux';

class EditRoutePage extends React.Component {
    constructor() {
        super();
        
        this.state = {
            route: {}   
        };
    
    }
    componentDidMount() {
        setState({route: this.props.route})
    }
    render() {
        return <h1>Edit!</h1>;
    }
}

EditRoutePage.propTypes = {
    route: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    state: state.
}

function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(EditRoutePage);