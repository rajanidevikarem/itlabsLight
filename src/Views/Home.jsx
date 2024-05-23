import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className='w-full leading-loose'>
      <img className="w-full h-[550px] object-cover left-0" src="assets/header/home_header.jpg" alt='Homeheroimage'/>
  
     <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
      <div className='max-w-[1140px] mx-auto p-8 m-5'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-3xl lg:text-5xl py-2 text-center lg:leading-normal'>Empower your business with the right 
      <br/>IT talent and technology.</h1>
      <div className='text-center'>
      <Link to="/Services" className='text-white px-4'><button className= 'text-center text-white px-6 py-3 rounded-lg my-5 bg-[#046592] font-medium'>Explore Our Services</button></Link>

</div>
     </div>
       </div>
       <section className='lg:py-16 py-8 bg-[#EBF1F4]'>
       <h1 className='font-medium my-5 mx-auto text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Transforming Your IT Landscape</h1>
      <p className='text-center text-[#16111C]  max-w-[960px] mx-auto lg:p-4 p-8'> At ITLABs we provide a comprehensive suite of IT staffing and consulting services to help businesses achieve their goals.</p>
<div className='mt-12 '>
      <div className='w-9/12 m-auto rounded-lg grid lg:grid-cols-2 gap-4 Cardblock mb-6 bg-white ' data-aos="zoom-in">
  {/* left Side */}
        <div className='flex flex-col  justify-center text-[#16111C]  lg:p-8 p-4'>
        <h3 className='text-2xl lg:text-3xl font-medium py-4 lg:py-2 text-center lg:text-left'>Expert IT Staffing</h3>
       <p className='py-4 lg:py-2 lg:text-left text-center'>We take the time to understand your specific needs and identify top-tier IT professionals who are the perfect match for your projects and culture. Whether you need full-time, temporary, 
        or contract talent, we have a network of skilled individuals across various IT domains.</p>
   
        <div>
         
        </div>
      </div>
      {/* right Side */}
      <div className='grid grid-cols grid-rows-6 rounded-lg'>
        <img className='row-span-6 object-cover w-full h-full rounded-r-lg' src="assets/images/Itstaffing.png" alt='/' />
        
      
      
        
      </div>
    
  
    </div>
    <div className='w-9/12 m-auto rounded-lg grid lg:grid-cols-2 gap-4 Cardblock mb-6 bg-white' data-aos="zoom-in">
        {/* right Side */}
        <div className='grid grid-cols grid-rows-6 rounded-r-lg'>
        <img className='row-span-6 object-cover w-full h-full rounded-l-lg' src="assets/images/itconsulting.png" alt='/' />
        
      
      
        
      </div>
  {/* left Side */}
        <div className='flex flex-col  justify-center  text-[#16111C] lg:p-8 p-4'>
        <h3 className='text-2xl lg:text-3xl font-medium py-2 text-center lg:text-left'>Strategic IT Consulting</h3>
       <p className='lg:py-2 py-4 lg:text-left text-center'>Our team of experienced consultants offers insightful guidance on your IT infrastructure, systems, and overall IT strategy. We can advise on cloud migration, cybersecurity solutions, business process automation, and more.

</p>
   
        <div>
         
        </div>
      </div>
    
    
  
    </div>
    <div className='w-9/12 m-auto rounded-lg grid lg:grid-cols-2 gap-4 Cardblock mb-6  bg-white' data-aos="zoom-in">
  {/* left Side */}
        <div className='flex flex-col h-full justify-center text-[#16111C] lg:p-8 p-4'>
        <h3 className='text-2xl lg:text-3xl font-medium py-2 text-center lg:text-left'>Seamless Project Management</h3>
       <p className='lg:py-2 py-4 lg:text-left text-center'>We manage and implement IT projects, ensuring they are completed on time, within budget, and aligned with your business objectives.</p>
   
        <div>
         
        </div>
      </div>
      {/* right Side */}
      <div className='grid grid-cols grid-rows-6 rounded-lg'>
        <img className='row-span-6 object-cover w-full h-full rounded-r-lg' src="assets/images/projectmanagement.png" alt='/' />
        
      
      
        
      </div>
    
  
    </div>
    </div>
       </section>
       <section className='lg:py-16 py-8'>
       <h1 className='font-medium lg:my-5 my-3 mx-auto  text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Why Partner with ITLabs</h1>
      <p className='text-center  text-[#16111C] max-w-[960px] mx-auto lg:p-4 p-8'> Our expert consultants and staff deliver customized solutions that prioritize your success. </p>
       <div className='w-full  m-auto px-10 lg:px-28 lg:py-16 py-6 grid lg:grid-cols-2 gap-4'>
  {/* left Side */}
        <div className='flex flex-col h-full justify-center  text-[#16111C]' data-aos="fade-right">
     
        <div>
          <ul>
            <li className='flex items-start my-6'>
            <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

          
</div>
                <div >
                <h5 className='lg:text-2xl text-lg py-4 mx-4 my-2'> Deep Industry Expertise</h5>
            
           </div>
            </li>
            <li className='flex  items-start my-6'>
            <div className='py-4 px-4 items-center my-4 list-icons rounded-lg  text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

          
</div>
                <div >
                <h5 className='lg:text-2xl text-lg py-4 my-2 mx-4'> Focus on Client Succes</h5>
            
          
           </div>
            </li>
            <li className='flex items-start my-6 '>
            <div className='py-4 px-4 items-center my-4 list-icons rounded-lg  text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

          
</div>
                <div >
                <h5 className='lg:text-2xl text-lg py-4 my-2 mx-4'> Agile & Scalable Solutions</h5>
            
           </div>
            </li>
       
          </ul>
        </div>
   
        <div>
         
        </div>
      </div>
      {/* right Side */}
      <div className='grid grid-cols grid-rows-6' data-aos="fade-left">
        <img className='row-span-6 object-cover w-full h-full  '
          src="assets/images/Why_Partner.png" alt='/' />
        
      
      
        
      </div>
    
  
    </div>
       </section>
       <section className='lg:py-16 py-8 bg-[#EBF1F4]'>
       <h1 className='font-medium lg:my-5 my-2 mx-auto  text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Industry Expertise </h1>
      <p className='text-center  text-[#16111C] max-w-[960px] mx-auto lg:p-4 p-8'> Tailored Solutions for Your Success </p>

      <div className='px-10 lg:px-28 leading-relaxed' data-aos='fade-right'>
        <div className='w-full grid m-auto lg:grid-cols-3 gap-4 py-8  text-white'>
         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock py-8 px-4 shadow-md'>
             
             <div className='text-[#16111C]'>
              <h1 className='text-lg lg:text-3xl font-medium text-center py-4'>Banking & Financial Services</h1>
              <p className='py-4 px-4 lg:text-left text-center'>Provides secure and compliant IT solutions that streamline operations, 
              enhance data security, and enable secure online banking experiences.</p>
             </div>
         </div> 
         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock py-8 px-4 shadow-md'>

             <div className='text-[#16111C]'>
              <h1 className='text-lg lg:text-3xl font-medium text-center py-4'>Healthcare</h1>
              <p className='py-4 px-4 lg:text-left text-center'>Delivers IT solutions that facilitate telemedicine, enhance data security for patient records, and streamline hospital management systems.</p>
             </div>
         </div>
       

         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock px-4 py-8 shadow-md'>
          
          <div className='text-[#16111C]'>
           <h1 className='text-lg lg:text-3xl font-medium text-center py-4'>Insurance</h1>
           <p className='py-4 px-4 lg:text-left text-center'>Offers data-driven IT solutions to underwrite risks effectively, automate claims processing, and improve customer engagement through online portals.
</p>
          </div>
      </div>
      <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock  px-4 py-8 shadow-md'>
          
          <div className='text-[#16111C]'>
           <h1 className='text-lg lg:text-3xl  font-medium text-center py-4'>Media & Publishing</h1>
           <p className='py-4 px-4 lg:text-left text-center'>Provides content management systems, facilitates digital transformation, and helps reach new audiences through targeted online marketing strategies.
</p>
          </div>
      </div>
      <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock px-4 py-8 shadow-md'>
          
          <div className='text-[#16111C]'>
           <h1 className='text-lg lg:text-3xl font-medium text-center py-4'>Telecommunications</h1>
           <p className='py-4 px-4 lg:text-left text-center'>Offers IT solutions for network optimization, data center management, and secure cloud-based communication platforms.
</p>
          </div>
      </div>
      <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock px-4 shadow-md'>
          
          <div className='text-[#16111C]'>
           <h1 className='text-lg lg:text-3xl font-medium text-center py-4'>Technology</h1>
           <p className='py-4 px-4 lg:text-left text-center'>Provides IT consulting services to stay ahead of the technological curve, helps with talent acquisition, and offers solutions for managing and optimizing IT infrastructure.
</p>
          </div>
      </div>
       </div>
       </div>
       </section>
       <section className='lg:py-16 py-8'>
       <h1 className='font-medium my-5 mx-auto  text-[#16111C]text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Our Clients </h1>
      <p className='text-center  text-[#16111C] lg:p-4 p-6'> Our growth comes from the unique business model and integration of people, processes and technology.  </p>

      <div className='grid grid-cols-4 gap-4 py-8 px-14'>
         <img src="assets/images/client1.png" alt="client1"/>
         <img src="assets/images/client2.png" alt="client1"/>
         <img src="assets/images/client3.png" alt="client1"/>
         <img src="assets/images/client4.png" alt="client1"/>

       </div>
        </section>
    </div>
  )
}

export default Home