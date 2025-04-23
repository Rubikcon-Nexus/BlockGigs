import notifyIcon from "../../../assets/notify.png";
import React from "react";

export default function LoginActivity({ onBack }) {
  const sessions = [
    { ip: "12345678", device: "Iphone 11 pro", time: "08/02/25 - 09:30 Pm" },
    { ip: "12345678", device: "Oppo A93", time: "08/02/25 - 09:30 Pm" },
    { ip: "12345678", device: "Samsung A11", time: "08/02/25 - 09:30 Pm" },
  ];

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
          <h1 className="text-lg font-medium text-gray-800">Login Activity</h1>
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
        <h2 className="text-lg font-semibold mb-6">Login Activity</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#7e22ce]">
              <th className="pb-2">IP Address</th>
              <th className="pb-2">Device Name</th>
              <th className="pb-2">Date & Time</th>
              <th className="pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{s.ip}</td>
                <td>{s.device}</td>
                <td>{s.time}</td>
                <td>
                  <button className="bg-[#3164F4] text-white px-3 py-1 rounded text-xs">
                    End Session
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
