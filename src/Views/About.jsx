import React from 'react'

const About = () => {
  return (
    <div className='w-full leading-loose'>
         <img className="w-full h-[550px] object-cover left-0" src="assets/header/about_header.png" alt='Homeheroimage'/>
      <div className='bg-black/90 absolute left-0 w-full'/>

     <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
      <div className='max-w-[1140px] mx-auto  p-4'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-4xl lg:text-5xl py-2 text-center lg:leading-normal'>  About Us
      </h1>
      <p className='text-lg py-4 mx-4 my-2 text-center' >Empowering Businesses with Cutting-Edge IT Solutions and Staffing</p>
      <div className='text-center'>
{/* <button className= 'text-center text-black px-6 py-3 rounded-lg my-5 bg-lime-500 font-medium'>Explore Our Services</button> */}
</div>
     </div>
       </div>
       <section className='py-8 bg-gradient-to-r from-[#1D1422] to-[#2E233B]'>
        <h2 className='text-white text-lg lg:text-3xl lg:py-16 py-8 lg:px-20 px-8 lg:mx-12 mx-4 leading-loose lg:leading-[3rem] lg:text-left text-center'>
        Our vision is to be the world-class technology partner that empowers 
        businesses to achieve sustainable success through the power of information technology.
        </h2>

       </section>
       <section className='lg:py-16 py-8 bg-[#EBF1F4]'>
       <h1 className='font-medium my-5 mx-auto text-[#16111C]text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Mission</h1>
      <p className='text-center text-[#16111C]max-w-[960px] mx-auto lg:p-4 p-8'> ITLabs is dedicated to creating a thriving ecosystem where clients, employees, and stakeholders achieve their full potential. <br/>We achieve this by: </p>
       <div className='w-full m-auto px-4 lg:px-28 lg:py-16 py-6 grid lg:grid-cols-2 gap-4'>
              {/* left Side */}
              <div className='flex flex-col h-full justify-center text-[#16111C]' data-aos="fade-left">
     
     <div className='lg:mx-8 mx-2'>
       <ul>
         <li className='flex items-start my-2'>
         <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

       
</div>
             <div >
             <p className='text-lg py-2 mx-4 my-2'> Delivering world-class IT services and products that meet international quality standards, 
             on time, and within budget.</p>
         
        </div>
         </li>
         <li className='flex  items-start my-2'>
         <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

       
</div>
             <div >
             <p className='text-lg py-2 mx-4 my-2'> Integrating people, processes, and technology to create a unique and efficient business model.</p>
         
       
        </div>
         </li>
         <li className='flex items-start my-2'>
         <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

       
</div>
             <div >
             <p className='text-lg py-2 mx-4 my-2'> Developing cost-effective, high-quality products and custom applications built on strict timelines using industry best practices.</p>
         
        </div>
         </li>
         <li className='flex items-start my-2'>
         <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

       
</div>
             <div >
             <p className='text-lg py-2 mx-4 my-2'> Harnessing the power of information technology to drive economic, social, and spiritual fulfillment for all stakeholders.</p>
         
        </div>
         </li>
       </ul>
     </div>

     <div>
      
     </div>
   </div>
     
  {/* right Side */}
    

  <div className='grid grid-cols grid-rows-6 ' data-aos="fade-right">
        <img className='row-span-6 object-cover w-full h-full rounded-3xl '
          src="assets/images/mission.png" alt='/' />
        
      
      
        
      </div>
  
    </div>
       </section>
       <section className='lg:py-16 py-8'>
       <h1 className='font-medium lg:my-5 my-2 mx-auto text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'> What We Do</h1>
      <p className='text-center text-[#16111C] max-w-[960px] mx-auto lg:p-4 p-8'> At ITLABs we provide a comprehensive suite of IT staffing and consulting services <br/>to help businesses achieve their goals. </p>

      <div className='px-10 lg:px-28 leading-relaxed' data-aos='fade-right'>
        <div className='w-full grid m-auto lg:grid-cols-3 gap-4 py-8  text-[#16111C]'>
         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock shadow-md'>
         <img src="assets/images/services/itconsultig.png" className='rounded-t-2xl' alt="healthcare"/>
             <div className='py-8 px-4 '>
              <h1 className='text-2xl font-medium text-center'>IT Consulting</h1>
            
             </div>
         </div> 
         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock shadow-md'>
         <img src="assets/images/services/software_product.png" className='rounded-t-2xl' alt="healthcare"/>
             <div className='py-8 px-4'>
              <h1 className='text-2xl font-medium text-center'> Software Product Engineering </h1>
            
             </div>
         </div> 
         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock shadow-md'>
         <img src="assets/images/services/cloud_infrastrure.png" className='rounded-t-2xl' alt="healthcare"/>
             <div className='py-8 px-4'>
              <h1 className='text-2xl font-medium text-center'>Cloud & Infrastructure</h1>
            
             </div>
         </div> 

         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock shadow-md'>
         <img src="assets/images/services/intellegent_automation.png" alt="healthcare" className='rounded-t-2xl'/>
             <div className='py-8 px-4'>
              <h1 className='text-2xl font-medium text-center'>Intelligent Automation</h1>
            
             </div>
         </div> 
   
         <div className='flex flex-col h-full justify-center border rounded-2xl Cardblock shadow-md'>
         <img src="assets/images/services/enterprise_security.png" alt="healthcare" className='rounded-t-2xl'/>
             <div className='py-8 px-4'>
              <h1 className='text-2xl font-medium text-center'>Enterprise IT Security</h1>
            
             </div>
         </div> 
      
       </div>
       </div>
       </section>
       <section className='lg:py-16 py-8 bg-[#EBF1F4]'>
       <h1 className='font-medium lg:my-5 my-3 mx-auto text-[#16111C] text-2xl lg:text-5xl pt-2 text-center lg:leading-normal'>Why Choose Us</h1>
      <p className='text-center text-[#16111C] max-w-[960px] mx-auto lg:p-4 p-8'> We work closely with you to understand your needs, assemble the perfect development team, and tailor our services to your specific project requirements. </p>
       <div className='w-full m-auto px-10 lg:px-28 lg:py-16 py-8 grid lg:grid-cols-2 gap-4'>
  {/* left Side */}
  <div className='grid grid-cols grid-rows-6 border-[#EBF1F4] border-2 rounded-3xl' data-aos="fade-left">
        <img className='row-span-6 object-cover w-full h-full rounded-3xl '
          src="assets/images/why-sets-apart.png" alt='/' />
      
        
      </div>
            {/* right Side */}
        <div className='flex flex-col h-full justify-center text-[#16111C]' data-aos="fade-right">
     
        <div className='lg:mx-8 mx-2'>
          <ul>
            <li className='flex items-start lg:my-6 my-2 text-[#16111C]'>
            <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

          
</div>
                <div className='mx-6 text-[#16111C]'>
                <h5 className='text-lg lg:text-2xl py-2 my-2'> Global  Expertise , Local Delivery</h5>
                <p className=''>We leverage our international presence and expertise to deliver cost-effective IT solutions tailored to your specific needs.</p>
           </div>
            </li>
            <li className='flex  items-start my-6'>
            <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

          
</div>
                <div className='mx-6'>
                <h5 className='text-lg lg:text-2xl  py-2 my-2 '> Proven Track Record of Success</h5>
                <p className=''>We have a strong reputation for delivering innovative solutions, helping numerous clients achieve success</p>
          
           </div>
            </li>
            <li className='flex items-start my-6 '>
            <div className='py-4 px-4 items-center my-4 list-icons rounded-lg text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

          
</div>
                <div className='mx-6'>
                <h5 className='text-lg lg:text-2xl  py-2 my-2'> Passionate and Experienced Team</h5>
                <p className=''>Our team of highly skilled professionals is dedicated to providing exceptional service and exceeding your expectations.</p>
            
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

export default About