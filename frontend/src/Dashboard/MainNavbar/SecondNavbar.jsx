import React from "react";


import ELearning from "./Files/ELearningParts/ELearning";
import User from "./Files/UserParts/User";
import DashboardPage from "./Files/DashboardParts/DashboardPage";
import Career from "./Files/CareerParts/Career";

import Avatar from "./Files/Avatar";
import Settings from "./Files/Settings";
import Notifications from "./Files/Notifications";
import Drawer from "./Drawer";

function SecondNavbar() {

  return (
    <div>
      
    <div className="bg-[#5F9BCE] px-4 lg:px-10 text-white py-5 lg:py-0 flex justify-between items-center mx-auto">
      <div>
        <h1 className="text-3xl font-bold font-[Chivo]">Arbaz WebCraft</h1>
      </div>

<div className="flex"> </div>
      <div className=" items-center hidden lg:block">
        <div className="Navbar space-x-4 flex">
          <DashboardPage />
          <Career />
          <ELearning />
          <User />
        </div>
      </div>

      <div className=" space-x-2 items-center lg:hidden">
        <Drawer />
      </div>

    

      <div className="items-center hidden lg:block">
        <div className="flex space-x-2">
          <Notifications />
          <Settings />
          <Avatar />
        </div>
      </div>
    </div>


    <div className="items-center z-0 bg-white block lg:hidden">
        <div className="flex justify-end items-center space-x-2">
          <Notifications />
          <Settings />
          <Avatar />
        </div>
      </div>

    </div>
  );
}

export default SecondNavbar;
