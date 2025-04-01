import React, { Component } from 'react'
import { UserContextConsumer } from './UserContext'

export default class UserComp extends Component {
  render() {
    return (
      <div>
        <UserContextConsumer>
          {/* {function (countValue:number) {
            return <h2>{countValue}</h2>
          }} */}
          {(contextValues:any) => {
            console.log(contextValues)
            return <>
            <button onClick={contextValues.handleIncrement}>Increment</button>
            <h2>{contextValues.count}</h2>
            </>
          }}
        </UserContextConsumer>
      </div>
    )
  }
}
