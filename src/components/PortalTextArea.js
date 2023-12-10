import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=()=>{
    return ReactDOM.createPortal(
        <div>
            <textarea id="textarea" value={value}></textarea>
        </div>,portal-textarea
    );
}
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose