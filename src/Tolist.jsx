import React, { useRef, useState } from 'react'
import styles from './Tolist.css';
export default function Tolist() {
    const [name,setValue]=useState();
const values=useRef(null)
    const add=()=>{
         setValue(values.current.value)
    }
  return (
    <div>
        <h1>Task</h1>
        <div className='container' >
            <button onClick={add}>Add</button>
            <div  className='pop'>< input ref={values} type='text'/></div>
            <div className='divs'>{name}</div>
        </div>
    </div>
  )
}
