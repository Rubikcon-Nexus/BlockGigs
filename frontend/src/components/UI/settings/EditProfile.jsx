import React from "react";

export default function EditProfile({ onBack }) {
  const [avatar, setAvatar] = React.useState();

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target.result);
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
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
            Account Information
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
                🔔
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

      {/* Card */}
      <div className="bg-white rounded-2xl shadow p-10 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-6">Edit Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://i.pravatar.cc/80"
            alt="avatar"
            className="w-20 h-20 rounded-full mb-2"
          />
          <label className="text-xs text-blue-600 hover:underline cursor-pointer">
            Upload or Change Avatar
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Country
              </label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2">
                <option>Country</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <h3 className="text-base font-semibold mb-4">Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Time Zone
              </label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2">
                <option>Time zone</option>
                {/* Add more time zones as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3164F4] hover:bg-[#274fc1] text-white font-semibold rounded-lg py-2 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
