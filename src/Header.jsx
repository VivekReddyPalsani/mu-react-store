import React from "react";
import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";

export default function Header({ name }) {
  const {email} = useContext(AppContext);
  return (
    <div className="App-Header-Row" style={{ backgroundColor: "orange" }}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/"><button className="menu">Home</button></Link>
          </li>
          <li>
            {email ? (
              <>
                <Link to="/order"><button className="menu">Order</button></Link>
                <Link to="/logout"><button className="menu">Logout</button></Link>
              </>
              ) : (
                <Link to="/login"><button className="menu">Login</button></Link>
              )
            }
            
          </li>
          <li>
            <Link to="/cart"><button className="menu">Cart</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}