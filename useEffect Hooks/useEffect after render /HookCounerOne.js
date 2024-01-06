import React from 'react'
import { useState , useEffect} from 'react'
import '../App.css'
function HookCounerOne() {
    const [count , setCount] = useState(0);
    
    useEffect(()=>{
        document.title= `You clicked ${count} times`
    })

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounerOne
