import React, { useEffect, useState } from 'react'

const Stopwatch2 = () => {
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [second,setSecond]= useState(0)
    const [stop,setStop]= useState(true)
       
    const start=()=>{
     setStop(false)
    }
    const stope=()=>{
        setStop(true)
       }
       const reset=()=>{
        setHour(0)
        setMin(0);
        setSecond(0);
        
       }

       useEffect(()=>{
        let interval=null;
        if(!stop){
            interval=setInterval(()=>{
                if(min>59){
                    setHour(hour+1);
                    setMin(0)
                    clearInterval(interval)
                }
                if(second>59){
                    setMin(min+1);
                    setSecond(0)
                    clearInterval(interval)
                }
                if(second<=59){
                    setSecond(second+1);
                  
                    clearInterval(interval)
                 
                }
               
            },[1000])
        }
        else{
            clearInterval(interval);
        }
        return ()=>{
            clearInterval(interval)
        }
       })


  return (<>
    <div><h1>Stopwatch2</h1></div>
    <h1>{hour}:{min}:{second}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stope}>Stop</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Stopwatch2