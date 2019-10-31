import React from "react";
import { Link, NavLink } from "react-router-dom";
const SignInLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating chocolate lighten-1">
          SG
        </NavLink>
      </li>
    </ul>
  );
};
export default SignInLink;
