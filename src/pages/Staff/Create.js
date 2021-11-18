import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { getStafffromLS } from "../../LocalStorage";
// import Sidebar from "../../component/Sidebar/Sidebar";
// import Navbar from "../../component/Navbar/Navbar";
import "./staff.css";

const Create = () => {
  const [staff, setStaff] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [active, setActive] = useState("");

  // form submit event
  const addStaff = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("Staff");
    let newStaff = {
      id: Math.random(),
      name,
      address,
      email,
      password,
      gender,
      username,
      active,
    };
    itemsRef.push(newStaff);
    setStaff([...staff, newStaff]);
    setName("");
    setAddress("");
    setEmail("");
    setPassword("");
    setGender("");
    setUsername("");
    setActive("");
  };

  useEffect(() => {
    const json = JSON.stringify(staff);
    localStorage.setItem("Staff", json);
  }, [staff]);

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <Link to={"/staff/List"}>
        <button className="newUserButton">Back</button>
      </Link>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="New York | USA"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select
            name="active"
            id="active"
            className="newUserSelect"
            onChange={(e) => setActive(e.target.value)}
            value={active}
          >
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <br />
        <button className="newUserButton" onClick={addStaff}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
