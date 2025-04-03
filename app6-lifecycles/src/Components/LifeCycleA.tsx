import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

interface LifeCycleAProps {
  count: number,
  message: string
}
export default class LifeCycleA extends Component<{ age: number }, LifeCycleAProps> {
  constructor(props) {
    console.log("LifeCycleA constructor Triggered !!")
    super(props)

    this.state = {
      count: 10,
      message: ""

    }
  }
  static getDerivedStateFromProps(prop, state) {
    console.log(prop, state)
    console.log("LifeCycleA getDerivedStateFromProps Triggered !!")
    if (prop.age > 18) {
      return {
        message: "The User is An Adult !!"
      }
    } else {
      return {
        message: "The User is An Teenager !!"
      }
    }

  }

  handleChangeCount = () => {
    this.setState({ count: 50 })
  }
  render() {
    console.log("LifeCycleA render Triggered !!")
    return (
      <div>
        <h2>Welcome to LifeCycles !!!!</h2>
        <button onClick={this.handleChangeCount}>Change Count</button>
        <h2>Count : {this.state.count}</h2>
        <h2>Message : {this.state.message}</h2>
        <LifeCycleB count={this.state.count}/>
      </div>
    );
  }

  componentDidMount(): void {
    console.log("LifeCycleA componentDidMount Triggered !!")
  }
}
