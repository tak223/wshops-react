import React, { Component } from 'react'

export default class Compo extends Component {
    state={
        value:0
    }
    incriment=()=>{
        this.setState({value:this.state.value +1})
    }
  render() {
    return (
      <div> 
      <button onClick={()=>this.props.changetext2('yoooo')}> change2</button>
      <button onClick={()=>this.incriment()}>incriment</button>
      <p> {this.state.value}</p>
      
      </div>
    )
  }
}
