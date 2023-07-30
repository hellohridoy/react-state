import React, { Component } from "react";

export default class UserGreeting extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  
    render() {



        // if(this.state.isLoggedIn){
        //     return <div>Welcome Hridoy</div> 
        // }else{
        //     return <div>Welcome Guest</div> 
        // }
        // return (
        //     <div>
        //        <div>Welcome Hridoy</div> 
        //        <div>Welcome Guest</div> 
        //     </div>
        // );




        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Hridoy</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
    
        // return <div>{message}</div> 


        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Hridoy</div>:
        //     <div>Welcome Guest</div>
        // );

        return this.state.isLoggedIn && <div>Welcome Hridoy</div>

  }
}
