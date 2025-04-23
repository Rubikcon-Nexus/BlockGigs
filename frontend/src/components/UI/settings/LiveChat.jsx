import notifyIcon from "../../../assets/notify.png";
import React from "react";

export default function LiveChat({ onBack }) {
  return (
    <div className="min-h-screen bg-[#fcfcfc] px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            className="rounded-full hover:bg-gray-200 p-2"
            onClick={onBack}
          >
            {/* Back arrow */}
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-lg font-medium text-gray-800">Live Chat</h1>
        </div>
        <div className="flex items-center gap-4">
          <input
            className="rounded-lg border border-gray-200 px-4 py-2 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Search for jobs, talents or clients..."
          />
          <div className="relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
            <button className="bg-white rounded-full p-2 shadow">
              <span role="img" aria-label="bell">
                <img src={notifyIcon} alt="notify" />
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <img
              src="https://i.pravatar.cc/32"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Glory Design</span>
              <span className="text-xs text-gray-400">Product Designer</span>
            </div>
            <span className="ml-2">▼</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-lg shadow flex items-center justify-between px-8 py-4 w-[500px] mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <span className="font-medium">Support Name</span>
          </div>
          <span className="text-green-500 font-semibold text-sm">Online</span>
        </div>
        <div className="text-gray-500 text-center mb-8">
          To start a chat, please tell us your name. One of our agents will
          start helping you immediately
        </div>
        <textarea
          className="w-[600px] h-28 border border-gray-200 rounded-lg p-4 mb-6"
          placeholder="Write message here"
        />
        <button className="w-[300px] bg-[#3164F4] hover:bg-[#274fc1] text-white font-semibold rounded-lg py-2 transition">
          Start Chat
        </button>
      </div>
    </div>
  );
}
