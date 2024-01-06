import React, { useState } from 'react'
import MovePointer from './MovePointer';
function MouseContainer() {

    const [display , setDisplay]=useState(true);

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Button</button>
        {display && <MovePointer />}
    </div>
  )
}

export default MouseContainer