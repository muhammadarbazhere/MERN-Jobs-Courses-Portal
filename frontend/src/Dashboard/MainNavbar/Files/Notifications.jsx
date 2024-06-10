import React, { useState, useEffect, useRef } from "react";
import { MdNotifications } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaBan } from "react-icons/fa";

function Notifications() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <p
        id="dropdownHoverButton"
        onClick={toggleDropdown}
        className="text-[#5F9BCE] lg:text-white cursor-pointer font-medium rounded-lg gap-2 font-[Chivo] text-md px-1 py-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <MdNotifications size={30} />
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        className={`absolute top-full -left-16 z-10 ${
          isDropdownOpen ? "" : "hidden"
        }  bg-white divide-y px-1 divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-md font-[Chivo] text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              You have 3 notifications
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              className="flex gap-2 items-center px-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="bg-green-500 rounded-full p-2 w-12 h-12 items-center flex justify-center">
                <MdEmail className="text-white w-6 h-6 " size={30} />
              </div>

              <div>
                <h1 className="">You got a email notification</h1>
                <span className="text-xs">April 12, 2023 06:50</span>
              </div>
            </a>
          </li>
          <hr />

          <li>
            <a
              href="#"
              className="flex gap-2 items-center px-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="bg-red-500 rounded-full p-2 w-12 h-12 items-center flex justify-center">
                <FaBan className="text-white w-6 h-6 " size={30} />
              </div>

              <div>
                <h1 className="">Your account has been blocked</h1>
                <span className="text-xs">April 12, 2023 06:50</span>
              </div>
            </a>
          </li>
          <hr />

          <li>
            <a
              href="#"
              className="flex gap-2 items-center px-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="bg-yellow-500 rounded-full p-2 w-12 h-12 items-center flex justify-center">
                <FaFileAlt className="text-white w-6 h-6 " size={30} />
              </div>

              <div>
                <h1 className="">You got a new file</h1>
                <span className="text-xs">April 12, 2023 06:50</span>
              </div>
            </a>
          </li>
          <hr />

          <li>
            <a
              href="#"
              className="flex justify-center text-blue-400 items-center px-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <h1 className="">All Notifications</h1>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
