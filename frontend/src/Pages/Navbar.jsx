import React, { useState } from "react";
import { NavLink, useLocation} from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/logo.jpg";
import Avatar from "../Dashboard/MainNavbar/Files/Avatar";
import { useSelector } from "react-redux";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const location = useLocation();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);



  return (
    <nav className="bg-blue-100 sticky top-0 z-50 text-[#374151] border-gray-200 dark:bg-gray-900 ">
      <div className="w-full xl:px-24 flex flex-wrap flex-row md:flex-row md:items-center items-start justify-between text-[#374151] mx-0 lg:mx-0 px-2">
        <div className="flex items-center ">
          <NavLink
            to="/"
            className="flex   items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16 w-16" alt="Arbaz WebCraft" />
          </NavLink>
          {!isLoggedIn && (
           <h1 className="font-[Chivo] text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-3xl sm:text-2xl xl:text-3xl
           ">
           Arbaz WebCraft
         </h1>
        )}
        </div>

        {isLoggedIn && (
          <div className="hidden md:hidden lg:flex lg:items-center lg:space-x-3 lg:rtl:space-x-reverse font-[Chivo]">
            <NavLink onClick={closeDrawer} to="/" className="hover:underline">
              HOME
            </NavLink>
            <span className="px-2"></span>
            <NavLink
              onClick={closeDrawer}
              to="remoteJobs"
              className="hover:underline"
            >
              REMOTE JOBS
            </NavLink>
            <span className="px-2"></span>
            <NavLink
              onClick={closeDrawer}
              to="outSourcing"
              className="hover:underline"
            >
              BUSINESS OUTSOURCING
            </NavLink>
            <span className="px-2"></span>
            <NavLink
              onClick={closeDrawer}
              to="learning"
              className="hover:underline"
            >
              E-LEARNING
            </NavLink>
            <span className="px-2"></span>
            <NavLink
              onClick={closeDrawer}
              to="about"
              className="hover:underline"
            >
              ABOUT US
            </NavLink>
            <span className="px-2"></span>
          </div>
        )}
        <div className="flex flex-row sm:flex-row md:flex-row items-center md:order-3 space-x-3 rtl:space-x-reverse">
          {isLoggedIn ? (
            <>

              <Avatar />

            </>
          ) : (
            <>
            {location.pathname === '/signin' && (
              <NavLink
                to="/signup"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 sm:mt-2  text-white px-4  py-2 rounded-lg hover:bg-blue-700"
              >
                Register
              </NavLink>
            )}
            {location.pathname === '/signup' && (
              <NavLink
                to="/signin"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 sm:mt-2 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Signin
              </NavLink>
            )}
          </>
          )}
          {isLoggedIn && (
            <button
              type="button"
              onClick={toggleDrawer}
              className="lg:hidden text-[#374151] m-2 p-1 rounded-md border-2 border-gray-400"
            >
              <TiThMenu size={30} />
            </button>
          )}
        </div>
      </div>
      {isLoggedIn && (
        <div
          className={`${
            isDrawerOpen ? "block" : "hidden"
          } block lg:hidden font-[Chivo] transition-all duration-1000 ease-in-out `}
        >
          <div className="px-1">
            <NavLink
              to="/"
              className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white dark:text-gray-200 hover:bg-black"
              onClick={closeDrawer}
            >
              HOME
            </NavLink>
            <NavLink
              to="remoteJobs"
              className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-black dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={closeDrawer}
            >
              REMOTE JOBS
            </NavLink>
            <NavLink
              to="outSourcing"
              className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-black dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
              onClick={closeDrawer}
            >
              BUSINESS OUTSOURCING
            </NavLink>
            <NavLink
              to="learning"
              className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white  dark:hover:bg-gray-600 dark:text-gray-200 hover:bg-black"
              onClick={closeDrawer}
            >
              E-LEARNING
            </NavLink>
            <NavLink
              to="about"
              className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white  dark:hover:bg-gray-600 dark:text-gray-200 hover:bg-black"
              onClick={closeDrawer}
            >
              ABOUT US
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
