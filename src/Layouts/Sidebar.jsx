import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

// Import Images
import logo from '../../src/assets/3dcube.png';
import dashboard from "../../src/assets/dashboard.png";
import discover from "../../src/assets/discover.png";
import gigs from "../../src/assets/gigs.png";
import offers from "../../src/assets/offers.png";
import wallet from "../../src/assets/wallet.png";
import chat from "../../src/assets/chat.png";
import settings from "../../src/assets/settings.png";
import logout from "../../src/assets/logout.png";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Sidebar menu items
    const menuItems = [
        { name: "Dashboard", icon: dashboard, path: "/dashboard" },
        { name: "Discover", icon: discover, path: "/discover" },
        { name: "Gigs", icon: gigs, path: "/gigs" },
        { name: "Offers", icon: offers, path: "/offers" },
        { name: "Wallet", icon: wallet, path: "/wallet" },
        { name: "Chat", icon: chat, path: "/chat" },
        { name: "Settings", icon: settings, path: "/settings" },
    ];

    return (
        <div className="flex">
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IoMdClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6 mt-[-63rem]" />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:relative top-0 left-0 bg-[#0a0f29] text-white w-[312px] h-full p-5 flex flex-col justify-between overflow-hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                <div>
                    {/* Logo */}
                    <div className="flex items-center space-x-3 mb-6">
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                        <h1 className="font-oleo font-normal text-[32px] leading-[44.26px] text-[#f3f3f3]">Blockgigs</h1>
                    </div>

                    {/* Divider */}
                    <div className="w-full border border-[#0f0f0f] my-6"></div>

                    {/* Navigation Menu */}
                    <ul className="space-y-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className="flex items-center w-[254px] h-[56px] rounded-[16px] space-x-3 px-4 py-2 hover:bg-[#a7d3ec] transition font-montserrat font-medium text-base leading-6 text-[#242d44]"
                                >
                                    <img src={item.icon} alt={item.name} className="w-[25px] h-[24px]" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logout Button */}
                <div>
                    <div className="w-full border border-[#0f0f0f] my-6"></div>
                    <button className="flex items-center space-x-3 px-4 py-2 text-[#ef4444] font-montserrat font-medium text-base leading-6 cursor-pointer">
                        <img src={logout} alt="Logout" className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
