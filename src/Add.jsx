

import { useState } from "react";
import React from 'react'

function Add() {
  const [value,setValue]=useState([]);
  const [dataValue, setDataValue] = useState("");
  console.log("dataValue", dataValue)
    const add=(e)=>{
      console.log("event", e);
      setValue((prev)=>[...prev,{}])
    }
    
  return (
    <div>

      <button draggable={true} onClick={(e) => add(e)}>add</button>
      <div style={{display:"flex" ,flexWrap:"wrap", width:"80%" }}>{value.map((v)=>(
          <div contenteditable="true" style={{ height: "30vh", width:"20vw", border:"2px solid black",display:"flex",justifyContent:"center",alignContent:"center",border:"2px solid black"}} className="task">
             {/* onChange={(e) => setDataValue(e.target.value)} type="text" placeholder="Type something"  /> */}
             <div style={{height: "90%", width:"90%",border:"1px solid black", marginTop:"10px"}}>Type Something</div>
             
          </div>
      ))}</div>
    </div>
  )
}
 
export default Add