import React, { Component } from "react";
import HOCCompDemo from "./HOCCompDemo";

class ClickCounterDemo extends Component {

  render() {
    const { handleIncrement, handleDecrement, handleReset,count } = this.props;
    return (
      <div>
        <h2>Count : {count}</h2>
        <button onClick={handleIncrement}>Increment Count</button>
        <button onClick={handleDecrement}>Decrement Count</button>
        <button onClick={handleReset}>Reset Count</button>
      </div>
    );
  }
}

export default HOCCompDemo(ClickCounterDemo);
