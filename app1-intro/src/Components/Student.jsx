import React, { Component } from "react";
import PersonDetails from "./PersonDetails";
import StudentDetails from "./StudentDetails";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Class Component !!!",
      person: {
        fname: "Ram",
        lname: "Krishna",
        email: "ram@gmail.com",
        city: "Chittoor",
        state: "Ap",
      },
      allStudents: ["Ravi", "Rahim", "Sam", "Sundar", "Kiran", "Raghu", "SSS"],
    };
  } // Which Excutes at the Time of Rendering
  // Dont
  // Repear
  // Yourself

  // Destucturing // This is Introduced in ES6

  render() {
    const { message, allStudents, person } = this.state;
    // const { fname, lname, email, city, state } = this.state.person;

    return (
      <div>
        <h2>{message}</h2>
        <PersonDetails personInfo={person} />
        {/* <ul>
          <li>{fname}</li>
          <li>{lname}</li>
          <li>{email}</li>
          <li>{city}</li>
          <li>{state}</li>
        </ul> */}
        <hr />
        {/* <ul>
          <li>{allStudents[0]}</li>
          <li>{allStudents[1]}</li>
          <li>{allStudents[2]}</li>
          <li>{allStudents[3]}</li>
        </ul> */}

        <StudentDetails sudentInfo={allStudents} />
      </div>
    );
  }
}
