import React, { Component } from "react";
import User from "./User";
import SampleComp from "./SampleComp";

export default class RenderPropsDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to RenderPropsDemo",
    };
  }

  changeMessage = () => {
    this.setState({ message: "New Message Changed ...." });
  };

  showNewWelcomeMessage = () => {
    return <SampleComp/>
  };
  render() {
    return (
      <div>
        <h2>Welcome to Render Props Demo Component </h2>
        <User greeting={this.state.message} changeEvent={this.changeMessage} showNewWelcomeMessage={this.showNewWelcomeMessage}/>
      </div>
    );
  }
}
