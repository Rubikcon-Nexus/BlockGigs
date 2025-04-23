import notifyIcon from "../../../assets/notify.png";
import React, { useState } from "react";
import LiveChat from "./LiveChat";
import FAQs from "./FAQs";

const options = [
  { label: "Contact Live Chat" },
  { label: "Send us an E-mail" },
  { label: "FAQs" },
];

export default function SupportHelp({ onBack }) {
  const [showContactLiveChat, setShowContactLiveChat] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);

  if (showContactLiveChat) {
    return <LiveChat onBack={() => setShowContactLiveChat(false)} />;
  } else if (showFAQs) {
    return <FAQs onBack={() => setShowFAQs(false)} />;
  }

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
          <h1 className="text-lg font-medium text-gray-800">Support & Help</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {options.map((opt, i) => (
          <button
            key={i}
            className="bg-white rounded-lg flex items-center justify-between px-8 py-4 shadow text-left"
            onClick={() => {
              if (opt.label === "Contact Live Chat") {
                setShowContactLiveChat(true);
              } else if (opt.label === "FAQs") {
                setShowFAQs(true);
              }
            }}
          >
            <span className="text-base">{opt.label}</span>
            <span className="text-2xl text-gray-400">&rarr;</span>
          </button>
        ))}
      </div>
    </div>
  );
}
