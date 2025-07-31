"use client";
import { FaUserFriends } from "react-icons/fa";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Header() {
  return (
    <div className="w-full flex justify-center pt-0">
      <div className="w-full max-w-screen-lg px-4 pt-4 flex flex-col gap-2">
        {/* Top Row: Breadcrumb + Buttons */}
        <div className="flex justify-between items-start">
          <div className="text-sm text-gray-500">
            <span className="underline cursor-pointer">Clients</span> &gt;{" "}
            <span className="font-semibold text-black">Mayank Mishra</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-[#0db4b2] text-white text-xs px-3 py-1.5 rounded shadow-sm">
              <div className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
                Send Quick Response
              </div>
            </button>
            <button className="text-[#0db4b2] text-xs border border-[#0db4b2] px-3 py-1.5 rounded flex items-center gap-1">
              View on App
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="#0db4b2"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 3h6v6m-6 0L21 3m-4 18H5a2 2 0 01-2-2V5a2 2 0 012-2h6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Row: Name + Tags + Options */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex flex-col gap-3 flex-wrap">
            <h2 className="text-xl font-bold text-black">Mayank Mishra</h2>

            <div className="flex gap-4">
              {/* Assigned To You */}
              <div className="flex items-center text-xs px-2 py-1 bg-blue-50 border border-blue-200 rounded-full text-[#0d69b4] font-medium gap-1">
                <FaUserFriends className="text-sm" />
                ASSIGNED TO YOU
                <FiChevronRight />
              </div>

              {/* Follow Up Overdue */}
              <div className="flex items-center text-xs px-2 py-1 border border-red-500 bg-red-50 text-red-600 rounded gap-1">
                <MdOutlineCalendarToday className="text-sm" />
                <span className="font-semibold">Follow Up Overdue</span>
                <span className="font-normal ml-1">11 Jun 2025 - 08:00 AM</span>
                <FiChevronDown />
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="text-sm text-black flex items-center gap-1 cursor-pointer">
            Options <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
