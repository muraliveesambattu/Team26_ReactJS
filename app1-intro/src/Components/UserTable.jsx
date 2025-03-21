import React, { Component } from "react";

export default class UserTable extends Component {
  render() {
    const { employees, handleEdit, handleDelete } = this.props;
    return (
      <div>
        <h2>Welcome to User Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        handleEdit(emp, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(emp,i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
