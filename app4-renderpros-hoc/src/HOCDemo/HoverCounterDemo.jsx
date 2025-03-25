import React, { Component } from "react";
import HOCCompDemo from "./HOCCompDemo";

class HoverCounterDemo extends Component {
  render() {
    const { handleIncrement, handleDecrement, handleReset, count } = this.props;
    return (
      <div>
        <h2>Count : {count}</h2>
        <button onMouseOver={handleIncrement}>Increment Count</button>
        <button onMouseOver={handleDecrement}>Decrement Count</button>
        <button onMouseOver={handleReset}>Reset Count</button>
      </div>
    );
  }
}

export default HOCCompDemo(HoverCounterDemo);
