import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStudentAsyncAction, getStudentsAsycCall } from '../store/studentsSlice'

class Students extends Component {

    handleEdit=()=>{};
    handleDelete=(user)=>{
        this.props.dispatch(deleteStudentAsyncAction(user))
    };
    render() {
        const { students } = this.props;

        return (
            <div>
                <h2>Welcomet To Students Component !!</h2>
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
            {students && students.map((usr, index) => {
              return <tr key={index}>
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
    componentDidMount(): void {
        this.props.dispatch(getStudentsAsycCall())
    }
}
function mapStateToProps(state) {
    return state.students
}

export default connect(mapStateToProps)(Students)