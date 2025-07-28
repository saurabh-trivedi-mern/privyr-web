// CreatePageModal.jsx
"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation"; // ✅ Add this

const templates = [
  {
    title: "Product or Event Page",
    description: "Showcase product details or event info",
    emoji: "🛍️",
    type: "product-event", // pass type
  },
  {
    title: "Image Gallery",
    description: "Share multiple images beautifully",
    emoji: "🖼️",
    type: "image-gallery",
  },
];

export default function CreatePageModal({ onClose }) {
  const router = useRouter(); // ✅

  const handleTemplateClick = (template) => {
    if (template.type) {
      router.push(`/content/pages/create-new-page?type=${template.type}`);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoMdClose size={22} />
        </button>

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-2">
          <h2 className="text-lg font-semibold">Choose a Page Template</h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-4">
          {templates.map((tpl, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 cursor-pointer hover:shadow transition"
              onClick={() => handleTemplateClick(tpl)} // ✅ handle click
            >
              <div className="text-2xl mb-2">{tpl.emoji}</div>
              <h3 className="text-base font-semibold mb-1">{tpl.title}</h3>
              <p className="text-sm text-gray-600">{tpl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
