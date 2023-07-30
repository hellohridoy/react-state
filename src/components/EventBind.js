import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({ message: "good bye" });
  //     console.log(this); //undefined
  //     // EventBinding is required to solve this problems
  //   }

  clickHandler = () => {
    this.setState({
      message: "Good bye",
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <div>{message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* this.clickHandler is comport for small project but larger project it
        become costly */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
