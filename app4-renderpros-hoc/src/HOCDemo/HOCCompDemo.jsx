import React, { Component } from "react";

const HOCCompDemo = (OriginalComponent) => {
  class NewComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
    handleReset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <OriginalComponent
           count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
        />
      );
    }
  }

  return NewComp;
};

export default HOCCompDemo;
