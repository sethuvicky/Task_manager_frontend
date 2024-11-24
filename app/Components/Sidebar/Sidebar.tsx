import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className="  w-[22rem] mt-[5rem] h-[calc(100%-4rem)] fixed right-0 top-0 bg-white shadow-lg flex flex-col border-l border-gray-200 overflow-y-auto">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <Profile />
      </div>

      {/* Radial Chart Section */}
      <div className="mt-6 px-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Performance Overview
        </h2>
        <RadialChart />
      </div>

      {/* Logout Button */}
      <div className="mt-auto px-6 pb-6">
        <button
          className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md font-medium shadow hover:shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          onClick={logoutUser}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
