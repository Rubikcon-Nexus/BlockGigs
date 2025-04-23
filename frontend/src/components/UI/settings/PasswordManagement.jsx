import notifyIcon from "../../../assets/notify.png";

export default function PasswordManagement({ onBack }) {
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
            Password Management
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
      <div className="bg-white rounded-2xl shadow p-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-6">Change Password</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                New Password
              </label>
              <input
                type="password"
                placeholder="Email address"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Country"
                className="w-full border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <button className="w-full bg-[#3164F4] hover:bg-[#274fc1] text-white font-semibold rounded-lg py-2 transition">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
