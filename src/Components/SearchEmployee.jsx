import axios from 'axios';
import React, { useState } from 'react';

const SearchEmployee = () => {
  const [empname, setEmpname] = useState("");
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState("");

  const searchEmployee = async () => {
    if (!empname.trim()) {
      setMessage("Please enter an employee name");
      setEmployee(null);
      return;
    }

    try {
      const response = await axios.get(
       `https://employee-api.up.railway.app/find/${empname}`
      );

      if (response.data && Object.keys(response.data).length > 0) {
        setEmployee(response.data);
        setMessage("");
      } else {
        setEmployee(null);
        setMessage("Employee not found");
      }
    } catch (error) {
      console.error("Employee not found", error);
      setEmployee(null);
      setMessage("Employee not found");
    }
  };

  const handleInputChange = (e) => {
    setEmpname(e.target.value);
    setEmployee(null); // Clear previous employee data when typing
    setMessage("");     // Clear previous message when typing
  };

  return (
    <div className="card p-4 shadow w-100">
      <div className="card p-4 shadow ms-0" style={{ maxWidth: "350px" }}>
        <h3 className="mb-3">Search Employee</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Employee Name"
          value={empname}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary w-100"
          onClick={searchEmployee}
        >
          Search
        </button>

        {employee && (
          <div className="mt-3">
            <h5>Employee Details</h5>
            <p><strong>ID:</strong> {employee.empid}</p>
            <p><strong>Name:</strong> {employee.empname}</p>
            <p><strong>Designation:</strong> {employee.empdesignation}</p>
            <p><strong>Salary:</strong> {employee.empsalary}</p>
            <p><strong>Department:</strong> {employee.empdepartment}</p>
          </div>
        )}

        {message && !employee && (
          <div className="mt-3">
            <h5>{message}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchEmployee;