import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeAdd from './Components/EmployeeAdd'
import SearchEmployee from './Components/SearchEmployee'
import UpdateSalary from './Components/UpdateSalary'
import DeleteEmployee from './Components/DeleteEmployee'
import Navbar from './Components/Navbar'
import DashboardCards from './Components/DashboardCards';
import Footer from './Components/Footer';
import GetAllEmployee from './Components/GetAllEmployee';

function App() {

 return (
  <>
  <Navbar />
    {/* <div className="container">
      <h3 className="mb-4">Employee Dashboard</h3>
    </div> */}

<DashboardCards />
<EmployeeAdd />

    {/* Row for Update/Search/Delete */}
    <div className="container my-4">
      <div className="row g-3 justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <UpdateSalary />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <SearchEmployee />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <DeleteEmployee />
        </div>
      </div>
    </div>

   <GetAllEmployee />

    {/* Footer */}
    <Footer />
  </>
);
}

export default App
