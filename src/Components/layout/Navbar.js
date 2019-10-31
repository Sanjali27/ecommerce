import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignoutLink";
const Navbar = () => {
  return (
    <nav className="nav-wrapper teal darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Manager
        </Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  );
};
export default Navbar;
