import React from 'react'
import {Link} from 'react-router-dom';
import Searchbar from '../components/Searchbar';
import JobCard from '../components/JobCard';
const Career = () => {
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
 <Link to="/Currentopening " className='text-white px-4'><button className= 'text-center text-white px-6 py-3 rounded-lg my-5 bg-[#046592]  font-medium'>Explore Jobs</button></Link>
</div>
</div>
  </div>
  <section className='py-16 bg-gradient-to-r from-[#1D1422] to-[#2E233B]'>
   <h2 className='text-white text-lg lg:text-3xl lg:py-16 py-8 lg:px-20 px-8 lg:mx-12 mx-4 leading-loose lg:leading-[3rem] lg:text-left text-center'>
   At ITLABS,  we innovate, we collaborate, and we empower our clients to achieve their tomorrow.
We believe our greatest asset is our team – talented individuals with a passion for technology and a drive to make a difference.
   </h2>

  </section>
  
  <section className='lg:py-16 py-8'>
  <h1 className='font-medium my-5 mx-auto text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Life at ITlabs</h1>
  <div className='w-full m-auto px-4 lg:px-28 py-16 grid lg:grid-cols-2 gap-4'>
{/* left Side */}
   <div className='flex flex-col h-full justify-center text-[#16111C]' data-aos="fade-left">

   <div className='lg:mx-8 mx-2'>
     <ul>
       <li className='flex items-start my-6'>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Continuous Learning & Growth</h5>
           <p className=''>Expand your skillset with access to cutting-edge technology and ongoing training.</p>
      </div>
       </li>
       <li className='flex  items-start my-6'>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Meaningful Work</h5>
           <p className=''>Contribute to projects that shape our clients' futures.</p>
     
      </div>
       </li>
       <li className='flex items-start my-6 '>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Thriving Culture</h5>
           <p className=''>Work in a collaborative and supportive environment that fosters excellence.</p>
       
      </div>
       </li>
       <li className='flex items-start my-6 '>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Competitive Compensation</h5>
           <p className=''>Enjoy competitive salaries, benefits packages, and performance bonuses.</p>
       
      </div>
       </li>
  
     </ul>
   </div>

   <div>
    
   </div>
 </div>
 {/* right Side */}
 <div className='grid grid-cols grid-rows-6' data-aos="fade-right">
   <img className='row-span-6 object-cover w-full h-full rounded-3xl'
     src="assets/images/Career_life.png" alt='/' />
   
 
 
   
 </div>


</div>
  </section>
  <section className='lg:py-16 py-8'>
  <h1 className='font-medium my-5 mx-auto text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>What We Look For</h1>
  <div className='w-full m-auto px-4 lg:px-28 py-16 grid lg:grid-cols-2 gap-4'>
     {/* right Side */}
 <div className='grid grid-cols grid-rows-6' data-aos="fade-left">
   <img className='row-span-6 object-cover w-full h-full rounded-3xl '
     src="assets/images/Career.png" alt='/' />
   
   
 </div>
{/* left Side */}
   <div className='flex flex-col h-full justify-center text-[#16111C] ' data-aos="fade-right">

   <div className='lg:mx-8 mx-2'>
     <ul>
       <li className='flex items-start my-6'>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Technical Expertise</h5>
           <p className=''>We seek skilled professionals in areas like Database Administration, System Administration, Software Development, and Project Management.</p>
      </div>
       </li>
       <li className='flex items-start my-6'>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Learning Agility</h5>
           <p className=''>A passion for staying ahead of the curve is key.</p>
     
      </div>
       </li>
       <li className='flex items-start my-6 '>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'> Client Focus</h5>
           <p className=''>We prioritize delivering exceptional service and value.</p>
       
      </div>
       </li>
       <li className='flex items-start my-6 '>
       <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

     
</div>
           <div className='mx-6'>
           <h5 className='text-lg lg:text-2xl py-2 my-2'>Teamwork</h5>
           <p className=''>Collaboration is essential for our success.</p>
       
      </div>
       </li>
  
     </ul>
   </div>

   <div>
    
   </div>
 </div>



</div>
  </section>


 </div>
  )
}

export default Career