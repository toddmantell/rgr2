import React from 'react';

const Heading = props => {
    return (<section>
                <h3 className="text-primary">
                    {props.message}            
                </h3>
                <hr />
            </section>);
}

Heading.propTypes = {
    message: React.PropTypes.string.isRequired
}

export default Heading;