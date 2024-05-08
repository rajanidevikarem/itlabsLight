import React from 'react'
import Searchbar from '../components/Searchbar';
import JobCard from '../components/JobCard';
const Jobs = () => {
  return (
    <div className='w-full leading-loose'>
    <img className="w-full h-[550px] object-cover left-0" src="assets/header/home_header.jpg" alt='Homeheroimage'/>
 <div className='bg-black/90 absolute left-0 w-full'/>

<div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
<div className=' max-w-[1140px] mx-auto p-4'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-4xl lg:text-5xl py-2 text-center lg:leading-normal'>  ITLABS Career
     </h1>
      <p> Collaborate with passionate minds and make a real impact on the world through technology.</p>
 <div className='text-center'>
 <Link to="/Currentopening" className='text-white px-4'><button className= 'text-center text-black px-6 py-3 rounded-lg my-5 bg-lime-500 font-medium'>Explore Jobs</button></Link>
</div>
</div>
  </div>
  <section className='px-16'>
    
  <Searchbar/>
  <JobCard/>
  </section>
  </div>

  )
}

export default Jobs