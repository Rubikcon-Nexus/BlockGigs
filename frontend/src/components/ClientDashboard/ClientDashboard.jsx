import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const ClientDashboard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 bg-gray-100 flex flex-col ">
                <Navbar />

            </div>
        </div>

    )
}

export default ClientDashboard