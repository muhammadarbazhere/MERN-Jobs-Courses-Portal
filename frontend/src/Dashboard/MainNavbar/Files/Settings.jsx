import React, { useEffect, useRef, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";

function Settings() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <p
        id="dropdownHoverButton"
        onClick={openDropdown}
        className="text-[#5F9BCE] lg:text-white  cursor-pointer font-medium rounded-lg gap-2  font-[Chivo] text-md px-1 py-5 text-center inline-flex items-center dark:bg-blue-600 hover:rotate-90 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
         <MdSettings size={30} />
    
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        // onClick={openDropdown}
        // onMouseLeave={closeDropdown}
        className={`absolute top-full -left-20 z-10 ${isDropdownOpen ? '' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700`}
      >
        <ul className="py-4 text-md font-[Chivo] text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#" className="flex gap-3 px-4 py-3 hover:bg-[#5F9BCE] hover:text-white">
              <span>
              <MdAccountCircle size={20}/>
              </span>
              <h1>Account</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 px-4 py-3 hover:bg-[#5F9BCE] hover:text-white">
              <span><IoSettingsOutline size={20}/></span>
              <h1>Setting</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 px-4 py-3 pb-5 hover:bg-[#5F9BCE] hover:text-white">
              <span><CiDollar size={20}/></span>
              <h1>Billing</h1>
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="flex gap-3 px-4 pt-5 py-3 hover:bg-[#5F9BCE] hover:text-white">
            <span><FaGlobeAfrica size={20}/></span>
              <h1>Language</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 px-4 py-3 hover:bg-[#5F9BCE] hover:text-white">
            <span><FaLocationDot size={20}/></span>
              <h1>Location</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 px-4 py-3 hover:bg-[#5F9BCE] hover:text-white">
            <span><MdEmail size={20}/></span>
              <h1>Email</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 px-4 py-3 hover:bg-[#5F9BCE] hover:text-white">
            <span>< MdNotificationsActive size={20}/></span>
              <h1>Notifications</h1>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Settings