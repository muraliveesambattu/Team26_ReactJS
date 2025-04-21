import axios from "axios";
import moduleName from "react";
import { useEffect } from "react";
import { useState } from "react";
export const FuncUsers = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [users, setUsers] = useState([]);

  // [] indiates , it should excute Only Once
  // [val] indicate , whenever val changes , this useEffect will run
  useEffect(() => {
    getAllUsersFromServer();
  }, []);

  const getAllUsersFromServer = async () => {
    const { data } = await axios.get("http://localhost:3000/users");
    setUsers(data);
  };
  const handleDelete = async (user) => {
    await axios.delete("http://localhost:3000/users/" + user.id);
    getAllUsersFromServer();
  };
  const handleEdit = (user) => {
    setUser(user);
    setIsEdit(true);
  };
  const handleUpdate = async () => {
    await axios.put("http://localhost:3000/users/" + user.id, user);
    getAllUsersFromServer();
    clearUser();
  };
  const clearUser = () => {
    setUser({
      fname: "",
      lname: "",
      email: "",
    });
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/users", user);
    getAllUsersFromServer();
    clearUser();
  };
  const { fname, lname, email } = user;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={fname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={lname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            {isEdit ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </form>
        </div>
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usr, i) => {
                return (
                  <tr key={i}>
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
};
