import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          EmployeeWeb
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
               <a className="nav-link text-white" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/employee">Employee</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/search">Search</a>
            </li>

          </ul>

          {/* Login Register Buttons */}
          <div className="d-flex">

            <a href="/login" className="btn btn-outline-light me-2">
              Login
            </a>

            <a href="/register" className="btn btn-success custom-green">
              Register
            </a>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;