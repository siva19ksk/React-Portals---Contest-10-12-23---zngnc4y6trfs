import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
const [text,setText]=useState("");
const val=useRef("");
const handle=()=>{
  if(val.current !== ""){
    val.current="";
  }else{
  val.current=text;
  }
  setText("");
}

  return (
    
    <div id="main">
      <input id="input" value={text} onChange={()=>setText(e.target.value)}></input><br/>
      <PortalButton buttonclick={handle} /><br/>
      <PortalTextArea value={val.current}/>
    </div>
  )
}


export default App;
