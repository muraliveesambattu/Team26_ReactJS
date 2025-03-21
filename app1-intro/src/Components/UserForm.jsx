import React, { Component } from "react";

export default class UserForm extends Component {
  render() {
    const { handleChange, employee, empIndex, handleSubmit ,handleUpdate} = this.props;
    return (
      <div>
        <h2>Welcome to User Form</h2>
        <form action="">
          <label htmlFor="">Employee ID :</label>
          <input
            type="text"
            name="id"
            id=""
            value={employee.id}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="">Employee Name :</label>
          <input
            type="text"
            name="name"
            id=""
            value={employee.name}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="">Employee Department :</label>
          <input
            type="text"
            name="department"
            id=""
            value={employee.department}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="">Employee Salary :</label>
          <input
            type="text"
            name="salary"
            id=""
            value={employee.salary}
            onChange={handleChange}
          />{" "}
          <br />
          {empIndex === null ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Add User
            </button>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleUpdate}
            >
              Update User
            </button>
          )}
        </form>
      </div>
    );
  }
}
