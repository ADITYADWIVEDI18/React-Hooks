//ClassComponents

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

    componentDidMount(){
      document.title = `Clicked ${this.state.count} times `
    }

    componentDidUpdate(){
      document.title = `Clicked ${this.state.count} times `
    }

  render() {
    return (
      <div>
        <button onClick={()=> this.setState({ count:this.state.count + 1  })}>
         Count {this.state.count} times</button>
      </div>
    )
  }
}

export default classCounter
