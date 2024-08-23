import React, { useEffect, useRef,useState} from 'react'
import './Add.css';
// randomlly  b we can understage the diff between fun() and fun here
// export default function Learning() {
//   const content=()=>{
//   const names=['riya','nithu','amu']
//   var num=Math.floor(Math.random()*3)
//   return names[num]
//   }
//   return (
//     <div>{content()}</div>
//   )
// }
// export default function Learning() {
//   // getting the value of the tag after clicking the button (single)
//  var name="riya";
//  const [names,setvalue]=useState("")
//  const visi=()=>{
//  setvalue(name)
//  }
//  return(
//   <div>
//     <button onClick={visi}>add</button>
//     <h1 >{names}</h1>
//   </div>
//  )  
// }

// export default function Learning() {
//   // printing objects in the tag
//  var name={name:"riya",id:20};
//  const [names,setvalue]=useState([])
//  const visi=()=>{
//  setvalue(name)
//  }
//  console.log(names)
//  return(
//   <div>
//     <button onClick={visi}>add</button>
//    {names.map((value)=>{
//       <h1>values.name</h1>
//     })}
//     {/* <h1 >{names}</h1> */}
//   </div>
//  )  
// }

// export default function Learning() {
//   // printing Array value in the tag
//    const obj=[1,2,3,4]
//    return(
//     <div>{obj.map((v)=>(
//    <h1>{v}</h1>
//     ))}</div>
//    )
// }
// export default function Learning() { 
//   // displaying object
//   const obj = { name: "riya", id: 7}
//  return(
//   <div>
//     {Object.keys(obj).map((key)=>(
//       <h1>{obj[key]}</h1>
//   ) )}
//   </div>
//  )
// }
// export default function Learning() { 
//   // displaying object by converting it into object
//   const  obj = { name: "riya", id: 7}
//  return(
//   <div>
//     {Object.keys(obj).map((key)=>(
//       <h1>{obj[key]}</h1>
//   ) )}
//   </div>
//  )
// }
// export default function Learning() { 
//   // changing one element name
//   const style_variable={
//     color:'blue'
//   }
//   const [name,setValue]=useState("riya");
// const change=()=>{
//   setValue(pren=>pren==="riya"?"mano":"riya")
// }
//  return(
//   <div>
//   <h1 style={style_variable} onClick={change}>{name}</h1>
//   <p style={style_variable} >riya</p>
//   </div>
//  )
// }

// const fun=()=>{
//   return(
//     <p>heyyyyyy</p>
//   )
// }
// const Learning = () => {
//   return (
//     <div onClick={fun}>
//       hry
//     </div>
//   )
// }

// export default Learning