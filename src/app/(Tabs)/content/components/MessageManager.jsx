'use client'

import { useState } from 'react'
import messages from '../data/messagesData.json'
import MessageRow from './MessageRow'
import { FaSearch, FaFolderOpen } from 'react-icons/fa'

export default function MessageManager() {
  const [search, setSearch] = useState('')

  const filteredMessages = messages.filter(msg =>
    msg.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages"
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
      <div className="hidden md:grid grid-cols-12 gap-6 text-xs text-[#696D77] font-medium uppercase border-b-2 border-gray-200 pb-2">
        <div className="col-span-4">Title</div>
        <div className="col-span-4">Message Preview</div>
        <div className="col-span-2">Sent</div>
        <div className="col-span-2">Last Sent</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-4">
        {filteredMessages.map((msg) => (
          <MessageRow key={msg.id} message={msg} />
        ))}
      </div>

      {/* Empty State */}
      {filteredMessages.length > 0 && (
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
          <h2 className="text-lg font-semibold text-gray-800">Welcome to your Messages</h2>
          <p className="mt-1 text-sm">Create auto-personalised message templates to connect and follow up with your leads in seconds</p>
          <button className="mt-4 text-teal-600 font-semibold hover:underline">LEARN MORE</button>
        </div>
      )}
    </div>
  )
}
