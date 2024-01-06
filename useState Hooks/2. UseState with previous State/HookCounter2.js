// Anytime you want to update the value based on previous value then we always go with safer value that passing the function 
// that will set newState value 

import React from 'react'
import '../App.css'
import { useState } from 'react';
function HookCounter2() {

    const initialCount = 0;
    const [count , setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i=0; i<5; i++)
        {
            // setCount(count+1); Not Correct
            setCount(prevCount => prevCount + 1);
        }
    }

  return (
    
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>    
        <button onClick={()=> setCount(prevCount => prevCount - 1)}>Decrement</button>    
        <button onClick={()=> setCount(initialCount)}>Reset</button>    
        <button onClick={incrementFive}>Increment Five</button>    

    </div>
  )
}

export default HookCounter2
