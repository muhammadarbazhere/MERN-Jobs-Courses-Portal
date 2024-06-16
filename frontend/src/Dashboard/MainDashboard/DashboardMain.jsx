import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Notifications as NotificationsIcon } from "@material-ui/icons";
import { SiPowerpages, SiGooglemaps } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink, useNavigate } from "react-router-dom";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PolicyIcon from "@mui/icons-material/Policy";
import OrderSummary from "./Files/OrderSummary";

import Report from "./Files/Report";
import TaskProgress from "./Files/TaskProgress";

import UserData from "./Files/UserData";
import ProgressCards from "./Files/ProgressCards";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../App/AuthSlice";

const Dashboard = () => {
  //
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

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
  //---------------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      console.error(err.message); // Log the actual error message
    }
  };

  //   --------------------------------------------------
  return (
    <div className="flex bg-blue-100 h-dvh">
      {/* AppBar Component */}
      <AppBar position="fixed" className="bg-black z-10" style={{ zIndex: 12 }}>
        <Toolbar className="bg-blue-500">
          <div style={{ flexGrow: 3 }} />

          <IconButton color="inherit" edge="end">
            <SearchIcon />
          </IconButton>

          <IconButton color="inherit" aria-label="notifications" edge="end">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Aside Component */}
      <aside className="fixed z-30 top-0 left-0 w-40 sm:w-72 h-full bg-green-300 overflow-y-auto ">
        <div className="bg-blue-600 h-16 flex items-center justify-center">
          <h2 className="text-sm sm:text-xl font-bold text-white">
            COOL ADMIN
          </h2>
        </div>

        <nav className="mt-6">
          <div className="w-full flex flex-col items-center">
            {/*  */}
            {loading ? (
              <p>Loading...</p>
            ) : user && user.image ? (
              <img
                className="sm:w-28 w-10 h-10 sm:h-28 rounded-full"
                src={`http://localhost:3000/${user.image}`}
                alt="Profile"
              />
            ) : (
              <p className="text-gray-500"> No User Logged in</p>
            )}

            {loading ? (
              <p>Loading...</p>
            ) : user ? (
              <h1 className="mt-2 text-base items-center text-center font-bold break-words">
                {user.firstName} {user.lastName}
              </h1>
            ) : (
              <p className="text-gray-500"> No User Found </p>
            )}

            <button
              onClick={handleLogout}
              className="text-xs mb-3 cursor-pointer"
            >
              Sign out
            </button>
          </div>
          <hr className="my-2" />

          <NavLink
            to="/MyAdmin"
            className="flex items-center sm:py-2 py-1 sm:px-6 px-2 text-base text-black hover:bg-gray-300"
            activeClassName="bg-gray-800"
          >
            <AdminPanelSettingsIcon className="text-black" size={30} />
            <span className="px-2">Admin</span>
          </NavLink>
          <hr className="my-2" />

          <NavLink
            to="#"
            className="flex items-center sm:py-2 py-1 sm:px-6 px-2 text-base text-black hover:bg-gray-300"
            activeClassName="bg-gray-800"
          >
            <FaUserCircle size={30} className="text-black" />
            <span className="px-2">Users</span>
          </NavLink>
          <hr className="my-2" />

          <NavLink
            to="#"
            className="flex items-center sm:py-2 py-1 sm:px-6 px-2 text-base text-black hover:bg-gray-300"
            activeClassName="bg-gray-800"
          >
            <SiPowerpages className="text-black" size={30} />
            <span className="px-2">Pages</span>
          </NavLink>
          <hr className="my-2" />

          <NavLink
            to="#"
            className="flex items-center sm:py-2 py-1 sm:px-6 px-2 text-base text-black hover:bg-gray-300"
            activeClassName="bg-gray-800"
          >
            <SiGooglemaps className="text-black" size={30} />
            <span className="px-2">Maps</span>
          </NavLink>
          <hr className="my-2" />
          <NavLink
            to="#"
            className="flex items-center sm:py-2 py-1 sm:px-6 px-2 text-base text-black hover:bg-gray-300"
            activeClassName="bg-gray-800"
          >
            <PolicyIcon className="text-black" size={30} />
            <span className="px-2">Policy</span>
          </NavLink>
          <hr className="my-2" />
        </nav>
      </aside>

      <div className="flex-grow ml-16  mt-16 p-0 bg-blue-100">
        <OrderSummary />
        <div className="pr-2">
          <ProgressCards />
        </div>
        <div className="py-4 sm:px-6 justify-end sm:justify-evenly flex  gap-2  sm:gap-4 ml-12 sm:ml-56 ">
          <Report />
          <TaskProgress />
        </div>
        <UserData />
      </div>
    </div>
  );
};

export default Dashboard;
