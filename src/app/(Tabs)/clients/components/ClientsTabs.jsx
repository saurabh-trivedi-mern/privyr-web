"use client";
import React, { useState } from "react";
import AddClientModal from "./AddClientModal"; 

const tabs = [
  "All Clients",
  "Uncontacted",
  "Follow Ups",
  "Recently Viewed Content",
];

export default function ClientsTabs({ activeTab, setActiveTab }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row md:relative justify-between items-start md:items-center gap-4 mb-3 sm:mb-0">
        {/* Tabs */}
        <div className="bg-white p-2 w-full md:w-auto">
          <div className="flex flex-wrap gap-4 md:gap-10">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-2 border-b-2 transition text-[14px] font-medium cursor-pointer ${
                  activeTab === i
                    ? "border-black text-black"
                    : "border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Add Client Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-[var(--theme-color)] md:absolute md:right-0 md:bottom-5 text-[14px] text-white font-medium uppercase px-4 py-3 rounded-[2px] hover:bg-[var(--theme-hover-color)] cursor-pointer w-full md:w-auto"
        >
          + Add New Client
        </button>
      </div>

      {/* Modal */}
      {showModal && <AddClientModal onClose={() => setShowModal(false)} />}
    </>
  );
}
