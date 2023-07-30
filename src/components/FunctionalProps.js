import React, { Component } from 'react'

export default class FunctionalProps extends Component {
  render(props) {
    const {name,id} = this.props;
    //const {state1,state2} = this.state
    return (
      <div>
        <h1>Name : {name} Id : {id}</h1>
      </div>
    )
  }
}
