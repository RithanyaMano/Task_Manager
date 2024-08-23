import React, { useState } from 'react'
import { useRef } from 'react'
export default function Views() {
    const arr=[
        {name:"riya",id:1},
        {name:"riya",id:1} 
    ]
    var [value,setValue]=useState([]);
    const add=()=>{
        const abc=[...value,[]];
        setValue(abc);
    }
    const hand=()=>{

    }
  return (
  <div>
    <button onClick={()=>add()}>add</button>
         { value.map((data,i)=>{
                 return(
                    <input onChange={e=>hand(e,i)} type='text'/>
                 )
             })
                  }   
        </div> 
  )
  

}
