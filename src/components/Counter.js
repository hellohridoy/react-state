import React, { Component } from 'react'

export default class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    
    increment(){
      // setState by defadult reder sigle time 
      // setState take two parameter (object,arrowFunction)
      //if you arrowFunction it wait for the function result and the execute the next line of code
        // this.setState({count:this.state.count+1},
        //     ()=>{
        //     console.log("Callback value is : ", this.state.count);
        //     }
        // )
        
        // console.log(this.state.count);
        this.setState(prevState =>({
          count:prevState.count + 1
        }))
        console.log(this.state.count);
    }
    incrementFive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
    }
    render() {
    return (
      <div>
        <div>
            Count - {this.state.count};
        </div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
