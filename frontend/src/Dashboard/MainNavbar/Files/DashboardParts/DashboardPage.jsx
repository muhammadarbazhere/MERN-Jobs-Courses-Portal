import React, { useState } from 'react';
import { MdDashboardCustomize } from 'react-icons/md';
import { Link } from 'react-router-dom';

function DashboardPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative ">
      <p
        id="dropdownHoverButton"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className=" text-gray-800 cursor-pointer font-medium rounded-lg text-lg px-1 my-0 py-0 text-center inline-flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        type="button"
      >
        <Link to={'/MyWelcome'} className='flex gap-2 items-center'>
         <MdDashboardCustomize size={20} className=''/>
        <h1 className=''>Dashboard</h1>
        </Link>
    
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className={`absolute top-full left-0 z-10 ${isDropdownOpen ? '' : 'hidden'}   divide-y divide-gray-100  bg-white rounded-lg shadow w-60 dark:bg-gray-700`}
      >
        <ul className="py-1 text-md text-gray-700 font-[Chivo] dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="MyAddJobs" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Add Job/Internship</a>
          </li>
          <hr />
          <li>
            <a href="MyAddCourse" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Add New Course</a>
          </li>
          <hr />
          <li>
            <a href="MyJobsList" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Jobs /Internship List</a>
          </li>
          <hr />
          <li>
            <a href="MyCourseList" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Courses List</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;
