'use client';

import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const filters = [
  'Date Created',
  'Assigned To',
  'Date Assigned',
  'Follow Up',
  'Last Activity',
  'Contacted Status',
  'Source',
  'Groups',
  'Lead Stage',
];

export default function RightSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="w-full h-[87.5vh] bg-white border-l border-gray-200 overflow-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-extrabold text-[#2B2D42]">Filters</h2>
        <button className="text-2xl text-gray-500 hover:text-black">&times;</button>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {filters.map((filter, index) => (
          <div key={index} className="border-b border-gray-200 pb-3 px-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              <p className="font-normal text-[12px]">{filter}</p>
              <FaChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openDropdown === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            <p className="text-sm text-gray-400 pt-1">Any</p>
          </div>
        ))}
      </div>

      {/* Timer Widget */}
      <div className="mt-8">
        <h3 className="text-2xl font-extrabold text-[#2B2D42] drop-shadow-md">
          Schedule Message
        </h3>
        <div className="mt-2 border shadow-md bg-white p-4">
          <p className="text-black">Set Timer widget will come here.</p>
        </div>
      </div>
    </div>
  );
}
