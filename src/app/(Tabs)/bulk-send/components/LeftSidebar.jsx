'use client';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri';
import { PiChatsCircleBold, PiAddressBookBold } from 'react-icons/pi';
import leads from '../data/leads.json';

export default function LeftSidebar() {
  const [selectedIds, setSelectedIds] = useState([1, 3, 4, 5, 6]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full h-[87.5vh] bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-[#1DA1F2] text-white px-5 py-4 font-semibold text-lg flex items-center gap-2">
        <img src="/whatsapp-icon.svg" alt="WA" className="w-5 h-5" />
        Select Leads
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full rounded-md border border-gray-200 px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 pt-3 gap-2 text-sm font-medium text-gray-500 border-b border-gray-200">
        <button className="flex-1 flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-200 text-gray-900">
          <PiChatsCircleBold className="text-lg" /> Conversations
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 pb-2">
          <PiAddressBookBold className="text-lg" /> CRM Contacts
        </button>
      </div>

      {/* Recent Label */}
      <div className="text-xs text-gray-500 px-4 pt-3 pb-1 font-medium">RECENT</div>

      {/* Leads List */}
      <div className="overflow-y-auto no-scrollbar flex-1">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="flex items-start px-4 py-3 hover:bg-gray-50 border-b border-gray-200"
          >
            <button onClick={() => toggleSelect(lead.id)} className="mt-1 mr-3">
              {selectedIds.includes(lead.id) ? (
                <RiCheckboxLine className="text-blue-600 text-xl" />
              ) : (
                <RiCheckboxBlankLine className="text-gray-400 text-xl" />
              )}
            </button>

            <div className="flex-1 flex gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold">
                  {lead.avatarText}
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {lead.name}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  {lead.lastMessage}
                </div>
              </div>
              <div className="flex flex-col items-end text-xs text-gray-400">
                <span>{lead.time}</span>
                <span>0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
