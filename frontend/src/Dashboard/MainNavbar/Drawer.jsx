import React, { useState } from 'react';
import { FiAward, FiRotateCcw } from 'react-icons/fi';
import { ImCancelCircle } from "react-icons/im";
import { MdComputer, MdDashboardCustomize, MdPerson } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      {showDrawer ? (
        <div className=" ">
          <div className="absolute z-50 top-20 left-0 bg-blue-50 w-full pb-1 flex flex-col space-y-8 text-gray-700 transition-all duration-1000 ease-in-out">
            <div className="px-1">
              <NavLink to={'/MySecondHome'} onClick={closeDrawer} className="flex gap-2 items-center px-6 py-2 text-sm">
                <MdDashboardCustomize size={20} className="" />
                <h1>Dashboard</h1>
              </NavLink><hr />
              <NavLink to={'/MyAddJobs'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Add Job/Internship</h1>
              </NavLink><hr />
              <NavLink to={'/MyAddCourse'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Add New Course</h1>
              </NavLink><hr />
              <NavLink to={'/MyJobsList'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Jobs /Internship List</h1>
              </NavLink><hr />
              <NavLink to={'/MyCourseList'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Courses List</h1>
              </NavLink><hr />
              <NavLink onClick={closeDrawer} className="flex gap-2 items-center px-6 py-2 text-sm">
                <span><FiAward size={20} /></span> 
                <h1>Career</h1>
              </NavLink><hr />
              <NavLink to={'#'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Job</h1>
              </NavLink><hr />
              <NavLink to={'#'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Internship</h1>
              </NavLink><hr />
              <NavLink onClick={closeDrawer} className="flex gap-2 items-center px-6 py-2 text-sm">
                <MdComputer size={20} />
                <h1>E-Learning</h1>
              </NavLink><hr />
              <NavLink to={'/MyFrontend'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Front-End Development</h1>
              </NavLink><hr />
              <NavLink to={'/MyBackend'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Back-End Development</h1>
              </NavLink><hr />
              <NavLink to={'/MyGraphic'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Graphic Designing</h1>
              </NavLink><hr />
              <NavLink to={'/MySocial'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Social Media Marketing</h1>
              </NavLink><hr />
              <NavLink to={'/MySeo'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Seo</h1>
              </NavLink><hr />
              <NavLink to={'/MyHR'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Human Resource</h1>
              </NavLink><hr />
              <NavLink to={'#'} onClick={closeDrawer} className="flex gap-2 items-center px-6 py-2 text-sm ">
                <MdPerson size={20} />
                <h1>User</h1>
              </NavLink><hr />
              <NavLink to={'#'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Login</h1>
              </NavLink><hr />
              <NavLink to={'#'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Register</h1>
              </NavLink><hr />
              <NavLink to={'#'} onClick={closeDrawer} className="flex items-center px-2 py-2 text-sm">
                <h1>Forget Password</h1>
              </NavLink><hr />
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex items-center lg:hidden font-[Chivo] transition-all duration-1000 ease-in-out">
        {showDrawer ? (
          <ImCancelCircle size={30} className="cursor-pointer  text-2xl" onClick={closeDrawer} />
        ) : (
          <TiThMenu size={30} className="cursor-pointer text-2xl" onClick={toggleDrawer} />
        )}
      </div>
    </div>
  );
}

export default Drawer;
