import React, { useState } from "react";

import FuncClick from "./FuncClick";


import './App.css'
import ClassClick from "./ClassClick";


const App = () => {
  // const name = "Anurag";
  const [show, setshow] = useState(false);
  const [sh, se] = useState(false)
  // const anurag =props.data;
  const clickfunction = () => {
    setshow(!show)


  }
  const clickClass = () =>{
se(!sh)
  }

  return (
    <div>
      <h1>Styling Using Functional and Class Component</h1>
      <div className="btn-style">
        
        <div className="boxes">
        <button onClick={clickfunction}>To See Styling in Function Component</button>
        <br />
        {show && <FuncClick />}
        </div>
      <div className="boxes">
      <button onClick={clickClass}>To See Styling in Class Component</button>
      <br />

      {sh && <ClassClick/>}
        </div>
      
      
      </div>
      
      {/* <User data={name}/> */}
        
       


    



    </div>
  )

}
export default App;