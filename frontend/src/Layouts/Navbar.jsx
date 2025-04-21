import React from "react";
import send from "../../src/assets/send.png";
import {
  IoIosSearch,
  IoIosNotificationsOutline,
  IoIosArrowDown,
  IoGridOutline,
  IoCompassOutline,
  IoCubeOutline,
  IoFolderOpenOutline,
  IoChatbubbleOutline,
  IoWalletOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import boy from "../../src/assets/boy.png";
import logo from "../../src/assets/3dcube.png";

const Navbar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#0A0F29] text-white py-6 px-4 flex flex-col">
        {/* Logo */}
        <div className="mb-12 flex items-center gap-2">
          <img src={logo} alt="Blockgigs Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Blockgigs</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 bg-[#a7d3ec] text-[#242d44] rounded-2xl py-3 px-4"
          >
            <IoGridOutline className="w-5 h-5" />
            <span className="text-sm">Dashboard</span>
          </Link>

          <Link
            to="/discover"
            className="flex items-center gap-3 hover:text-white py-3 px-4"
          >
            <IoCompassOutline className="w-5 h-5" />
            <span className="text-sm">Discover</span>
          </Link>

          <Link
            to="/my-gigs"
            className="flex items-center gap-3 hover:text-white py-3 px-4"
          >
            <IoCubeOutline className="w-5 h-5" />
            <span className="text-sm">My gigs</span>
          </Link>

          <Link
            to="/offers"
            className="flex items-center gap-3 hover:text-white py-3 px-4"
          >
            <IoFolderOpenOutline className="w-5 h-5" />
            <span className="text-sm">Offer & Application</span>
          </Link>

          <Link
            to="/chat"
            className="flex items-center gap-3 hover:text-white py-3 px-4"
          >
            <IoChatbubbleOutline className="w-5 h-5" />
            <span className="text-sm">Chat</span>
          </Link>

          <Link
            to="/wallet"
            className="flex items-center gap-3 hover:text-white py-3 px-4"
          >
            <IoWalletOutline className="w-5 h-5" />
            <span className="text-sm">Wallet</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 hover:text-white py-3 px-4"
          >
            <IoSettingsOutline className="w-5 h-5" />
            <span className="text-sm">Setting</span>
          </Link>
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-[#2D2D2D] my-6"></div>

        {/* Logout Button */}
        <Link
          to="/logout"
          className="flex items-center gap-3 text-red-500 py-3 px-4"
        >
          <IoLogOutOutline className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <div className="w-full flex justify-between items-center px-6 py-4 bg-white">
          {/* Welcome Text */}
          <div>
            <h2 className="font-montserrat font-medium text-lg text-[#1f1e1e]">
              Welcome back, Let's <span className="text-[#65c66f]">Work</span>
            </h2>
          </div>

          {/* Right Side Elements */}
          <div className="flex items-center gap-6">
            {/* Search Input */}
            <div className="relative w-[400px]">
              <IoIosSearch className="absolute left-4 top-3 w-5 h-5 text-gray-500" />
              <input
                className="w-full h-10 bg-white rounded-xl pl-12 pr-4 border border-[#E8E8E8] font-montserrat focus:outline-none"
                type="text"
                placeholder="Search for jobs, talents, or clients..."
              />
            </div>

            {/* Post a New Gig Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              <img src={send} alt="send icon" className="w-5 h-5" />
              <span>Post a New Gig</span>
            </button>

            {/* Notifications */}
            <div className="w-12 h-12 flex items-center justify-center border border-[#e7eef1] rounded-2xl bg-white">
              <IoIosNotificationsOutline className="text-2xl text-gray-700 cursor-pointer" />
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-2 cursor-pointer w-[82px] h-[52px] rounded-[50px] bg-[#BED4DF4D] px-2 py-1">
              <img src={boy} alt="Profile" className="w-10 h-10 rounded-full" />
              <IoIosArrowDown className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
