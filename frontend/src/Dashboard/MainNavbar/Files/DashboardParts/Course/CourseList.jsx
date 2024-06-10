import React, { useEffect, useRef } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import CoursesList from '../../../../../Components/CoursesFiles/CoursesList';
import CoursesTable from '../../../../../Components/CoursesFiles/CoursesTable';

function CourseList() {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();

  // }, []); 

  return (

    <div className='flex w-full h-full flex-col pb-6 px-0 sm:px-2 md:px-10 lg:px-24 font-[Chivo] bg-blue-100'>

<div className='flex'>
      {/* <h1 className="w-full h-28 text-gray-500 text-md flex items-center">
        You are here: Home / Courses List
      </h1> */}

      {/* <div className="flex items-center gap-2">
        <input
          ref={inputRef} 
          type="text"
          placeholder="Search courses..."
          className="border border-gray-300 px-6 py-2 rounded-md focus:outline-none focus:border-blue-500" 
          />
             <MdOutlineSearch size={20} className="text-gray-500 " /> 
      </div> */}
      </div>
    

<CoursesTable/>
    </div>

  );
}

export default CourseList;
