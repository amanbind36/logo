import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
      const [second, setSecond] = useState(0);
      const [minutes,setMinutes]=useState(0);
      const [hour,setHour] =useState(0);
      const [s,setS] =useState(true)
              
      var timer;
    
      useEffect(()=>{
        if(!s){

            timer=setInterval(()=>{
                setSecond(second+1);
                if(second==59){
                    setMinutes(minutes+1);
                    setSecond(0);
                }
                if(minutes==59){
                    setHour(hour+1)
                    setMinutes(0)
                }
            },[1000])

        }
       
        return ()=>clearInterval(timer); 
      })

      const restart=()=>{
           setMinutes(0)
           setSecond(0)
      }
      const stop=()=>{
        clearInterval(timer)
      }
   const start=()=>{
    setS(false)
   }
      


  return (
    <><div><h1>Stopwatch</h1></div>
        <h1>{hour<10?"0"+hour:hour}:{minutes<10?"0"+minutes:minutes }:{second<10?"0"+second:second}</h1>
        <button onClick={restart}>Restart</button>
        <button onClick={stop}>Stop</button>
        <button onClick={start}>Start</button>
    </>
    
  )
}

export default Stopwatch