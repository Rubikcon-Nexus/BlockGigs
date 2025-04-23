import notifyIcon from "../../../assets/notify.png";
import React from "react";

export default function Preferences({ onBack }) {
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
          <h1 className="text-lg font-medium text-gray-800">Preferences</h1>
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

      <div className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-6">Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Select Preferred Language
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2">
              <option>Preferred language</option>
              {/* Add more languages */}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Change Theme
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-2">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
