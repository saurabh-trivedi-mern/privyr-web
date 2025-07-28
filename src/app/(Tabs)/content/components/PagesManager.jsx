'use client'

import { useState } from 'react'
import pages from '../data/pagesData.json'
import PageRow from './PageRow'
import { FaSearch, FaFolderOpen } from 'react-icons/fa'
import CreatePageModal from './CreatePageModal' // 👈 import the modal

export default function PagesManager({ showModal, onCloseModal }) {
  const [search, setSearch] = useState('')

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(search.toLowerCase())
  )

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
        <div className="flex flex-col items-center justify-center py-24 text-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-teal-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.5 4.5h9A1.5 1.5 0 0 1 18 6v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18V6a1.5 1.5 0 0 1 1.5-1.5Zm1.5 3v9h6v-9H9Z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-800">Welcome to your Pages</h2>
          <p className="mt-1 text-sm">
            Create, share, and track views on your custom pages to showcase your products, services, or events
          </p>
          <button className="mt-4 text-teal-600 font-semibold hover:underline">LEARN MORE</button>
        </div>
      )}

      {/* Create Page Modal - only rendered if true */}
      {showModal && <CreatePageModal onClose={onCloseModal} />}
    </div>
  )
}
