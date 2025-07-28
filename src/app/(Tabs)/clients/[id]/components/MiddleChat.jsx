'use client';
import React from 'react';
import chatData from '../data/chatData.json';
import { BsFillSendFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

export default function MiddleChat() {
  return (
    <div className="flex flex-col h-[87.5vh] relative bg-[#f5f5f5]">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-2 bg-white border-b">
        <FaUserCircle className="text-4xl text-gray-500" />
        <div className="flex flex-col">
          <h2 className="font-medium">Anthias Group</h2>
          <span className="text-sm text-gray-500">9054466162 · <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">new</span></span>
        </div>
        <div className="ml-auto flex items-center gap-4 text-gray-500 text-sm">
          <span className="cursor-pointer">👤 Human</span>
          <span>📊</span>
          <span>📞</span>
          <span>📍</span>
          <span>⋮</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 space-y-4 bg-[#f5f0e8]">
        {chatData.map((chat, idx) => (
          <div
            key={idx}
            className="flex justify-end"
          >
            <div className="flex flex-col items-end max-w-[70%]">
              <div className="bg-[#2c85f7] text-white p-4 rounded-xl text-sm whitespace-pre-line">
                {chat.message}
              </div>
              <div className="text-xs text-gray-700 mt-1">
                {chat.sender} · {chat.timeAgo}
              </div>
            </div>
            <FaUserCircle className="text-xl text-gray-500 ml-2 mt-auto" />
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="bg-white w-full absolute bottom-0 right-0 px-4 py-3 flex items-center border-t">
        <button className="mr-2 text-xl text-gray-500">📎</button>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border rounded-full bg-gray-100 outline-none"
        />
        <button className="ml-2 text-white bg-[#2c85f7] p-2 rounded-full">
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
}
