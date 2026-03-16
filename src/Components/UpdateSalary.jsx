import axios from 'axios';
import React, { useState } from 'react'

const UpdateSalary = () => {

    const [empid,setEmpid] = useState("");
    const [empsalary,setEmpsalary] = useState("");
    const [message, setMessage] = useState(""); 

    const updateSalary = async () => {

        if(empid ==="" || empsalary === ""){
         alert("Please fill all fields before updating salary");
         return;
        }

     try{

        const employeeData = {empsalary};

        const response = await axios.put(
          `http://localhost:8080/update/${empid}`,
          employeeData
        );

        alert("Salary update successfully !");
        // console.log(response.data);

        // Clear form after success
        setEmpid("");
        setEmpsalary("");

     } catch(error){
       console.error("Error updating salary:",error);
       alert("Failed to update salary");
     }
    };

  return (
    <div className="container mb-9">
      <div className="card p-4 shadow ms-1" style={{ maxWidth: "350px"}}>
        <h3 className="mb-3">Update Employee Salary</h3>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Employee ID"
          value={empid}
          onChange={(e) => setEmpid(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="New Salary"
          value={empsalary}
          onChange={(e) => setEmpsalary(e.target.value)}
        />

        <button
          className="btn btn-warning w-100"
          onClick={updateSalary}
        >
          Update Salary
        </button>

        {message && (
          <div className="mt-3">
            <h5>{message}</h5>
          </div>
        )}
      </div>
    </div>
  );
};


export default UpdateSalary