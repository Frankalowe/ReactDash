import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className=" basis-[15%] border-r-2 h-screen ">
      <div className="h-[50px] text-purple-600 flex items-center justify-center text-[20px] font-bold border-b-2">
        ReactDash
      </div>
      <div className="p-5 w-full">
        <ul className="p-1">
          <p className="text-sm text-gray-500 mb-1">Main</p>

          <li className="flex gap-3 mb-2 hover:bg-pink-100 rounded-lg  ">
            <DashboardIcon className="text-purple-500" />
            Dashboard
          </li>

          <p className="text-sm text-gray-500 mb-1">Lists</p>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg  ">
            <GroupIcon className="text-purple-500" />
            Users
          </li>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg  ">
            <InventoryIcon className="text-purple-500" />
            Products
          </li>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg ">
            <CreditCardIcon className="text-purple-500" />
            Orders
          </li>
          <p className="text-sm text-gray-500 mb-1">Useful Links</p>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg  ">
            <QueryStatsIcon className="text-purple-500" />
            Stats
          </li>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg ">
            <CircleNotificationsIcon className="text-purple-500" />
            Notifications
          </li>
          <p className="text-sm text-gray-500 mb-1">Services</p>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg ">
            <SettingsSystemDaydreamIcon className="text-purple-500" />
            System Health
          </li>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg ">
            {" "}
            <PsychologyIcon className="text-purple-500" />
            Logs
          </li>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg ">
            <SettingsApplicationsIcon className="text-purple-500" />
            Settings
          </li>
          <p className="text-sm text-gray-500 mb-1">User</p>
          <li className="flex gap-3 mb-2 hover:bg-pink-100  rounded-lg  ">
            <AccountBoxIcon className="text-purple-500" />
            Profile
          </li>
          <li className="flex gap-3 mb-2 hover:bg-pink-100 rounded-lg ">
            <ExitToAppIcon className="text-purple-500" />
            Logout
          </li>
        </ul>
      </div>
      <div className="flex">
        <p className="flex justify-start items-center px-5 font-semibold">
          Select Mode :
        </p>
        <div className="flex items-center m-2 justify-center px-5 gap-2">
          <div className="w-8 h-8 rounded-lg border cursor-pointer bg-white"></div>
          <div className="w-8 h-8 rounded-lg border cursor-pointer bg-[#333]"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
