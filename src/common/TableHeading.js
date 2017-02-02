import React from 'react';

const TableHeading = props => {
    return <td key={props.headingKey}><strong>{props.heading}</strong></td>;
}

export default TableHeading;