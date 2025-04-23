import React, { useState } from "react";
import notifyIcon from "../../../assets/notify.png";
import PasswordManagement from "./PasswordManagement";
import PrivacySettings from "./PrivacySettings";
import LoginActivity from "./LoginActivity";

export default function SecurityPrivacy({ onBack }) {
  const [auth2f, setAuth2f] = useState(true);
  const [showPasswordManagement, setShowPasswordManagement] = useState(false);
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [showLoginActivity, setShowLoginActivity] = useState(false);

  if (showPasswordManagement) {
    return (
      <PasswordManagement onBack={() => setShowPasswordManagement(false)} />
    );
  } else if (showPrivacySettings) {
    return <PrivacySettings onBack={() => setShowPrivacySettings(false)} />;
  } else if (showLoginActivity) {
    return <LoginActivity onBack={() => setShowLoginActivity(false)} />;
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
          <h1 className="text-lg font-medium text-gray-800">
            Security & Privacy
          </h1>
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
      <div className="flex items-center gap-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        <button
          className="bg-white rounded-lg flex items-center justify-between px-8 py-4 shadow text-left hover:bg-gray-100"
          onClick={() => setShowPasswordManagement(true)}
        >
          <span>Password Management</span>
          <span className="text-2xl text-gray-400">&rarr;</span>
        </button>
        <button
          className="bg-white rounded-lg flex items-center justify-between px-8 py-4 shadow text-left hover:bg-gray-100"
          onClick={() => setShowPrivacySettings(true)}
        >
          <span>Privacy Settings</span>
          <span className="text-2xl text-gray-400">&rarr;</span>
        </button>
        <button
          className="bg-white rounded-lg flex items-center justify-between px-8 py-4 shadow text-left hover:bg-gray-100"
          onClick={() => setShowLoginActivity(true)}
        >
          <span>Login Activity</span>
          <span className="text-2xl text-gray-400">&rarr;</span>
        </button>
      </div>
      <div className="flex items-center mt-6 gap-4 max-w-xl">
        <div className="bg-white rounded-lg flex-1 flex items-center justify-between px-8 py-4 shadow">
          <div>
            <div className="font-semibold">2F Authentication</div>
          </div>
          <input
            type="checkbox"
            checked={auth2f}
            onChange={() => setAuth2f((v) => !v)}
            className="toggle-checkbox"
          />
        </div>
      </div>
    </div>
  );
}
