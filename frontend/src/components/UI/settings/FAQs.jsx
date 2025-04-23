import notifyIcon from "../../../assets/notify.png";
import React from "react";

export default function FAQs({ onBack }) {
  const faqs = [
    "What is Blockgigs?",
    "What is Blockgigs?",
    "What is Blockgigs?",
    "What is Blockgigs?",
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
          <h1 className="text-lg font-medium text-gray-800">FAQs</h1>
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
      <h2 className="text-2xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {faqs.map((q, i) => (
          <div
            key={i}
            className="bg-white rounded-lg flex items-center justify-between px-8 py-4 shadow"
          >
            <span className="text-base">{q}</span>
            <button className="bg-[#f5f7fa] rounded-full p-1">
              <span className="text-xl font-bold text-[#3164F4]">+</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
