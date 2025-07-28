'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaCheck, FaLink, FaPaperclip, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

export default function ProductOrEventFormModal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const router = useRouter();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleCancel = () => router.back();

  const handleSubmit = () => {
    console.log({ title, description, images });
    router.push('/content/pages');
  };

  const extraBlocks = [
    { icon: <FaLink />, label: 'Add Website Link' },
    { icon: <FaPaperclip />, label: 'Add Attachment' },
    { icon: <FaYoutube />, label: 'Add YouTube Video' },
    { icon: <FaMapMarkerAlt />, label: 'Add Google Map' }
  ];

  return (
    <div className="max-w-[1024px] w-full mx-auto px-4 sm:px-0 py-6">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-2">
        <span className="text-black font-medium">Content</span> {'>'}{' '}
        <span className="text-black font-medium">Pages</span> {'>'} Create New Page
      </p>

      {/* Heading */}
      <h1 className="text-[32px] font-bold mb-1">Create New Page</h1>
      <p className="text-[16px] font-normal text-black mb-6">Product or Event Page</p>

      {/* Form Container */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm space-y-6">

        {/* Title */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-[14px] font-normal">Title*</label>
            <span className="text-xs text-gray-500">Required <span className="text-red-500">*</span></span>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-100 px-3 py-2 rounded text-sm focus:outline-none border border-gray-200"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[14px] font-normal mb-1">Description</label>
          <label className="block text-[12px] text-[#696D77] font-normal mb-1">Add a description about your product or event</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-100 px-3 py-2 rounded text-sm focus:outline-none border border-gray-200 resize-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-[14px] font-normal">Image Gallery*</label>
            <span className="text-xs text-gray-500">Required <span className="text-red-500">*</span></span>
          </div>
          <p className="text-[12px] text-[#696D77] font-normal mb-1">
            Add images by clicking on 'Upload Images' below
          </p>

          <label
            htmlFor="image-upload"
            className="w-full border-dashed border-2 border-gray-300 p-6 flex items-center justify-center rounded-md cursor-pointer text-[#006398] hover:bg-gray-50 text-sm font-medium gap-2"
          >
            <FaPlus className="text-[#006398]" />
            Upload Images
          </label>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Extra Add-on Blocks */}
        <div className="space-y-2">
          {extraBlocks.map((block, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 bg-[#EAF5FF] hover:bg-[#dceaf6] rounded-md text-sm font-medium text-[#006398] cursor-pointer"
            >
              <FaPlus className="text-[#006398]" />
              {block.icon}
              <span>{block.label}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            onClick={handleCancel}
            className="w-full sm:w-1/4 bg-[#D4EBF0] text-[var(--theme-color)] py-2 rounded font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-3/4 bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white py-2 rounded font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaCheck className="text-sm" />
            Create Page
          </button>
        </div>
      </div>
    </div>
  );
}
