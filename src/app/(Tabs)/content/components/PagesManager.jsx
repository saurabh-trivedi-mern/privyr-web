"use client";

import { useState } from "react";
import pages from "../data/pagesData.json";
import PageRow from "./PageRow";
import { FaSearch, FaFolderOpen, FaFileAlt } from "react-icons/fa";
import CreatePageModal from "./CreatePageModal"; // 👈 import the modal

export default function PagesManager({ showModal, onCloseModal }) {
  const [search, setSearch] = useState("");

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search pages"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2">
          <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-700">
            <span className="flex items-center gap-2">
              <FaFolderOpen className="text-gray-500" />
              All Folders
            </span>
            <span>&gt;</span>
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-12 text-xs text-gray-500 font-medium uppercase border-b-2 border-gray-200 pb-2">
        <div className="col-span-6">Title</div>
        <div className="col-span-3">Shared</div>
        <div className="col-span-3">Last Shared</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-4">
        {filteredPages.map((page) => (
          <PageRow key={page.id} page={page} />
        ))}
      </div>

      {/* Empty State */}
      {filteredPages.length > 0 && (
        <div className="flex flex-col items-center justify-center py-5 text-center text-gray-600">
          <FaFileAlt size={25} className="text-[var(--theme-color)] mb-2" />
          <h2 className="text-[14px] font-medium text-[#282D36]mb-1">
            Welcome to your Pages
          </h2>
          <p className="mt-1 max-w-70 text-[14px] text-black">
            Create, share, and track views on your custom pages to showcase your products, services, or events
          </p>
          <button className="mt-4 text-[var(--theme-color)] font-semibold hover:underline">
            LEARN MORE
          </button>
        </div>
      )}

      {/* Create Page Modal - only rendered if true */}
      {showModal && <CreatePageModal onClose={onCloseModal} />}
    </div>
  );
}
