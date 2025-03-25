import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <h2>Hello From User !!!</h2>
        <button onClick={this.props.changeEvent}>Change </button>
        <h2>{this.props.greeting}</h2>
        {this.props.showNewWelcomeMessage()}
      </div>
    );
  }
}
