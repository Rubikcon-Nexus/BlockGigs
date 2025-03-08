import React from 'react';
import boy from '../assets/boy.png';
import { CiLocationOn } from "react-icons/ci";
import usdc from '../assets/cryptocurrency-color_usdc.png';
import app from '../assets/app update logo.png';
import Group from '../assets/Group.png';

const RecTalents = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between  items-center gap-2 mt-[-1.6rem] ml-[2rem]'>
            {/**FIRST DIV */}
            <div className='flex flex-col items-start gap-1.5 ml-[-1rem] lg:ml-0'>
                <div className='w-[220px] lg:w-[704px] h-[125px] flex justify-between items-center'>
                    <span className='font-montserrat font-medium text-sm lg:text-base leading-[18px] text-[#3c3b3b] text-nowrap ml-[-0.5rem] lg:mr-0'>Recommended Talents</span>
                    <a className='font-montserrat font-medium text-sm leading-6 text-[#2f66f6] text-nowrap' href="#">View All</a>
                </div>

                {/**boxes to view talents profile */}
                {/**box 1 */}
                <div className='w-[278px] lg:w-[704px] h-[140px] lg:h-[125px] top-[429px] left-[344px] bg-white flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-1 lg:gap-3.5 mt-[-3rem] rounded-[12px] ml-[-1rem] lg:mr-0'>
                    <div className='w-[20px] h-[20px] lg:w-[60px]  lg:h-[60px] top-[24px] left-[16px] ml-[1rem] mt-1'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='flex flex-col items-start mr-0 lg:mr-[12rem] gap-2'>
                        <div className='w-[170px] lg:w-[198px] h-[17px] lg:h-[24px] top-[23px] left-[86px] flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <span className='font-montserrat font-medium text-sm leading-6 text-[#292929]'>Glory Design</span>
                            <div className="w-[6px] h-[6px] bg-[#d1d5db] rounded-full mt-[0.7rem]"></div>
                            <span className='font-montserrat font-normal text-sm leading-[23px] text-[#605f62]'>Reviews(5)</span>
                        </div>

                        <div className='w-[90px] lg:w-[114px] h-[18px] top-[54px] left-[86px] gap-1.5 flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <CiLocationOn className='w-[16px] h-[16px]' />
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>UTC +1</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.2rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>&#36;10/hr</span>
                        </div>

                        <div className='w-[160px] lg:w-[315px] h-[22px] top-[84px] left-[86px] gap-2 flex justify-between items-start'>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">UI/UX Design</span>
                            <span className="w-[82px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] items-center font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Graphics Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Web Design</span>
                        </div>
                    </div>

                    <button className="w-[96px] h-[27px] rounded-[6.5px] px-[26.02px] py-[6px] gap-[9.76px] bg-[#2F66F6] cursor-pointer font-montserrat font-medium text-[9.76px] leading-[19.51px] text-white text-nowrap ml-1.5 lg:mr-[1rem] mt-1 lg:mt-0">View Profile</button>
                </div>

                {/**box 2 */}
                <div className='w-[278px] lg:w-[704px] h-[140px] lg:h-[125px] top-[429px] left-[344px] bg-white flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-1 lg:gap-3.5 rounded-[12px] mt-[1rem] ml-[-1rem] lg:mr-0'>
                    <div className='w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] top-[24px] left-[16px] ml-[1rem] mt-1'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='flex flex-col items-start  mr-0 lg:mr-[12rem] gap-2'>
                        <div className='w-[140px] lg:w-[198px] h-[17px] lg:h-[24px] top-[23px] left-[86px] flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <span className='font-montserrat font-medium text-sm leading-6 text-[#292929]'>Dev god</span>
                            <div className="w-[6px] h-[6px] bg-[#d1d5db] rounded-full mt-[0.7rem]"></div>
                            <span className='font-montserrat font-normal text-sm leading-[23px] text-[#605f62]'>Reviews(5)</span>
                        </div>

                        <div className='w-[90px] lg:w-[114px] h-[18px] top-[54px] left-[86px] gap-1.5 flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <CiLocationOn className='w-[16px] h-[16px]' />
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>UTC +1</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>&#36;10/hr</span>
                        </div>

                        <div className='w-[160px] lg:w-[315px] h-[22px] top-[84px] left-[86px] gap-2 flex justify-between items-start'>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">UI/UX Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Graphics Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Web Design</span>
                        </div>
                    </div>

                    <button className="w-[96px] h-[27px] rounded-[6.5px] px-[26.02px] py-[6px] gap-[9.76px] bg-[#2F66F6] cursor-pointer font-montserrat font-medium text-[9.76px] leading-[19.51px] text-white text-nowrap ml-1.5 lg:mr-[1rem] mt-1 lg:mt-0">View Profile</button>
                </div>


                {/**box 3 */}
                <div className='w-[278px] lg:w-[704px] h-[140px] lg:h-[125px] top-[429px] left-[344px] bg-white flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-1 lg:gap-3.5 rounded-[12px]  mt-[1rem] ml-[-1rem] lg:mr-0'>
                    <div className='w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] top-[24px] left-[16px] ml-[1rem] mt-1'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='flex flex-col items-start mr-0 lg:mr-[12rem] gap-2'>
                        <div className='w-[140px] lg:w-[198px] h-[17px] lg:h-[24px] top-[23px] left-[86px] flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <span className='font-montserrat font-medium text-sm leading-6 text-[#292929]'>Dev god</span>
                            <div className="w-[6px] h-[6px] bg-[#d1d5db] rounded-full mt-[0.7rem]"></div>
                            <span className='font-montserrat font-normal text-sm leading-[23px] text-[#605f62]'>Reviews(5)</span>
                        </div>

                        <div className='w-[90px] lg:w-[114px] h-[18px] top-[54px] left-[86px] gap-1.5 flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <CiLocationOn className='w-[16px] h-[16px]' />
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>UTC +1</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>&#36;10/hr</span>
                        </div>

                        <div className='w-[160px] lg:w-[315px] h-[22px] top-[84px] left-[86px] gap-2 flex justify-between items-start'>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">UI/UX Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Graphics Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Web Design</span>
                        </div>
                    </div>

                    <button className="w-[96px] h-[27px] rounded-[6.5px] px-[26.02px] py-[6px] gap-[9.76px] bg-[#2F66F6] cursor-pointer font-montserrat font-medium text-[9.76px] leading-[19.51px] text-white text-nowrap ml-1.5 lg:mr-[1rem] mt-1 lg:mt-0">View Profile</button>
                </div>

                {/**box 4 */}
                <div className='w-[278px] lg:w-[704px] h-[140px] lg:h-[125px] top-[429px] left-[344px] bg-white flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-1 lg:gap-3.5 rounded-[12px]  mt-[1rem] ml-[-1rem] lg:mr-0'>
                    <div className='w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] top-[24px] left-[16px] ml-[1rem] mt-1'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='flex flex-col items-start mr-0 lg:mr-[12rem] gap-2'>
                        <div className='w-[140px] lg:w-[198px] h-[17px] lg:h-[24px] top-[23px] left-[86px] flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <span className='font-montserrat font-medium text-sm leading-6 text-[#292929]'>Dev god</span>
                            <div className="w-[6px] h-[6px] bg-[#d1d5db] rounded-full mt-[0.7rem]"></div>
                            <span className='font-montserrat font-normal text-sm leading-[23px] text-[#605f62]'>Reviews(5)</span>
                        </div>

                        <div className='w-[90px] lg:w-[114px] h-[18px] top-[54px] left-[86px] gap-1.5 flex justify-between items-start ml-[1rem] lg:ml-0'>
                            <CiLocationOn className='w-[16px] h-[16px]' />
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>UTC +1</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-[18px] text-[#272954]'>&#36;10/hr</span>
                        </div>

                        <div className='w-[160px] lg:w-[315px] h-[22px] top-[84px] left-[86px] gap-2 flex justify-between items-start'>
                            <span className="w-[ 80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">UI/UX Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Graphics Design</span>
                            <span className="w-[80px] lg:w-[96px] h-[22px] rounded-[12px] px-[7px] py-[2px] gap-[6px] bg-[#E7EEF1] font-montserrat font-medium  text-[10px] lg:text-[12px] leading-[18px] text-[#1d4ed8] text-nowrap">Web Design</span>
                        </div>
                    </div>

                    <button className="w-[96px] h-[27px] rounded-[6.5px] px-[26.02px] py-[6px] gap-[9.76px] bg-[#2F66F6] cursor-pointer font-montserrat font-medium text-[9.76px] leading-[19.51px] text-white text-nowrap ml-1.5 lg:mr-[1rem] mt-1 lg:mt-0">View Profile</button>
                </div>
            </div>



            {/**SECOND DIV */}
            <div className='w-[270px] lg:w-[336px] h-[556px] top-[395px] left-[1068px] rounded-[12px] bg-white flex flex-col items-center gap-1.5 ml-[-1.8rem] lg:mr-[8rem] mt-[1.7rem]'>
                <div className='w-[220px] lg:w-[304px] h-[18px] top-[18px] left-[16px] flex justify-between items-center mt-[1.4rem]'>
                    <span className='font-montserrat font-medium text-base leading-[18px] text-[#292929]'>Activity</span>
                    <a className='font-montserrat font-medium text-[12px] leading-[18px] text-[#2f66f6]' href="#">View All</a>
                </div>

                {/**milestones divs */}
                {/**div 1 */}
                <div className='w-[310px] lg:w-[338px] h-[48px] gap-[9px] flex justify-between items-center mt-[0.8rem]'>
                    <div className='w-[44px] h-[44px] ml-[2rem]'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='w-[170px] lg:w-[132px] h-[48px] flex flex-col items-start mr-[4rem] lg:mr-[7rem]'>
                        <span className='font-montserrat font-medium text-sm leading-6 text-[#292929] gap-3'>Maria Stiles <span className="w-[6px] h-[6px] bg-[#404040] rounded-full inline-block"></span>
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] ml-0 text-nowrap'>2m ago</span></span>
                        <span className='font-montserrat font-medium text-[12px] leading-6 text-[#605f62]'>Posted a comment</span>
                    </div>
                </div>

                <div className='w-[211px] border border-[#d9d9d9] mt-[0.8rem]'></div>

                {/**div 2 */}
                <div className='w-[310px] lg:w-[338px] h-[48px] gap-[9px] flex justify-between items-center mt-[0.8rem]'>
                    <div className='w-[44px] h-[44px] ml-[2rem]'>
                        <img src={usdc} alt="usdc-logo" />
                    </div>

                    <div className='w-[170px] lg:w-[132px] h-[48px] flex flex-col items-start mr-[4rem] lg:mr-[7rem]'>
                        <span className='font-montserrat font-medium text-sm leading-6 text-[#292929] gap-3'>USDc Sent <span className="w-[6px] h-[6px] bg-[#404040] rounded-full inline-block"></span> <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] ml-0'>15m ago</span></span>
                        <span className='font-montserrat font-medium text-[12px] leading-6 text-[#605f62] text-nowrap'>&#36;100 is on its way to you</span>
                    </div>
                </div>

                <div className='w-[211px] border border-[#d9d9d9] mt-[0.8rem]'></div>

                {/**div 3 */}
                <div className='w-[310px] lg:w-[338px] h-[48px] gap-[9px] flex justify-between items-center mt-[0.8rem]'>
                    <div className='w-[44px] h-[44px] ml-[2rem]'>
                        <img src={Group} alt="group-logo" />
                    </div>

                    <div className='w-[170px] lg:w-[132px] h-[48px] flex flex-col items-start mr-[4rem] lg:mr-[7rem]'>
                        <span className='font-montserrat font-medium text-sm leading-6 text-[#292929] gap-3 text-nowrap'>Milestone Approved<span className="w-[6px] h-[6px] bg-[#404040] rounded-full inline-block" ></span> <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] ml-0'>30m ago</span></span>
                        <span className='font-montserrat font-medium text-[12px] leading-6 text-[#605f62] text-nowrap'>Maria approved Milestone 1</span>
                    </div>
                </div>

                <div className='w-[211px] border border-[#d9d9d9] mt-[0.8rem]'></div>

                {/**div 4 */}
                <div className='w-[310px] lg:w-[338px] h-[48px] gap-[9px] flex justify-between items-center mt-[0.8rem]'>
                    <div className='w-[44px] h-[44px] ml-[2rem]'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='w-[170px] lg:w-[132px] h-[48px] flex flex-col items-start mr-[4rem] lg:mr-[7rem]'>
                        <span className='font-montserrat font-medium text-sm leading-6 text-[#292929] gap-3'>David Akure<span className="w-[6px] h-[6px] bg-[#404040] rounded-full inline-block" ></span> <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] ml-0'>1hr ago</span></span>
                        <span className='font-montserrat font-medium text-[12px] leading-6 text-[#605f62]'>Started a new chat</span>
                    </div>
                </div>

                <div className='w-[211px] border border-[#d9d9d9] mt-[0.8rem]'></div>


                {/**div 5 */}

                <div className='w-[310px] lg:w-[338px] h-[48px] gap-[9px] flex justify-between items-center mt-[0.8rem]'>
                    <div className='w-[44px] h-[44px] ml-[2rem]'>
                        <img src={app} alt="app-logo" />
                    </div>

                    <div className='w-[170px] lg:w-[132px] h-[48px] flex flex-col items-start mr-[4rem] lg:mr-[7rem]'>
                        <span className='font-montserrat font-medium text-sm leading-6 text-[#292929] gap-3'>App update<span className="w-[6px] h-[6px] bg-[#404040] rounded-full inline-block"></span> <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] ml-0'>2m ago</span></span>
                        <span className='font-montserrat font-medium text-[12px] leading-6 text-[#605f62]'>New Version  2.0</span>
                    </div>
                </div>

                <div className='w-[211px] border border-[#d9d9d9] mt-[0.8rem]'></div>

                {/**div 6 */}
                <div className='w-[310px] lg:w-[338px] h-[48px] gap-[9px] flex justify-between items-center mt-[0.8rem]'>
                    <div className='w-[44px] h-[44px] ml-[2rem]'>
                        <img src={boy} alt="boy-logo" />
                    </div>

                    <div className='w-[170px] lg:w-[132px] h-[48px] flex flex-col items-start mr-[4rem] lg:mr-[7rem]'>
                        <span className='font-montserrat font-medium text-sm leading-6 text-[#292929] gap-3'>David Akure<span className="w-[6px] h-[6px] bg-[#404040] rounded-full inline-block"></span> <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] ml-0'>1hr ago</span></span>
                        <span className='font-montserrat font-medium text-[12px] leading-6 text-[#605f62]'>Started a new chat</span>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default RecTalents