import { useState } from "react";
export function Counter(){
  const [counter,setCounter] =useState(0);
  
  function increament(){
    setCounter(counter+1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increament}>
        Incremeant
      </button>
    </div>
  )
}