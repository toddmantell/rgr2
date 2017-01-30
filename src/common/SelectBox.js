import React from 'react';

const SelectBox = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="control-label">{props.label}</label>
            <br />
            <select name={props.name} className="form-control" onChange={props.onChange}>
                <option value="">{props.defaultOption}</option>
                {props.options.map((option) => {
                    return <option key={option.value} value={option.text}>{option.text}</option>;
                })}
            </select>
        </div>
    );
}

SelectBox.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    defaultOption: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
    
}

export default SelectBox;