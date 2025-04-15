import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from "redux";

// State interface
interface CounterState {
    count: number;
}

// Props from Redux store
interface PropsFromState {
    count: number;
}

// Props from Redux dispatch
interface PropsFromDispatch {
    dispatch: Dispatch;
}
type CounterProps = PropsFromState & PropsFromDispatch;

class Counter extends Component<CounterProps> {

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Welcome To Counter Component</h2>
                <button onClick={() => { this.props.dispatch({ type: "INCREMENT" }) }}>Increment</button>
                <button onClick={() => { this.props.dispatch({ type: "DECREMENT" }) }}>Decrement</button>
                <button onClick={() => { this.props.dispatch({ type: "RESET" }) }}>Reset</button>
                <h2>Count is : {this.props.count}</h2>
            </div>
        )
    }
}

function mapStateToProps(state: CounterState) {
    return state
}



export default connect(mapStateToProps)(Counter)