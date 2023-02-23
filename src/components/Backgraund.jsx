import React from 'react'
import  "./backgraund.css"
import images from "./data"

const Backgraund = () => {


    // const bgimage={
    //     backgraundImage:`url(${images[1].url})`,
    //  backgraundPosition:"center",
    //  backgraunSize:"cover",
    //  height:"100%",
    //  border:"1px solid red"
    //      }

  return (
    <div className='container'>
    <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1677061856903-f8c1f20c5ff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60)`}}></div>
    </div>
  )
}

export default Backgraund