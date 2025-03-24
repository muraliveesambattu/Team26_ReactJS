import React, { Component } from "react";
import axios from "axios";
export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
      },
      users: [],
      isEdit: false,
    };
  }

  handleChange = (e) => {
    console.log(e.target.name);
    const newUser = { ...this.state.user };
    const propertyName = e.target.name;
    newUser[propertyName] = e.target.value;
    this.setState({ user: newUser });
  };

  handleSubmit = () => {
    // 1. Fetch
    // fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   body: JSON.stringify(this.state.user),
    //   headers: {
    //     "Content-Type": "Application/JSON",
    //   },
    // }).then(() => {
    //   console.log("User Added Successfully !!!");
    // });

    // 2. Axios
    axios.post("http://localhost:3000/users", this.state.user).then(() => {
      console.log("User Added by Axios !!!");
      this.getDataFromServer();
      this.clearForm()
    });
  };

  getDataFromServer = () => {
    // fetch("http://localhost:3000/users").then((rawData)=>{
    //     return rawData.json()
    // }).then((actualData)=>{
    //     console.log(actualData)
    // })
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
  };
  handleDelete = (usr) => {
    axios.delete("http://localhost:3000/users/" + usr.id).then(() => {
      this.getDataFromServer();
    });
  };
  handleEdit = (usr) => {
    this.setState({ user: usr,isEdit:true });
  };
  handleUpdate=()=>{
    axios.put("http://localhost:3000/users/" + this.state.user.id,this.state.user).then(()=>{
        this.getDataFromServer();
        this.clearForm()
        this.setState({isEdit:false})
    })
  }
  clearForm=()=>{
    this.setState({
        user:{
            fname: "",
            lname: "",
            email: "",
          }
    })
  }
  render() {
    const { fname, lname, email } = this.state.user;
    const { handleChange, handleSubmit, handleDelete, handleEdit,isEdit,handleUpdate } = this;
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <form>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="fname"
                  value={fname}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="lname"
                  value={lname}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              {this.state.isEdit ?   <button
                type="button"
                class="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button> :  <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>}
             
            
            </form>
          </div>
          <div class="col">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((usr) => {
                  return (
                    <tr>
                      <td>{usr.id}</td>
                      <td>{usr.fname}</td>
                      <td>{usr.lname}</td>
                      <td>{usr.email}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            handleEdit(usr);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleDelete(usr);
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
        </div>
      </div>
    );
  }
  // The following Method will trigger after Component Loaded !
  componentDidMount() {
    this.getDataFromServer();
  }
}
