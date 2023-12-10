import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=()=>{
    return ReactDOM.createPortal (
        <div>
            <button id="button" onClick={handle}>Click</button>
        </div>,portal-button
    )
}
export default PortalButton;

//portal-button id will be used here for portal purpose