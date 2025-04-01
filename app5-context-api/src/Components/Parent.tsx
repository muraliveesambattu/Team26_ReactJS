import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component<{countValue:number}> {
  render() {
    return (
      <div>
        <Child countValue={this.props.countValue}/>
      </div>
    )
  }
}
