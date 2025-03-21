import React, { Component } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

//Parent Component
export default class CRUD_Multiple_Components extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        id: "",
        name: "",
        department: "",
        salary: "",
      },
      employees: [
        { id: 1, name: "Michael Scott", department: "Sales", salary: 80000 },
        { id: 2, name: "Dwight Schrute", department: "Sales", salary: 75000 },
        { id: 3, name: "Jim Halpert", department: "Sales", salary: 70000 },
        { id: 4, name: "Pam Beesly", department: "Reception", salary: 50000 },
        { id: 5, name: "Toby Flenderson", department: "HR", salary: 60000 },
      ],
      empIndex: null,
    };
  }

  handleChange = (e) => {
    console.log(e);
    const newEmployee = { ...this.state.employee };
    newEmployee[e.target.name] = e.target.value;
    this.setState({ employee: newEmployee });
    // 1. Copy Existing State
    // 2. Do the Required Changes
    // 3. Update the State
  };
  handleSubmit = () => {
    const newEmployees = [...this.state.employees];
    newEmployees.push(this.state.employee)
    this.setState({ employees: newEmployees,empIndex:null });
    this.clearForm();
  };

  handleEdit = (emp, i) => {
    console.log("handleEdit Called !!");
    this.setState({ employee: emp, empIndex: i });
  };
  handleDelete = (emp, i) => {
    console.log("handleDelete Called !!");
    const newUsers = [...this.state.employees];
    newUsers.splice(i, 1);
    this.setState({ employees: newUsers });
  };

  handleUpdate = () => {
    console.log("handleUpdate is called !!!")
    const newEmployees = [...this.state.employees];
    newEmployees[this.state.empIndex] = this.state.employee;
    this.setState({ employees: newEmployees,empIndex:null });
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      employee: {
        id: "",
        name: "",
        department: "",
        salary: "",
      },
    });
  };
 
  render() {
    return (
      <div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <UserForm
                employee={this.state.employee}
                handleChange={this.handleChange}
                empIndex={this.state.empIndex}
                handleSubmit={this.handleSubmit}
                handleUpdate={this.handleUpdate}
              />
            </div>
            <div class="col">
              <UserTable
                employees={this.state.employees}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
