'use client'

import { useState } from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'

const tabs = ['All Clients', 'Uncontacted', 'Follow Ups', 'Recently Viewed Content']

const mockClients = Array.from({ length: 20 }, (_, i) => ({
  name: i === 0 ? 'Rishav' : `Client ${i}`,
  tag: i === 0 ? 'Rian Info' : 'Arpan S.',
  source: 'Lead via LinkedIn - Lead Gen - AI Agents Campaign',
  activity: i === 0 ? '25 minutes ago' : '1 month ago',
  date: `Jun ${2 + i}, 03:${15 + i} PM`,
}))

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header + Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Clients</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-between">
        <div className="flex gap-15">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`pb-2 border-b-2 transition text-[14px] font-medium ${
              activeTab === i
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
            ))}
        </div>
        <button className="bg-[var(--theme-color)] text-white px-4 py-2 rounded hover:bg-[var(--theme-hover-color)] cursor-pointer">
          + Add New Client
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="relative w-full sm:w-64">
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Clients"
            className="pl-10 pr-3 py-2 rounded w-full focus:outline-none border-0 bg-gray-200"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border-0 rounded text-sm bg-gray-200 text-gray-600">
          All Team Members <FaChevronDown className="text-xs" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border-0 rounded text-sm bg-gray-200 text-gray-600">
          Filter <FaChevronDown className="text-xs" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-auto border rounded-md">
        <table className="min-w-full bg-white">
          <thead className="text-left text-sm text-gray-500 border-b">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Details</th>
              <th className="p-4">Last Activity</th>
              <th className="p-4">Date Added</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {mockClients.map((client, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">{client.name}</td>
                <td className="p-4 space-x-2">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
                    {client.tag}
                  </span>
                  <span className="text-gray-500">{client.source}</span>
                </td>
                <td className="p-4 text-gray-600">{client.activity}</td>
                <td className="p-4 text-gray-600">{client.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-4">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 text-sm rounded ${
              page === 1
                ? 'bg-[var(--theme-color)] text-white'
                : 'bg-white border text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
