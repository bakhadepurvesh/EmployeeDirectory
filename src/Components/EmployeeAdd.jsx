import React, { useState } from 'react'
import axios from "axios";
import logo from "../assets/logo.png";

const EmployeeAdd = () => {


  const [employee,setEmployee] = useState({
    empname: "",
    empdesignation: "",
    empsalary: "",
    empdepartment: ""
  });

  const handleChange = (e) =>{
    setEmployee({
      ... employee,[e.target.name]:e.target.value
    });
  };

 const saveEmployee =  async (e) =>{

  e.preventDefault();

  if(!employee.empname || !employee.empdesignation|| !employee.empsalary||!employee.empdepartment){
   alert("Please fill all fields before saving employee");
    return;
  }

  try{

    const response = await axios.post(
      "http://localhost:8080/save",
      employee
    );

    // console.log("Employee Saved:",response.data);
    alert("Employee Added Successfully");
  
     setEmployee({
      empname: "",
      empdesignation: "",
      empsalary: "",
      empdepartment: ""

     });
  }
  catch(error){
     console.error("Error:",error);
  }
 };

   return (

    <div className="container-fluid">

      <div className="row">

        {/* Sidebar */}
        <div
                className="col-md-3 bg-dark text-white p-3"
                style={{ 
                  height: "450px",   
                  borderRadius: "8px",
                  position: "relative"
                }}
        >
            {/* Logo at the top */}
            <div className="text-center mb-3">
              <img
                src={logo}    // Replace with your logo path
                alt="Logo"
                style={{ height: "130px", width: "130px", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>

            {/* Panel Title */}
            <h4 className="mb-4 text-center">Employee Panel</h4>

            {/* Navigation Menu */}
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link text-white" href="/">
                  Dashboard
                </a>
              </li>

              <li className="nav-item mb-2">
                <a className="nav-link text-white" href="/employee">
                  Add Employee
                </a>
              </li>

              <li className="nav-item mb-2">
                <a className="nav-link text-white" href="/search">
                  Search Employee
                </a>
              </li>
            </ul>
          </div>

        {/* Form Area */}
        <div className="col-md-9 p-4">

          <div className="card p-4 shadow">

            <h3 className="mb-4">Add Employee</h3>

            <form onSubmit={saveEmployee}>

              <div className="mb-3">
                <input
                  type="text"
                  name="empname"
                  placeholder="Employee Name"
                  className="form-control"
                  value={employee.empname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="empdesignation"
                  placeholder="Designation"
                  className="form-control"
                  value={employee.empdesignation}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  name="empsalary"
                  placeholder="Salary"
                  className="form-control"
                  value={employee.empsalary}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="empdepartment"
                  placeholder="Department"
                  className="form-control"
                  value={employee.empdepartment}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary">
                Save Employee
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default EmployeeAdd;