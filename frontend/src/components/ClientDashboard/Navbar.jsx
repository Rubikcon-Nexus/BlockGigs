import React from 'react';
import send from '../../assets/send.png';
import { IoIosSearch, IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import boy from '../../assets/boy.png';

const Navbar = () => {
    return (
        <div className=" w-full flex flex-wrap justify-between items-center px-4 py-3 lg:px-10 bg-white shadow-md">

            {/* Welcome Text */}
            <div className="mb-3 lg:mb-0">
                <h2 className="font-montserrat font-medium text-[18px] text-[#1f1e1e]">
                    Welcome back, Let’s <span className="text-[#65c66f]">Work</span>
                </h2>
            </div>

            {/* Right Side Elements */}
            <div className="flex flex-wrap items-center gap-4">

                {/* Search Input */}
                <div className="relative w-full sm:w-[300px] md:w-[360px]">
                    <IoIosSearch className="absolute left-4 top-3 w-[24px] h-[24px] text-gray-500" />
                    <input
                        className="w-full h-[44px] rounded-[12px] pl-10 pr-4 py-2 border border-[#E8E8E8] focus:outline-none"
                        type="text" placeholder="Search for jobs, talents, or clients..."
                    />
                </div>

                {/* Post a New Gig Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <img src={send} alt="send icon" className="w-5 h-5" />
                    Post a New Gig
                </button>

                {/* Notifications and Profile */}
                <div className="flex items-center gap-4">

                    {/* Notifications */}
                    <div className="w-[48px] h-[48px] flex items-center justify-center border border-[#e7eef1] rounded-2xl bg-white">
                        <IoIosNotificationsOutline className="text-2xl text-gray-700 cursor-pointer" />
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-2 cursor-pointer w-[82px] h-[52px] rounded-[50px] bg-[#BED4DF4D] px-[8px] py-[5px]">
                        <img src={boy} alt="Profile" className="w-10 h-10 rounded-full" />
                        <IoIosArrowDown className="text-gray-700" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
