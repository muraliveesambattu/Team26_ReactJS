import React, { Component } from 'react'

export default class PersonDetails extends Component {
   
  render() {
    return (
      <div>
         <ul>
            {Object.values(this.props.personInfo).map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
      </div>
    )
  }
}
