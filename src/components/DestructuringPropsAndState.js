
import React from 'react'

export default function DestructuringPropsAndState(props) {
    const{name,id} = props
    return (
    <div>
      <h1>Name : {name} Id : {id}</h1>
    </div>
  )
}

