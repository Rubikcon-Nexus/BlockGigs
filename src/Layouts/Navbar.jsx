import React from 'react';
import send from '../../src/assets/send.png';
import { IoIosSearch, IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import boy from '../../src/assets/boy.png';

const Navbar = () => {
    return (
        <div className="w-full flex flex-wrap justify-between items-center px-4 py-3 lg:px-10">

            {/* Welcome Text */}
            <div className="mb-3 lg:mb-0 w-full sm:w-auto">
                <h2 className="font-montserrat font-medium text-[16px] sm:text-[18px] text-[#1f1e1e]">
                    Welcome back, Let’s <span className="text-[#65c66f]">Work</span>
                </h2>
            </div>

            {/* Right Side Elements */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4">
                <div className='flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-3 mr-[3rem]'>
                    {/* Search Input */}
                    <div className="relative w-full sm:w-[300px] md:w-[360px] lg:w-[400px]">
                        <IoIosSearch className="absolute left-4 top-3 w-[20px] h-[20px] text-gray-500" />
                        <input
                            className="w-full h-[40px] bg-white rounded-[12px] pl-10 pr-4 border border-[#E8E8E8] font-montserrat text-base focus:outline-none"
                            type="text"
                            placeholder="Search for jobs, talents, or clients..."
                        />
                    </div>

                    {/* Post a New Gig Button */}
                    <button className="flex items-center cursor-pointer gap-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        <img src={send} alt="send icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Post a New Gig</span>
                    </button>
                </div>



                {/* Notifications and Profile */}
                <div className="flex justify-between items-start lg:items-center gap-3 sm:gap-4 mr-[9.8rem] lg:mr-0">

                    {/* Notifications */}
                    <div className="w-10 h-10 sm:w-[48px] sm:h-[48px] flex items-center justify-center border border-[#e7eef1] rounded-2xl bg-white">
                        <IoIosNotificationsOutline className="text-xl sm:text-2xl text-gray-700 cursor-pointer" />
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-2 cursor-pointer w-[70px] sm:w-[82px] h-[42px] sm:h-[52px] rounded-[50px] bg-[#BED4DF4D] px-[6px] sm:px-[8px] py-[5px]">
                        <img src={boy} alt="Profile" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" />
                        <IoIosArrowDown className="text-gray-700 text-sm sm:text-base" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
