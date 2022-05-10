import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text :""
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e)=>this.setState({text: e.target.value}) } />
        {this.state.text}
      </div>
    )
  }
}

