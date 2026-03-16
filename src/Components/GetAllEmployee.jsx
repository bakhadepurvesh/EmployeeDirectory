import axios from 'axios';
import React, { useState } from 'react'

const GetAllEmployee = () => {

    const [employees,setEmployees] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const getAllEmployees = async () =>{

        try{
            const response = await axios.get("http://localhost:8080/getAllEmployee");
            setEmployees(response.data);
            setShowTable(true);
        }
        catch(error){
            console.error("Error fetching employees:", error);
        }
    };

    const closeTable = () => {
    setShowTable(false);
    };


  return (
    <div className="container mt-4">

    <button
    className='btn btn-primary mb-3'
    onClick={getAllEmployees}
    > 
    Get All Employee 
    </button>

    {showTable && (

        <div>

          {/* Close Button */}
          <button
            className="btn btn-danger mb-2"
            onClick={closeTable}
          >
            Close Table
          </button>

         {/* Scrollable Table */}
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>

        <table className="table table-bordered table-hover">

            <thead className="table-dark">
             <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Department</th>
             </tr>
            </thead>
    
        <tbody>
         {employees.map((emp) =>(
           <tr key={emp.empid}>
                <td>{emp.empid}</td>
                <td>{emp.empname}</td>
                <td>{emp.empdesignation}</td>
                <td>{emp.empsalary}</td>
                <td>{emp.empdepartment}</td>
           </tr>
         ))}
        </tbody>

        </table>
     </div>
    </div>  
    )}
    
    </div>
  );
};

export default GetAllEmployee