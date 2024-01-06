import React from 'react'
import '../App.css';
import { useState } from 'react'

function HookCounter() {
    //This Hooks takes initial value of state property and return current value of state
    //property and method capable of updating that state property.
    
  const [ count , setCount ] = useState(0);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
