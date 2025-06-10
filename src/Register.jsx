import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./App";

export default function Register() {
  const {users, setUsers} = useContext(AppContext); //importing global variable from App.jsx
  const Navigate = useNavigate();
  const [user, setUser] = useState();

  const handleSubmit = () => {
    setUsers([...users, user]); //adding user object to users array
    Navigate('/login')
    console.log(users)  
  }

  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
      <hr />
    </div>
  );
}