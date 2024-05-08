import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="text-white w-full text-center lg:text-left border-t border-[#2E233B] bg-[#046592]">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7">
     
        <span className="text-white md:mb-0 mb-6 lg:leading-normal font-semibold
       md:w-2/5" >© 2024 ITlabs. All rights reserved.</span>
     
      <div className='flex items-end '>
        
    
     
      <ul className={`md:flex md:items-center md:pb-0 pb-12 w-full md:w-auto md:pl-0 pl-9 m`}>
        <li>    <Link to="/Terms" className='text-white px-4'>Terms</Link></li>
        <li>    <Link to="/Privacy" className='text-white px-4'>Privacy Policy</Link></li>
       </ul>
      </div>
    </div>
   
   
  </footer>
  )
}

export default Footer