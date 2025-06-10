import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  
  const [user, setUser] = useState({});
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const disp_details = () => {
    setEmail(user.email);
    setName(user.name);
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
        <button onClick={disp_details}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
      <hr />
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}