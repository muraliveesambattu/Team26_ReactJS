import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserState } from '../store/userTypes'
import { addUsersAsyncAction, deleteUsersAsyncAction, fetchUsersAsyncAction, updateUsersAsyncAction } from '../store/userActions'

class User extends Component {

    render() {
        console.log(this.props)
        const { users } = this.props
        return (
            <div>
                <h2>Welcome to Users Component </h2>
                <button style={{ background: 'green', color: 'white' }} onClick={() => {
                    this.props.dispatch(addUsersAsyncAction({
                        "fname": "User 1",
                        "lname": "user lnmae",
                        "email": "user@gamil.com",

                    }))
                }}>Add User</button>

<button style={{ background: 'yellow' }} onClick={() => {
                    this.props.dispatch(updateUsersAsyncAction({
                        "fname": "updated User 1",
                        "lname": "updated lnmae",
                        "email": "updated@gamil.com",
                        "id":4
                    }))
                }}>Update User</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((usr, i) => {
                            return <tr>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.email}</td>
                                <td>{usr.id}</td>
                                <td>
                                    <button style={{ background: 'grey', color: 'white' }}>Edit</button>
                                </td>
                                <td>
                                    <button style={{ background: 'red', color: 'white' }} onClick={() => { this.props.dispatch(deleteUsersAsyncAction(usr.id)) }}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    componentDidMount(): void {
        this.props.dispatch(fetchUsersAsyncAction())
    }
}

function mapStateToProps(state: UserState) {
    return state
}

export default connect(mapStateToProps)(User)