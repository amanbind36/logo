import React from "react";
import { useState } from "react";


function Counter(){
    const [counter,setCounter]=useState(0);
    const handleincrement=()=>{
         setCounter(counter+1)
    }
    const handledecrement=()=>{
      setCounter(counter-1)
    }
    return(
        <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=>handleincrement(1)}>Add</button>
        <button onClick={()=>handledecrement(1)}>Reduce</button>
        </>
    )
}
export default Counter