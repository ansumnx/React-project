import React from 'react';
import { useState } from 'react';


const Incre = () => {
    let [value , setvalue] = useState(0);
    let incre=()=>{
        setvalue(value+1);
        if(value==10)
        {
            setvalue(10);
        }
    }
    let decre =()=>{
        setvalue(value-1);
        if(value==0)
        {
            setvalue(0);
        }
    }
  return (
    <>
    <h3>increse and decrease project</h3>
    <p>{value}</p>

      <button onClick={incre}>Increase</button>
      <button onClick={decre}>Decrease</button>
    </>
  )
}

export default Incre