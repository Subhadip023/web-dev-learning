import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <li>Home</li>{" "}
        </Link>
        <Link to="/login">
          <li>Login</li>{" "}
        </Link>
        <Link to="/about">
          <li>Contact</li>{" "}
        </Link>
      </nav>
    </div>
  );
}
