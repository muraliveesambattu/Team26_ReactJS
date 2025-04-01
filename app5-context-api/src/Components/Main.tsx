import React, { Component } from 'react'
import Parent from './Parent'

export default class Main extends Component<{}, { count: number }> {
    constructor(props) {
        super(props)

        this.state = {
            count: 10
        }
    }

    render() {
        return (
            <div>
                <Parent countValue={this.state.count} />
            </div>
        )
    }
}
