import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
  render() {
    return (
      <div>
        <ChildComp/>
      </div>
    )
  }
}
