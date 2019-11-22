import React from 'react';
import {NavLink} from "react-router-dom";

const DevHeader = ({devCallbacks}) => {
    if (false) {
        console.log('DevCallbacks: ', devCallbacks);
    }

    return (
        <div style={{margin: '10px', display: 'flex', justifyContent: 'space-around'}}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/test-params'>Home with params</NavLink>
            <NavLink to='/test-params/test-error'>Error page</NavLink>
            <button onClick={devCallbacks.devGet}>DevGet</button>
        </div>
    );
};

export default DevHeader;
