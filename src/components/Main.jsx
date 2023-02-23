import React from 'react'

const Main = () => {
 
  return (
    <div >
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div><h1>1496 restaurant</h1></div>
        <div  style={{display:"flex", justifyContent:"space-around", padding:"20px", width:"60%"}}>  <p>Relevance</p>
            <p>Delivery Time</p>
            <p>Rating</p>
            <p>Cost:Low To High</p>
            <p>Cost:High to Low</p>
            <p>Filters</p>
            </div>
           
        </div>
        <hr/>
    </div>
  )
}

export default Main