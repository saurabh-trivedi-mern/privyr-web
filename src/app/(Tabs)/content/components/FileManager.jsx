'use client'

import { useState } from 'react'
import { FaFolderOpen, FaSearch } from 'react-icons/fa'
import files from '../data/filesData.json'
import FileCard from './FileCard'

export default function FileManager() {
  const [search, setSearch] = useState('')

  const filteredFiles = files.filter(file =>
    file.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full space-y-6">
      {/* Search and Folder Filter */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search files"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative w-full md:w-1/2">
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

      {/* Files List */}
      <div className="space-y-4">
        {filteredFiles.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>

      {/* Empty State */}
      {filteredFiles.length <3 && (
        <div className="flex flex-col items-center justify-center py-24 text-center text-gray-600">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-teal-500 mb-4">
            <path
              fill="currentColor"
              d="M7.92 2.751a2.25 2.25 0 0 0-3.17 0l-2 2a2.25 2.25 0 0 0 0 3.18l10.32 10.32a2.25 2.25 0 0 0 3.18 0l2-2a2.25 2.25 0 0 0 0-3.18L7.92 2.75Z"
            />
            <path
              fill="currentColor"
              d="M16.8 9.75 14.25 12.3 11.7 9.75l2.55-2.55 2.55 2.55Z"
              opacity=".5"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-800">Welcome to your Files</h2>
          <p className="mt-1 text-sm">Easily manage, share, and track your PDF documents all in one place</p>
          <button className="mt-4 text-teal-600 font-semibold hover:underline">LEARN MORE</button>
        </div>
      )}
    </div>
  )
}
