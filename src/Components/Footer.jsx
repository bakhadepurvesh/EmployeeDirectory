import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        {/* Logo / Company Name */}
        <h5 className="mb-3">EmployeeWeb</h5>

        {/* Social Icons */}
        <div className="mb-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 fs-4"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/purvesh-bakhade-7bab63291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 fs-4"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="mb-2">
          <a href="/" className="text-white mx-2">Home</a>
          <a href="/employee" className="text-white mx-2">Employee</a>
          <a href="/search" className="text-white mx-2">Search</a>
        </div>

        {/* Copyright */}
        <p className="mb-0">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;