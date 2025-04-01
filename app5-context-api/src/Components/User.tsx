import React, { Component } from 'react'

export default class User extends Component<{ countValue: number }> {
    constructor(props: any) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.countValue}</h2>
            </div>
        )
    }
}
