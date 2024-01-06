import React from 'react'
import { useState,useEffect } from 'react'
function MovePointer() {

    const[ x , setX ] = useState(0);
    const[ y , setY ] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Event');

        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect( () => {
        console.log('useEffect Called')

        window.addEventListener('mousemove' , logMousePosition)
    },[]  )

  return (
    <div>
       <h1>X - {x} Y - {y}</h1> 
    </div>
  )
}

export default MovePointer
