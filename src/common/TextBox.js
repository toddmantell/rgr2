import React from 'react';

const TextBox = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="control-label">{props.label}</label>
            <input type="text" name={props.name} className="form-control" placeholder={props.placeholder} onChange={props.update} />
        </div>
    );
}

TextBox.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
}

export default TextBox;