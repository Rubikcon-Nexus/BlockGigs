import React, { useState } from "react";
import EditProfile from "./EditProfile";

export default function AccountInfo() {
  const [editing, setEditing] = useState(false);

  if (editing) {
    // Optionally pass a callback to return to profile info
    return <EditProfile onBack={() => setEditing(false)} />;
  }
  return (
    <div className="min-h-screen bg-[#fcfcfc] px-8 py-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="rounded-full hover:bg-gray-200 p-2">
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
            Profile Information
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

      {/* Main Content */}
      <div className="flex flex-1 gap-6">
        {/* Left/Main Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex gap-6 items-center">
            <img
              src="https://i.pravatar.cc/64"
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-800">
                  Glory Design
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                  UI/UX Design
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                  Graphics Design
                </span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                  Web Design
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Available for gigs</span>
                <span>•</span>
                <span>UTC+1</span>
                <span>•</span>
                <span>$10/hr</span>
              </div>
            </div>
            <button
              className="ml-auto text-blue-600 hover:underline text-xs"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </div>

          {/* About & Other Information */}
          <div className="bg-white rounded-2xl shadow p-6 flex gap-8">
            {/* About */}
            <div className="flex-1">
              <h3 className="font-semibold mb-2 flex items-center gap-1">
                <span>🛈</span> About
              </h3>
              <p className="text-sm text-gray-600">
                Product Designer passionate about crafting intuitive and
                user-centered experiences. I thrive on solving complex design
                challenges and creating impactful solutions that meet both user
                needs and business goals. Proficient in Figma, user research.
              </p>
            </div>
            {/* Other Info */}
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Other Information</h3>
              <div className="flex flex-col gap-1 text-sm text-gray-600">
                <div>
                  <b>Time Zone:</b> UTC+1
                </div>
                <div>
                  <b>Portfolio Links:</b>{" "}
                  <span className="text-blue-500 underline cursor-pointer">
                    X
                  </span>{" "}
                  <span className="text-blue-500 underline cursor-pointer">
                    X
                  </span>
                </div>
                <div>
                  <b>Pay Range:</b> $10/hr
                </div>
                <div>
                  <b>Languages:</b> English, German, Spanish
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Reviews */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex gap-8 border-b pb-2 mb-4">
              <button className="font-semibold text-[#3164F4] border-b-2 border-[#3164F4] pb-2">
                Works/Experience
              </button>
              <button className="font-medium text-gray-400">Reviews (5)</button>
            </div>
            {/* Experience List */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/32"
                  alt="avatar"
                  className="w-8 h-8 rounded-full mt-1"
                />
                <div>
                  <div className="font-semibold text-gray-700">
                    Senior UI/UX Designer
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    Blockgigs • 1/1/24 - 15/01/25 (2 months)
                  </div>
                  <ul className="text-sm text-gray-600 list-disc ml-5">
                    <li>
                      Contribute to the development of sleek and user-friendly
                      web and mobile app scalable interfaces.
                    </li>
                    <li>
                      Collaborate with our talented engineering team to
                      implement new features and optimize exis...{" "}
                      <span className="text-blue-500 cursor-pointer">
                        View more
                      </span>
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-2">
                    <img
                      src="https://via.placeholder.com/80x60"
                      alt="project1"
                      className="rounded"
                    />
                    <img
                      src="https://via.placeholder.com/80x60"
                      alt="project2"
                      className="rounded"
                    />
                    <img
                      src="https://via.placeholder.com/80x60"
                      alt="project3"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/32"
                  alt="avatar"
                  className="w-8 h-8 rounded-full mt-1"
                />
                <div>
                  <div className="font-semibold text-gray-700">
                    Junior UI/UX Designer
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    Rubicon • 1/1/23 - 15/09/24 (11 months)
                  </div>
                  <ul className="text-sm text-gray-600 list-disc ml-5">
                    <li>
                      Assisted the design team to improve products user
                      experience thereby contributing to a 20% increase in
                      online sales.
                    </li>
                    <li>
                      Collaborate with our talented engineering team to
                      implement new features and optimize exis...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Tips and Completion */}
        <div className="w-[340px] flex flex-col gap-6">
          {/* Tips Card */}
          <div className="bg-[#eaf2ff] rounded-2xl shadow p-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              Constructive tips to <span className="text-blue-600">Boost</span>{" "}
              your profile for hiring chances
            </h3>
            <ul className="text-sm text-gray-700 flex flex-col gap-1">
              <li>
                💡 <b>Tip 1:</b> Highlight specific skills that set you apart in
                your industry.
              </li>
              <li>
                💡 <b>Tip 2:</b> Use measurable achievements to showcase your
                impact on past projects.
              </li>
              <li>
                💡 <b>Tip 3:</b> Tailor your profile summary to address client
                pain points and solutions.
              </li>
              <li>
                💡 <b>Tip 4:</b> Regularly update with recent projects and
                client testimonials.
              </li>
              <li>
                💡 <b>Tip 5:</b> Include keywords relevant to your niche for
                better platform visibility.
              </li>
            </ul>
          </div>
          {/* Completion Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/90x90"
              alt="congrats"
              className="mb-2"
            />
            <div className="text-[#3164F4] font-semibold text-center mb-2">
              Congratulations!!
            </div>
            <div className="text-xs text-gray-600 text-center mb-2">
              Your Blockgigs Profile is 100% complete
            </div>
            <div className="flex gap-2 text-xs text-gray-500 flex-wrap justify-center">
              <span>About (expertise)</span>
              <span>•</span>
              <span>Works/Experience</span>
              <span>•</span>
              <span>Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
