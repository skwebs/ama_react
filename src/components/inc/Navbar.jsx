import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/ama_light-min.svg";

const Navbar = () => {
  return (
    <>
      <nav className="py-0 navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            {/* <strong>AMA</strong> */}
            <img style={{ height: "45px" }} src={logo} alt="AMA Logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mt-1 mt-lg-0 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" aria-current="page" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" exact to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" exact to="/students">
                  Students
                </NavLink>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </>
  );
};

export default Navbar;
