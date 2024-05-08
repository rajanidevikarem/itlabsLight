import React, { useState, useEffect } from 'react';

const Jobslist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/xoix6vrnvu6gg');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white'>
      <h1>Google Sheet Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
            <th>Job Code</th>
            <th>Description</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.location}</td>
              <td>{row.date}</td>
              <td>{row.job_code}</td>
              <td>{row.description}</td>
              <td>{row.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobslist;
