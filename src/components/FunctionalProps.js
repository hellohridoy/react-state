import React, { Component } from 'react'

export default class FunctionalProps extends Component {
  render(props) {
    const {name,id} = this.props
    return (
      <div>
        <h1>Name : {name} Id : {id}</h1>
      </div>
    )
  }
}
