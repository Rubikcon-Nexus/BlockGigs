// Import necessary dependencies and assets
import { NavLink, useMatch } from "react-router-dom";
import chart from "../assets/chart.svg";
import cube from "../assets/3dcube.svg";
import logo from "../assets/3dcube.png";
import element from "../assets/element-3.svg";
import folder from "../assets/folder-open.png";
import message from "../assets/message-text.png";
import wallet from "../assets/wallet.png";
import setting from "../assets/setting-2.png";
import logout from "../assets/logout.png";

// Sidebar component for navigation
function Sidebar() {
  // Track active routes for styling
  const profile = useMatch("/profile");
  const job = useMatch("/job");

  return (
    // Main sidebar container
    <div className="flex flex-col h-screen bg-[#0a0f29] w-[240px] py-4">
      {/* Logo section */}
      <div className="px-6 mb-6">
        <NavLink to="/">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="BlockGigs Logo" className="h-8 w-8" />
            <span
              style={{ fontFamily: "'Oleo Script Swash Caps', cursive" }}
              className="text-xl text-white "
            >
              Blockgigs
            </span>
          </div>

          {/* Horizontal divider */}
          <div className="my-4 w-full border-t border-gray-600"></div>
        </NavLink>
      </div>

      {/* Navigation menu items */}
      <div className="flex flex-col space-y-2">
        <NavLink to="/talent/dashboard">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive || profile || job
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={element} alt="" className="h-5 w-5" />
              <span className="text-[15px]">Dashboard</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/talent/discover">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={chart} alt="" className="h-5 w-5" />
              <span className="text-[15px]">Discover</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/talent/gigs">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={cube} alt="" className="h-5 w-5" />
              <span className="text-[15px]">My gigs</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/talent/offer">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={folder} alt="" className="h-5 w-5" />
              <span className="text-[15px]">Offers & Application</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/talent/chat">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={message} alt="" className="h-5 w-5" />
              <span className="text-[15px]">Chat</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/talent/wallet">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={wallet} alt="" className="h-5 w-5" />
              <span className="text-[15px]">Wallet</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/talent/setting">
          {({ isActive }) => (
            <div
              className={`flex items-center space-x-3 px-6 py-3 ${
                isActive
                  ? "bg-[#a7d3ec] text-[#242d44] font-medium rounded-lg"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-lg"
              }`}
            >
              <img src={setting} alt="" className="h-5 w-5" />
              <span className="text-[15px]">Settings</span>
            </div>
          )}
        </NavLink>
      </div>

      <div className="mt-auto px-6">
        {/* Horizontal divider */}
        <div className="my-4 w-full border-t border-gray-600"></div>

        <NavLink
          to=""
          className="flex items-center space-x-3 text-red-400 hover:text-red-300"
        >
          <img src={logout} alt="" className="h-5 w-5" />
          <span className="text-[15px]">Logout</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
