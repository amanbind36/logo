import React from 'react'
import { useState } from 'react'
const Sort = () => {
    const [arr,setArr]= useState([12,3,4,5,6,55,33,44,5])
      
    const ass=()=>{
arr.sort((a,b)=>{
    return b-a
  })
   
  
    }
    const des=()=>{
        setArr.sort((a,b)=> {
          return  a-b
        })
           
          
    }
    
  return (
    <div>
        <h1>Assending</h1>
       {arr.join(",")}
       <br/>
        <button onClick={ass}>Assending</button>
        <button onClick={des}>ecending</button>
    </div>
  )
}

export default Sort