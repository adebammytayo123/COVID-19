import React from 'react';
import './Dashboard.css';




const Dashboard = ({ datas }) => {
  console.log(datas)
  
    return (
      <div className="dashboard-section" id="dashboard">
        <h1>Coronavirus Disease(COVID-19) Statstitics of some countries.</h1>
        <table>
          <thead>
          <tr className="table-headers">
            <th>Country</th>
            <th>Active Cases</th>
            <th>Total Cases</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
	        </tr>
          </thead>
          <tbody>
            {datas.map(data => (
              <tr key={data.country}>
              <td>{data.country}</td>
              <td>{data.active_cases}</td>
              <td>{data.total_cases}</td>
              <td>{data.total_recovered}</td>
              <td>{data.total_deaths}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    )
}

export default Dashboard;