import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Admin from "../../../assets/admin-image.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { FaPowerOff } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../App/AuthSlice";
import { useNavigate } from "react-router-dom";

function Avatar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };
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

  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const sendRequest = async () => {
    setLoading(true); // Set loading to true when sending request
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        throw new Error("User not found");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      sendRequest();
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.status === 200) {
        dispatch(authActions.logout());
        console.log("Logout successful");
        navigate("/signin"); // Ensure this path is correct
      } else {
        throw new Error("Unable to logout! Try again");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="relative mt-2 sm:mt-0" ref={dropdownRef}>
      <p
        id="dropdownHoverButton"
        onClick={openDropdown}
        className="text-gray-600 lg:text-white  cursor-pointer font-medium rounded-lg text-lg px-1 py-0 text-center inline-flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <div className="w-full h-full">
          {loading ? (
            <p>Loading...</p>
          ) : user && user.image ? (
            <img
              className="sm:w-10 w-12 sm:h-10 h-12 rounded-full"
              src={`http://localhost:3000/${user.image}`}
              alt="Profile"
            />
          ) : (
            <p className="text-gray-500"> No User Logged in</p>
          )}
        </div>
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        className={`absolute top-full -right-14 sm:left:28    z-10 ${
          isDropdownOpen ? "" : "hidden"
        }  bg-white divide-y divide-gray-100 rounded-lg shadow w-56 lg:w-60 sm:mr-16 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a href="#" className="flex gap-3 px-4 py-6  ">
              <span className=" flex text-md flex-col justify-center font-bold">
                {user ? (
                  <>
                    <h1>
                      {user.firstName} {user.lastName}
                    </h1>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </>
                ) : null}
              </span>
            </a>
          </li>
          <hr />

          <hr />
          <li>
            <div
              onClick={handleLogout}
              className="flex gap-3 cursor-pointer px-4 py-4 hover:bg-[#4272D7]  hover:text-white"
            >
              <span>
                <FaPowerOff size={20} />
              </span>
              <h1>Logout</h1>
            </div>
          </li>
          <hr />
          <li>
            <a
              href="/signup"
              className="flex gap-3 cursor-pointer px-4 py-4 hover:bg-[#4272D7]  hover:text-white"
            >
              <span>
                <IoPersonAddSharp size={20} />
              </span>
              <h1>Add another account</h1>
            </a>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
}

export default Avatar;
