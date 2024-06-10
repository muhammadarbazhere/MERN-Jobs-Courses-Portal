import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import products from './Products';


const Course = () => {

  const handleEnrollClick = () => {

    setTimeout(() => {
      window.location.href = '/enroll'; 
    },); 
  };


  return (
    <div   id='courses' className='font-Comfortaa w-full flex pt-8 md:pt-12 px-4 md:px-0 flex-col items-center'>

    
        <div className='w-full space-y-1  mb-8 flex flex-col items-center md:px-2'>
        <p className='font-[Chivo] text-md sm:text-lg text-[#272727]'>
          LEARN
        </p>
          <h1 className='font-[Comfortaa] mb-2 font-bold text-3xl sm:text-3xl text-[#272727]'>Our Featured Courses</h1> 
        
        </div>

      <div className="flex px-0 md:px-10 lg:px-32 flex-wrap justify-around w-full mb-10">
        {products.map((item) => (
          <div key={item.id} className="p-0 mb-8 w-full sm:w-80 bg-white rounded-lg">
            <img src={item.image} alt={item.title} className="h-auto rounded-t-lg" />
            <div className="p-2 ">
              <div className='flex flex-row mb-2 '>
                <div className='mr-2'>
                  <img src={item.img} alt={item.name} className="h-12 w-12 rounded-full" />
                </div>
                <div className=''>
                  <h1 className='font-[Chivo] text-[#272727] font-bold  w-full'>{item.name}</h1>
                  <p className='text-[#394249] font-[Chivo]  w-full'>{item.work}</p>
                </div>
              </div>
              <div>
                <div className='flex flex-row items-center'>
                  <h2 className="text-xl mb-2 text-[#272727] font-[Chivo] font-bold">{item.title}</h2>
                  <GoArrowUpRight size={20}/>
                </div>
                <p className="text-base font-[Chivo] text-[#394249] mb-4">{item.description}</p>
                <button onClick={handleEnrollClick} className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 flex  items-center rounded-md text-white font-[Chivo] mb-2'>
                  Enroll Now  
                  <span className='ml-4'><FaArrowRight/></span> 
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {showForm && <Form handleClose={handleCloseForm} />} Render the form when showForm is true */}
    </div>
  );
};

export default Course;
