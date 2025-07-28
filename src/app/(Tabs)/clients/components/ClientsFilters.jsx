"use client";

import { FaChevronDown, FaSearch } from "react-icons/fa";

export default function ClientsFilters() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
      {/* Search Input (50%) */}
      <div className="relative w-full sm:w-1/2">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Clients"
          className="pl-10 pr-3 py-2 rounded bg-gray-200 focus:outline-none w-full text-center sm:text-left"
        />
      </div>

      {/* Filter Buttons (each 25%) */}
      <div className="flex w-full sm:w-1/2 gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-0 rounded text-sm bg-gray-200 text-gray-600 cursor-pointer">
          All Team Members <FaChevronDown className="text-xs" />
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-0 rounded text-sm bg-gray-200 text-gray-600 cursor-pointer">
          Filter <FaChevronDown className="text-xs" />
        </button>
      </div>
    </div>
  );
}
