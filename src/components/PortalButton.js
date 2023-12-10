import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
ReactDOM.createPortal(handle,PortalButton);
const PortalButton=()=>{
    return (
        <div>
            <button id="button" onClick={handle}>Click</button>
        </div>
        
    )
}
export default PortalButton;

//portal-button id will be used here for portal purpose