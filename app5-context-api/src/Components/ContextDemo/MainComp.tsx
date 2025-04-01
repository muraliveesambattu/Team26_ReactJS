import React, { Component } from 'react';
import ParentComp from './ParentComp';
import { UserContextProvider } from './UserContext';

interface MainCompState {
  count: number;
}

export default class MainComp extends Component<{}, MainCompState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 20
    };
  }

  handleIncrement = () => {
    console.log("handleIncrement is Called !!!")
    this.setState({ count: this.state.count + 10 })
  }
  render() {
    return (
      <UserContextProvider value={{
        count: this.state.count,
        handleIncrement: this.handleIncrement
      }}>
        <ParentComp />
      </UserContextProvider>
    );
  }
}
