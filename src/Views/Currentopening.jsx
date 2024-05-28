import React, { useState, useEffect } from 'react';
import CustomAccordion from '../components/Accordian';

const Currentopening = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/xoix6vrnvu6gg');
        const jsonData = await response.json();
        console.log(jsonData);
        setSheetData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
  };

  return (
    <div className='w-full leading-loose'>
    <img className="w-full h-[550px] object-cover left-0" src="assets/header/career_header.png" alt='Homeheroimage'/>
 <div className='bg-black/90 absolute left-0 w-full'/>

<div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
<div className=' max-w-[1140px] mx-auto p-4'>
      
      <h1 className='font-medium my-5 mx-auto text-white text-4xl lg:text-5xl py-2 text-center lg:leading-normal'>  Current Openings
     </h1>
      <p> Collaborate with passionate minds and make a real impact on the world through technology.</p>
 <div className='text-center'>

</div>
</div>
  </div>

   
  <section className='lg:py-16 py-8 text-[#16111C] lg:mx-16 mx-1'>
  <div>
        <p className='my-2.5 text-lg py-16 px-10  md:leading-relaxed lg:p-4 p-12 lg:mx-28 mx-0'>
        ITLabs is searching for talented individuals  to join our dynamic team. We offer the opportunity to collaborate with industry leaders, work on cutting-edge projects, and propel your IT career forward.
        </p>
      </div>
  <div className='text-[#16111C] lg:mx-28 mx-0'>


{sheetData.map((item) => (
  <CustomAccordion
    title={item.title}
    date={item.date}
    jobcode={item.job_code} // Make sure to match with your data structure
    location={item.location}
    description={item.description ? item.description.split('.').slice(0, -1) : []} // Check if description exists before splitting
    skills={item.skills ? item.skills.split(',').map((skill) => ({ label: skill, value: 'Value' })) : []} // Check if skills exists before splitting
    key={item.id}
    isOpen={openAccordionId === item.id}
    toggleAccordion={() => handleAccordionClick(item.id)}
  />
))}
      </div>
  </section>
  
  </div>
  )
}

export default Currentopening