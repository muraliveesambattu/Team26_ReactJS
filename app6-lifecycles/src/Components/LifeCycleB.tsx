import React, { Component } from 'react'
import ImageCom from './ImageCom'

export default class LifeCycleB extends Component<{count: number}, {  }> {
    constructor(props) {
      super(props)
    
      this.state = {
         newMessage:""
      }
    }
    
    static getDerivedStateFromProps() { 
        console.log("LifeCycleB getDerivedStateFromProps Triggered !!")
        return null
    }
    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate Triggered !!")

        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("LifeCycleB getSnapshotBeforeUpdate Triggered !!")

        return null
    }
    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate Triggered !!")

    }
    render() {
        console.log("LifeCycleB render Triggered !!")

        return (
            <div>
                <h2>Value From Parent : {this.props.count}</h2>
                {this.props.count === 10 && <ImageCom/>}
            </div>
        )
    }
}
