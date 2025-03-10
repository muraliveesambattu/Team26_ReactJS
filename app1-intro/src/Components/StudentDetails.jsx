import React, { Component } from 'react'

export default class StudentDetails extends Component {
  render() {
    return (
        <ul>
        {this.props.sudentInfo.map((std,i) => {
          return <li key={i}>{std}</li>;
        })}
      </ul>
    )
  }
}
