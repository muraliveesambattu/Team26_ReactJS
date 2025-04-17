import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUserAction, deleteUserAction, updateUserAction } from '../store/usersSlice';

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        fname: "",
        lname: "",
        email: ""
      },
      editIndex: null
    }
  }

  handleChange = (e) => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser })
  };
  handleAddUser = () => {
    console.log(this.state.user)
    this.props.dispatch(createUserAction(this.state.user))
    this.handleRest()
  };
  handleDelete = (usr) => {
    this.props.dispatch(deleteUserAction(usr))
  }
  handleEdit = (user, index) => {
    this.setState({ user: user, editIndex: index })
  }
  handleUpdateUser = () => {
    this.props.dispatch(updateUserAction({
      value: this.state.user,
      index: this.state.editIndex
    }))
    this.handleRest()
  }

  handleRest = () => {
    this.setState({
      user: {
        fname: "",
        lname: "",
        email: ""
      },
      editIndex: null
    })
  }
  render() {
    console.log(this.props)
    const { fname, lname, email } = this.state.user
    return (
      <div>
        <h2>Welcome to Users Component !</h2>
        <form>
          <label htmlFor="">First Name :</label>
          <input type="text" name="fname" value={fname} onChange={this.handleChange} /> <br />
          <label htmlFor="">Last Name :</label>
          <input type="text" name="lname" value={lname} onChange={this.handleChange} /> <br />
          <label htmlFor="">Email  :</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} /> <br />
          {this.state.editIndex === null ? <button type='button' style={{ background: 'blue', color: 'white', margin: '10px' }} onClick={this.handleAddUser}>CREATE USER</button>
            :
            <button type='button' style={{ background: 'blue', color: 'white', margin: '10px' }} onClick={this.handleUpdateUser}>Update USER</button>
          }
        </form>
        <table border={1}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.usersData.users && this.props.usersData.users.map((usr, index) => {
              return <tr>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>
                  <button onClick={() => { this.handleEdit(usr, index) }}>Edit</button>
                </td>
                <td>
                  <button onClick={() => { this.handleDelete(usr) }}>Delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Users)