import React from 'react';

const ButtonGroup = props => {
    let buttons = props.buttons.map((item) => {
        return <button name={item} type="radio" className="btn btn-default" key={props.buttons.indexOf(item)}>{item}</button>;
    });
    return (
        <section>
            <label htmlFor={props.name} className="control-label">{props.label}</label>
            <br />
            <div name={props.name} className="btn-group" role="group" data-toggle="buttons" onChange={props.onChange}>
                {buttons}
            </div>
        </section>
    );
}

ButtonGroup.propTypes = {
   update: React.PropTypes.func,
   name: React.PropTypes.string.isRequired,
   buttons: React.PropTypes.array.isRequired
}

export default ButtonGroup;