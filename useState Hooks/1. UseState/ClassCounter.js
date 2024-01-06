import React, { Component } from 'react'
import '../App.css'
//Create a class component to make a counter
class classCounter extends Component {

  constructor(props){
    super(props)
  
    //State  variable initialise to zero
    this.state = {
      count:0
    }
  } 
  // Method that capable of setting the state value
  incrementCount=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default classCounter
