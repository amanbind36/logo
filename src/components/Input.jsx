import React from "react";
import { useState } from "react";


function Task(){
const [query,setQuery]=useState("");
const [task,SetTask]=useState([]);
const handlechange=(e)=>{
    const {value}=e.target;
    setQuery(value);
      }
const handleadd=()=>{
    const payload={
        title:query,
        status:false
    }
    let newTask=[...task,payload];
    SetTask(newTask)
 
};
console.log(task)
    return(
        <div>
          <h1>Task</h1>
          <h1>{task}</h1>
          <div>
            <input type="text" onChange={handlechange}  value={query} placeholder="add something"/>
            <button onClick={handleadd}>Add</button>
          </div>
          <div>
            {task.map((item)=>{
                return <div>{item.title}</div>
            })}
          </div>
        </div>
    )
}

export {Task}