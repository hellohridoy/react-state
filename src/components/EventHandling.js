import React from 'react'

export default function EventHandling() {

   function clickHandler(){
       console.log('Button Clicked'); 
    }
  return (
    // It's important to note that you should generally use the first form, clickHandler, when passing a handler function to an event attribute (e.g., onClick). This allows the event to trigger the function when the appropriate event occurs. On the other hand, using clickHandler() would execute the function immediately without waiting for an event to occur, which might not be desired behavior in most cases.
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
