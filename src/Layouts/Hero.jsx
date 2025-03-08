import React from 'react';
import boy from '../assets/boy.png';

const Hero = () => {
    return (
        <div className='flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-1 lg:ml-[2rem] mt-[2rem]'>
            {/**div one */}
            <div className='w-[270px] lg:w-[632px] h-[258px] top-[109px] left-[344px] rounded-[12px] bg-white flex flex-col items-start gap-[1rem] ml-[1rem] lg:ml-0 '>
                <div className='flex items-start justify-between lg:items-center gap-2 px-4 mt-[1rem]'>
                    <p className='font-montserrat font-medium text-sm lg:text-base leading-[18px] text-[#292929]'>Ongoing Jobs</p>
                    <a href="#" className='font-montserrat font-medium text-sm lg:text-base leading-6 text-[#2f66f6] mt-[-0.2rem] lg:mt-0 ml-[5rem] lg:ml-[26rem]'>View All</a>
                </div>

                <div className='w-[250px] lg:w-[600px] h-[79px] top-[58px] left-[16px] rounded-[12px] border border-[#e7eef1] flex justify-between items-center ml-[1rem]'>
                    <div className='w-[170px] h-[45px] gap-[3px] flex flex-col items-start ml-[1rem]'>
                        <p className='font-montserrat font-medium text-sm lg:text-base leading-[18px] text-[#292929]'>Saas Website Design</p>
                        <div className='w-[145px] h-[24px] gap-[6px] flex justify-between items-start'>
                            <img className='w-[18px] h-[18px] mt-[0.2rem]' src={boy} alt="boy logo" />
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'>Damon</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'> 2 days ago</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-[#2f66f6] mr-[0.7rem] lg:mr-[2rem]">
                        <span className="font-montserrat font-normal text-[12px] leading-6 text-[#292929]">
                            50%
                        </span>
                    </div>
                </div>

                <div className='w-[250px] lg:w-[600px] h-[79px] top-[58px] left-[16px] rounded-[12px] border border-[#e7eef1] flex justify-between items-center ml-[1rem]'>
                    <div className='w-[170px] h-[45px] gap-[3px] flex flex-col items-start ml-[1rem]'>
                        <p className='font-montserrat font-medium text-sm lg:text-base leading-[18px] text-[#292929] text-nowrap'>Sportswear landing page</p>
                        <div className='w-[145px] h-[24px] gap-[6px] flex justify-between items-start'>
                            <img className='w-[18px] h-[18px] mt-[0.2rem]' src={boy} alt="boy logo" />
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'>Andrew</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'>5 days ago</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-[#2f66f6] mr-[0.7rem] lg:mr-[2rem]">
                        <span className="font-montserrat font-normal text-[12px] leading-6 text-[#292929]">75%</span>
                    </div>
                </div>
            </div>

            {/**div two */}
            <div className='w-[270px] lg:w-[408px] h-[258px] top-[109px] left-[996px] rounded-[12px] bg-white flex flex-col items-start ml-[1rem] lg:mr-[8.5rem] gap-[1rem] mt-[1rem] lg:mt-0'>
                <div className='flex justify-between items-center gap-3.5 px-4 mt-[1rem]'>
                    <p className='font-montserrat font-medium text-sm lg:text-base leading-[18px] text-[#292929] text-nowrap'>My Offers</p>
                    <a className='font-montserrat font-medium text-sm lg:text-base leading-[18px] text-[#2f66f6] ml-[6rem] lg:ml-[13rem] text-nowrap' href="#">View All</a>
                </div>

                <div className='w-[250px] lg:w-[376px] h-[79px] top-[58px] left-[16px] rounded-[12px] border border-[#e7eef1] flex justify-between items-center ml-[1rem]'>
                    <div className='w-[178px] h-[49px] top-[15px] left-4 flex flex-col items-start ml-[1rem]'>
                        <p className='font-montserrat font-medium text-[13px] lg:text-base leading-[18px] text-[#292929] text-nowrap'>Product Designer at Crolz</p>
                        <div className='w-[145px] h-[24px] gap-[6px] flex justify-between items-start'>
                            <img className='w-[18px] h-[18px] mt-[0.2rem]' src={boy} alt="boy logo" />
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'>Damon</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'> 2 days ago</span>

                        </div>
                    </div>

                    <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] mr-[1rem] mt-[-2rem] lg:mt-0'>Pending</span>
                </div>

                <div className='w-[250px] lg:w-[376px] h-[79px] top-[58px] left-[16px] rounded-[12px] border border-[#e7eef1] flex justify-between items-center ml-[1rem]'>
                    <div className='w-[178px] h-[49px] top-[15px] left-4 flex flex-col items-start ml-[1rem]'>
                        <p className='font-montserrat font-medium text-[13px] lg:text-base leading-[18px] text-[#292929] text-nowrap'>Token website</p>
                        <div className='w-[145px] h-[24px] gap-[6px] flex justify-between items-start'>
                            <img className='w-[18px] h-[18px] mt-[0.2rem]' src={boy} alt="boy logo" />
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'>Damon</span>
                            <div className="w-[2px] h-3 bg-gray-500 mt-[0.4rem]"></div>
                            <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888]'>2 days ago</span>
                        </div>
                    </div>

                    <span className='font-montserrat font-medium text-[12px] leading-6 text-[#888888] mr-[1rem] mt-[-2rem] lg:mt-0'>Pending</span>
                </div>

            </div>
        </div>
    )
}

export default Hero