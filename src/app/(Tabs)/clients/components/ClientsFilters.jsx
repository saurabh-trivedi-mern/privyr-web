"use client";

import { FaChevronDown, FaSearch } from "react-icons/fa";

export default function ClientsFilters() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
      {/* Search Input */}
      <div className="relative w-full sm:w-64">
        <FaSearch className="absolute top-3 left-25 sm:left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Clients"
          className="pl-10 pr-3 py-2 rounded bg-gray-200 focus:outline-none w-full text-center sm:text-left"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-2 px-4 py-2 border-0 rounded text-sm bg-gray-200 text-gray-600 cursor-pointer w-full sm:w-auto text-center">
          All Team Members <FaChevronDown className="text-xs" />
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border-0 rounded text-sm bg-gray-200 text-gray-600 cursor-pointer w-full sm:w-auto text-center">
          Filter <FaChevronDown className="text-xs" />
        </button>
      </div>
    </div>
  );
}
