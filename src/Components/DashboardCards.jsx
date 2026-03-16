import React from 'react'

const DashboardCards = () => {

 const stats = [
 {title: "Total Employees", value: 25,icon: "bi-people-fill", bg: "primary"},
 { title: "Developers", value: 18, icon: "bi-person-badge-fill", bg: "warning" },
 { title: "Tester", value: 10, icon: "bi-person-check-fill", bg: "success" },
 { title: "Avg Salary", value: "$60,000", icon: "bi-currency-dollar", bg: "info" },
];

  return (
    <div className='container my-4'>
        <div className="row g-3">
            {stats.map((stat, index) => (
          <div className="col-md-3" key={index}>
            <div className={`card text-white bg-${stat.bg} h-100`}>
              <div className="card-body d-flex align-items-center">
                <i className={`bi ${stat.icon} fs-1 me-3`}></i>
                <div>
                  <h5 className="card-title">{stat.title}</h5>
                  <h3 className="card-text">{stat.value}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default DashboardCards