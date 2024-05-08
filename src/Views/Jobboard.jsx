import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Jobboard() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/joblist");
        if (!response.ok) {
          throw new Error('Failed to fetch job data');
        }
        const data = await response.json();
        setTodos(data.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
        // Handle error, display message to the user, etc.
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div>

<img className="w-full h-[550px] object-cover left-0" src="assets/header/home_header.jpg" alt='Homeheroimage'/>
      <div className='bg-black/90 absolute left-0 w-full'/>

     <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
      <div className='max-w-[1140px] mx-auto p-4'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-3xl lg:text-5xl py-2 text-center lg:leading-normal'>Empower your business with the right 
      <br/>IT talent and technology.</h1>
      <div className='text-center'>
<button className= 'text-center text-black px-6 py-3 rounded-lg my-5 bg-lime-500 font-medium'>Explore Our Services</button>
</div>
     </div>
       </div>
      
      <div>
        <div className="margin">
          <br />
        </div>
        <div className="filter text-white">
          <br />
          <div>
            <button className="filter2 btn btn-info">Filter Job List</button><br /><br />
            <form className="filter3" method="get">
              <input type="radio" name="c" value="" onChange={handleSearchChange} />
              <label>All Jobs</label><br />
              <input type="radio" name="c" value="Backend" onChange={handleSearchChange} />
              <label>Part Time</label><br />
              <input type="radio" name="c" value="Internship" onChange={handleSearchChange} />
              <label>Internship</label><br />
              <input type="radio" name="c" value="Freelance" onChange={handleSearchChange} />
              <label>Freelance</label>
            </form>
          </div>
        </div>
        <div className="job">
          <div><br />
            <div className="form-group">
              <label>Search:</label>
              <input type="text" placeholder="Search Job Title..." value={search} className="form-control" onChange={handleSearchChange} />
            </div>
          </div>
          <br />
          <br />
          {todos.map((todo, i) => {
            const link = "apply?jobid=" + todo.id;
            const filter = JSON.stringify(todo.attributes).toLowerCase();
            if (filter.includes(search)) {
              return (
                <div key={i}>
                  <div>
                    <div className="details">
                      <img src='https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png' className="logo" alt="company logo" />
                      <div className="description">
                        <span className="span1">{todo.attributes.JobPosition}</span>
                        <span className='right'> {todo.attributes.Location}</span>
                        <span className="span2">{todo.attributes.JobStatus}</span><br /><br />
                        <span className="span1">{todo.attributes.Agency}</span>
                      </div>
                    </div>
                    <div className="apply">
                      <a href={link}><button className="ap1">Apply Now</button></a>
                      <div className="ap2">{todo.attributes.Experience}</div>
                    </div>
                  </div>
                  <br />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Jobboard;
