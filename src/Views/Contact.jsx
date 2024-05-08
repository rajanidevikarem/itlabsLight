import React from 'react'

const Contact = () => {
  return (
    <div className='w-full leading-loose'>
        <img className="w-full h-[550px] object-cover left-0" src="assets/header/contact_header.png" alt='Homeheroimage'/>
      <div className='bg-black/90 absolute left-0 w-full'/>

     <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
     <div className='max-w-[1140px] mx-auto p-4'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-4xl lg:text-5xl py-2 text-center lg:leading-normal'>  Contact Us

     </h1>
      <p>  We're ready to listen to your needs and tailor IT solutions to empower your business.</p>
      <div className='text-center'>
{/* <button className= 'text-center text-black px-6 py-3 rounded-lg my-5 bg-lime-500 font-medium'>Explore Our Services</button> */}
</div>
     </div>
       </div>
       <section className='py-16'>
     
      <div className='px-10 lg:px-28 leading-relaxed' data-aos='fade-right'>
        <div className='w-full grid m-auto lg:grid-cols-3 gap-4 py-8'>
         <div className='flex flex-col h-full justify-center  py-8 px-4'>
             
             <div className=''>
              <h1 className='text-2xl font-medium text-center py-4'>Reach Us </h1>
              
             </div>
         </div> 
         <div className='flex flex-col h-full justify-center border rounded-2xl py-8 px-4 shadow-md'>

             <div className='py-6 px-2'>
              <p>12410 Milestone Center Dr</p>
<p>Suite # 600</p>
<p>Germantown, MD   20876</p>
              
             </div>
         </div>
       

         <div className='flex flex-col h-full justify-center border rounded-2xl  px-4 py-8 shadow-md'>
          
          <div className='py-6 px-2'>
         
          <p>12850 Middlebrook Rd</p>
<p>Suite # 465</p>
<p>Germantown, MD   20874</p>
          </div>
      </div>
 
 
 
       </div>
       </div>
       </section>
    </div>
  )
}

export default Contact