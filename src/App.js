import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform'
// import About from './component/About'
import Alert from './component/Alert';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const[alert,setalert]=useState(null);
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type     

  }
  )
  setTimeout(() => {
    setalert(null);
  }, 2000);
}
  return (
    < >

    {/* <Router> */}
   <Navbar title="TextUtils2" aboutText="About Text" showalert={showalert}/>
   <Alert alert={alert}/>

    <div className="container my-3 ">

    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           */}
          {/* <Route  exact path="/"> */}
<Textform  showalert={showalert}/>
          {/* </Route>
        </Switch> */}
        
        </div>

    {/* </Router> */}


    </>
  
  );
}

export default App;
