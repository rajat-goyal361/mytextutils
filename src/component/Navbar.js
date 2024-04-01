// import React from 'react'
import React, { useState } from 'react'


// import {Link} from "react-router-dom";


export default function Navbar(props) {
  const[text,settext]= useState ("Enable dark Mode");
  const[mode,setmode]= useState ("light")
  const toggle=()=>{
     if(text==="Enable dark Mode"){
       settext("Enable light Mode");
       setmode("dark");
       document.body.style.backgroundColor ='white';
       document.getElementsByTagName("textarea")[0].style.backgroundColor ='white';
       document.getElementsByTagName("textarea")[0].style.border = '2px solid black';
       props.showalert("Dark Mode Enabled","success");

     }
     else{
        settext("Enable dark Mode");
        setmode("light");
        document.body.style.backgroundColor ='lightblue';
        document.getElementsByTagName("textarea")[0].style.backgroundColor ='lightblue';
        document.getElementsByTagName("textarea")[0].style.border = '2px solid brown';
        props.showalert("Light Mode Enabled","success");


     }
  }
  return (
    // <Router>
    <nav className={`navbar navbar-expand-lg navbar-${mode}  bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> */}
        <li className="nav-item ">
          <a className="nav-link active" href="/about" >
           {props.aboutText}
          </a>
          {/* <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/">Action</Link></li>
            <li><Link className="dropdown-item" href="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/">Something else here</Link></li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" to='/'>Disabled</a>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${mode==="dark"?"light":"dark"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{text}</label>
</div>
    </div>
  </div>
</nav>
// </Router>
  )
}
