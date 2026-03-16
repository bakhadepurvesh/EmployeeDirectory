import axios from 'axios';
import React, { useState } from 'react'

const DeleteEmployee = () => {

  const[empid,setEmpid] = useState("");
  const[message,setMessage] = useState("");

  const deleteEmployee = async () => {

    try{
   
    const response = await axios.delete(
      `http://localhost:8080/delete/${empid}`
    );

    setMessage(response.data);
    alert("Employee Deleted Successfully");

    }
    catch(error){
        alert("Employee not found");
    }

  };

 return (
  <div className="card p-4 shadow w-100">
    <div className="card p-4 shadow ms-0" style={{ maxWidth: "350px" }}>
      <h3 className="mb-3">Delete Employee</h3>

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Enter Employee ID"
        value={empid}
        onChange={(e) => setEmpid(e.target.value)}
      />

      <button
        className="btn btn-danger w-100"
        onClick={deleteEmployee}
      >
        Delete
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


export default DeleteEmployee;