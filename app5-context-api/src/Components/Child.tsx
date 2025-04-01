import React, { Component } from 'react'
import User from './User'

export default class Child extends Component<{countValue:number}> {
  render() {
    return (
      <div>
        <User countValue={this.props.countValue}/>
      </div>
    )
  }
}
