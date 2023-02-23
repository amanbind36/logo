
import React from "react";


function Appp() {

    const[list,setList] = React.useState([]);
    const[text,setText] = React.useState([""]);
    const[varb,setVarb] = React.useState(false);
    
    const handelChange = (e) =>{
    setText(e.target.value);
    };
    
    const onSubmit = (e) =>{
    setList([text, ...list]);
    };
    
    console.log("list,list");
    const tooltpin = () => {
    setVarb(true);
    };
    
    const tooltpout = () => {
    setVarb(false);
    };
    
    return (
    <>
    <input type="text" onChange={handelChange} value={text} />
    <button
      onClick={onSubmit}
    onMouseEnter ={tooltpin}
    onMouseOut ={tooltpout}
    >
    click me
    </button>
    {varb ? <div>{text} </div> : ""}
    {list ? list.map((item) => <p>{item}</p>) : ""}
    </>
    );
}
export default Appp;