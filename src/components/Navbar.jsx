import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.login}>Login</Link>
        </li>
        <li>
          <Link to={routes.admin}>Admin Dashboard</Link>
        </li>
        <li>
          <Link to={routes.engineer}>Engineer Dashboard</Link>
        </li>
        <li>
          <Link to={routes.complaintRegister}>Register Complaint</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
