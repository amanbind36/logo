import React, { useState } from 'react'

const Clock = () => {
    let time = new Date().toLocaleTimeString();

    const [ntime,setNtime]=useState(time);
     
    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setNtime(time)
    }
    setInterval(updateTime,1000)

  return (
    <>
    <h1>Clock</h1>
    <div>{ntime}</div>
    </>
  )
}

export default Clock