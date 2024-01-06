// useState doesnot automatically merge and update the object.
// --> setState will merge the state whereas useState Hook set of function will not merge the state 
// you have to do it manually. We can use the spread operator to handle  tht manual merge

// The setter function provided by useState doesnot automatically merge and update the object.


import React from 'react'
import { useState } from 'react';

function HookCounterThree() {
    const [ name , setName ] = useState({firstName:'' , lastName:''})
    return (
    <div>
        <form>
           Name <input type='text'
                 value={name.firstName} 
                    onChange={e => setName( {...name , firstName : e.target.value})} />
           
            <br/>
            <br/>
             LastName <input type='text' 
                value={name.lastName}
                    onChange={e => setName( {...name ,lastName : e.target.value})} />
          
            <h2>Your firstName is - {name.firstName}</h2>
            <h3>Your lastName is - {name.lastName}</h3>
        </form>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default HookCounterThree
