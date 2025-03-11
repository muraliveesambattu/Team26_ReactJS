import React, { Component } from "react";

export default class CRUD extends Component {
  // Create
  // Read
  // Update
  // Delete
  constructor() {
    super();
    this.state = {
      users: ["Ram", "Ravi", "Sam", "Sundar"],
    };
  }
  handleDelete = (e) => {
    // Filtering all Users except the Clicked
    const filteredUsers = this.state.users.filter((usr) => {
      return usr !== e.target.innerHTML;
    });
    console.log(filteredUsers);
    //    this.state.users = filteredUsers // this Wont work In React (Though it is correct )
    // console.log(e.target.innerHTML)
    this.setState({ users: filteredUsers });
  };
  render() {
    return (
      <div>
        <h2>Welcome to CRUD</h2>
        <ul>
          {this.state.users.map((user, i) => {
            return (
              <li
                key={i}
                style={{ cursor: "pointer", margin: "5px" }}
                onClick={this.handleDelete}
              >
                {user}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
