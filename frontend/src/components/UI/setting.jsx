import React, { useState } from "react";
import preferenceIcon from "../../assets/preference.png";
import privacyIcon from "../../assets/security.png";
import notificationIcon from "../../assets/notification.png";
import accountIcon from "../../assets/account.png";
import notifyIcon from "../../assets/notify.png";
import EditProfile from "../../components/UI/settings/EditProfile";
import SecurityPrivacy from "../../components/UI/settings/SecurityPrivacy";
import supportIcon from "../../assets/support.png";
import SupportHelp from "../../components/UI/settings/SupportHelp";
import Notifications from "../../components/UI/settings/Notifications";
import Preferences from "../../components/UI/settings/Preferences";

const settingsOptions = [
  { label: "Account Information", icon: accountIcon },
  { label: "Security & Privacy", icon: privacyIcon },
  { label: "Support & Help", icon: supportIcon },
  { label: "Notification", icon: notificationIcon },
  { label: "Preferences", icon: preferenceIcon },
];

export default function Settings() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showSecurityPrivacy, setShowSecurityPrivacy] = useState(false);
  const [showSupportHelp, setShowSupportHelp] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  if (showEditProfile) {
    return <EditProfile onBack={() => setShowEditProfile(false)} />;
  } else if (showSecurityPrivacy) {
    return <SecurityPrivacy onBack={() => setShowSecurityPrivacy(false)} />;
  } else if (showSupportHelp) {
    return <SupportHelp onBack={() => setShowSupportHelp(false)} />;
  } else if (showNotifications) {
    return <Notifications onBack={() => setShowNotifications(false)} />;
  } else if (showPreferences) {
    return <Preferences onBack={() => setShowPreferences(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-800">Settings</h1>
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

      {/* Settings Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        {settingsOptions.map((option, idx) => (
          <button
            key={option.label}
            className="flex items-center gap-3 bg-white text-[#0a1931] rounded-lg px-6 py-4 shadow hover:bg-[#12264b] hover:text-white transition-colors"
            onClick={() => {
              if (idx === 0) setShowEditProfile(true); // Only first button opens EditProfile
              if (idx === 1) setShowSecurityPrivacy(true);
              if (idx === 2) setShowSupportHelp(true);
              if (idx === 3) setShowNotifications(true);
              if (idx === 4) setShowPreferences(true);
            }}
          >
            <span className="text-lg flex items-center justify-center">
              <img
                src={option.icon}
                alt={option.label + " icon"}
                className="w-6 h-6"
              />
            </span>
            <span className="text-base font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
