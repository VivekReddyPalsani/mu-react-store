import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header({ name }) {
  return (
    <div className="App-Header-Row" style={{ backgroundColor: "orange" }}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/"><button>Home</button></Link>
          </li>
          <li>
            <Link to="/login"><button>Login</button></Link>
          </li>
          <li>
            <Link to="/cart"><button>Cart</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}