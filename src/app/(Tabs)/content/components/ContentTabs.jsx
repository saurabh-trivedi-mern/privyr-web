// ContentTabs.jsx
"use client";
import React from "react";

const tabs = ["Message", "Files", "Pages"];

export default function ContentTabs({ activeTab, setActiveTab, actionLabel, onAction }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3 sm:mb-0">
      {/* Tabs */}
      <div className="bg-white p-3 w-full md:w-auto">
        <div className="flex flex-wrap gap-4 md:gap-10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`p-2 border-b-2 transition text-[14px] font-medium cursor-pointer ${
                activeTab === i
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Button */}
      <button
        onClick={onAction}
        className="bg-[var(--theme-color)] text-[14px] text-white font-medium uppercase px-4 py-3 rounded hover:bg-[var(--theme-hover-color)] cursor-pointer w-full md:w-auto"
      >
        + {actionLabel}
      </button>
    </div>
  );
}
