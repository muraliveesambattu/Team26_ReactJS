import React, { Component } from "react";

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        { id: 1, name: "Michael Scott", department: "Sales", salary: 80000 },
        { id: 2, name: "Dwight Schrute", department: "Sales", salary: 75000 },
        { id: 3, name: "Jim Halpert", department: "Sales", salary: 70000 },
        { id: 4, name: "Pam Beesly", department: "Reception", salary: 50000 },
        { id: 5, name: "Toby Flenderson", department: "HR", salary: 60000 },
      ],
      employee: {
        id: "",
        name: "",
        department: "",
        salary: "",
      },
      empIndex:null
    };
  }

  handleDelete = (emp) => {
    console.log(emp);
    const filteredEmployees = this.state.employees.filter((employee) => {
      return emp.id !== employee.id;
    });
    this.setState({ employees: filteredEmployees });
  };

  handleChange = (e) => {
    console.log(e.target.name);
    // 1. Copy the State
    // 2. Do the Required Change
    // 3. Update the State
    // this.state.employee.name = e.target.value /// Not At all allowed

    const newEmployee = { ...this.state.employee }; // Copying a OBJECT
    newEmployee[e.target.name] = e.target.value;
    this.setState({ employee: newEmployee });
    console.log(e.target.value);
  };

  handleSubmit = () => {
    const newEmployees = [...this.state.employees];
    newEmployees.push(this.state.employee);
    this.setState({ employees: newEmployees });
    this.handleClear()
  };

  handleClear = () => {
    this.setState({
      employee: {
        id: "",
        name: "",
        department: "",
        salary: "",
      },
    });
  };

  handleEdit=(emp,i)=>{
    this.setState({employee:emp,empIndex:i})
  }

  handleUpdate=()=>{
    const newEmployees = [...this.state.employees];
    newEmployees[this.state.empIndex] = this.state.employee;
    this.setState({employees:newEmployees,empIndex:null});
    this.handleClear()
  }
  render() {
    return (
      <div className="container">
        <form action="">
          <label htmlFor="">Employee ID :</label>
          <input
            type="text"
            name="id"
            id=""
            value={this.state.employee.id}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Employee Name :</label>
          <input
            type="text"
            name="name"
            id=""
            value={this.state.employee.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Employee Department :</label>
          <input
            type="text"
            name="department"
            id=""
            value={this.state.employee.department}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Employee Salary :</label>
          <input
            type="text"
            name="salary"
            id=""
            value={this.state.employee.salary}
            onChange={this.handleChange}
          />{" "}
          <br />

          {this.state.empIndex === null ?  <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleSubmit}
          >
            Add User
          </button> :   <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleUpdate}
          >
            Update User
          </button>}
         
        
        </form>
        <hr />
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
            {this.state.employees.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button type="button" className="btn btn-primary" onClick={()=>{this.handleEdit(emp,i)}}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.handleDelete(emp);
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
