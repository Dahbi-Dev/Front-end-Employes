import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "green", padding: "10px" }}
        to="/"
      >
        <p style={{ margin: "0" }}>Home ✅</p>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "green", padding: "10px" }}
        to="/q2"
      >
        <p style={{ margin: "0" }}>Q2</p>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "green", padding: "10px" }}
        to="/q3"
      >
        <p style={{ margin: "0" }}>Q3</p>
      </Link>
    </div>
  );
}

export default NavBar;
