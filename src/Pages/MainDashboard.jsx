import React from 'react';
import Sidebar from '../Layouts/Sidebar';
import Navbar from '../Layouts/Navbar';
import Hero from '../Layouts/Hero';
import RecTalents from '../Layouts/RecTalents';

const MainDashboard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 bg-gray-100 flex flex-col ">
                <Navbar />
                <Hero />
                <RecTalents />

            </div>
        </div>
    )
}

export default MainDashboard