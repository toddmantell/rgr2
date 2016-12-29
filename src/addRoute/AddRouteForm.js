import React from 'react';
import TextBox from '../common/TextBox';
import SelectBox from '../common/SelectBox';
import routeGrades from '../routeGrades';

const AddRouteForm = props => {
    return (
         <section>
            <TextBox name="routeName" placeholder="Enter a route name" label="Route Name:" onChange={props.update}/>
            <TextBox name="routeSetter" placeholder="Enter route setter's name" label="Route Setter:" onChange={props.update}/>
            <TextBox name="routeColor" placeholder="Enter a route color" label="Route Color:" onChange={props.update}/>
            <SelectBox name="routeGrade" label="Route Grade:" defaultOption="Select a Route Grade" options={routeGrades} onChange={props.update}/>
            <button className="btn btn-primary" onClick={props.addRoute}><i className="fa fa-save"> Save</i></button>
        </section>
    );
}

AddRouteForm.propTypes = {
    update: React.PropTypes.func.isRequired,
    addRoute: React.PropTypes.func.isRequired
}

export default AddRouteForm;