import React from 'react';
import PROP_TYPES from 'prop-types';

export default function Footer(props){
    return (
        <div>
            <hr/>
            Copyrights@{props.year}, {props.company}

            <button onClick={() => props.contact()}>
                Contact
            </button>    

        </div>
    )
}

//type checking
Footer.propTypes = {
    year: PROP_TYPES.number,
    company: PROP_TYPES.string.isRequired
};

//if parent doesn't pass properties, default props will be used
Footer.defaultProps = {
    company: 'Google'
};