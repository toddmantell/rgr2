import React from 'react';
import TextBox from '../common/TextBox';
import SelectBox from '../common/SelectBox';
import ButtonGroup from '../common/ButtonGroup'

const ManageRouteForm = props => {
    return (
         <section>
            <TextBox name="routeName" placeholder="Enter a route name" label="Route Name:" onChange={props.update}/>
            <TextBox name="routeSetter" placeholder="Enter route setter's name" label="Route Setter:" onChange={props.update}/>
            <TextBox name="routeColor" placeholder="Enter a route color" label="Route Color:" onChange={props.update}/>
            <ButtonGroup name="routeType" label="Type of climb:" onChange={props.update} buttons={['Top Rope', 'Lead', 'Boulder']}/> 
            <SelectBox name="routeGrade" label="Route Grade:" defaultOption="Select a Route Grade" options={props.routeGrades} onChange={props.update}/>
            <button className="btn btn-primary" onClick={props.saveRoute}><i className="fa fa-save"> Save</i></button>
        </section>
    );
}

ManageRouteForm.propTypes = {
    update: React.PropTypes.func.isRequired,
    saveRoute: React.PropTypes.func.isRequired,
    routeGrades: React.PropTypes.array.isRequired
}

export default ManageRouteForm;