import React, { Component } from 'react'
import UserComp from './UserComp'

export default class ChildComp extends Component {
  render() {
    return (
      <div>
        <UserComp />
      </div>
    )
  }
}
