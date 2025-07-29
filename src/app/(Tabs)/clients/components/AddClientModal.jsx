"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AddClientModal({ onClose }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white max-w-lg w-full rounded-md shadow-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <IoMdClose size={22} />
        </button>

        {/* Title */}
        <h2 className="text-[32px] font-bold mb-4">Add New Client</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Client Name */}
          <div>
            <label className="font-medium">Client Name*</label>
            <input
              type="text"
              placeholder="e.g. Katherine Lim"
              className="w-full mt-1 p-2 border border-gray-200 rounded bg-gray-100 focus:outline-0"
            />
          </div>

          {/* Display Name */}
          <div>
            <label className="font-medium">Display Name</label>
            <input
              type="text"
              placeholder="e.g. Katherine"
              className="w-full mt-1 p-2 border border-gray-200 rounded bg-gray-100 focus:outline-0"
            />
            <p className="text-xs text-gray-500 mt-1">
              Display name is what your clients will see.{" "}
              <a
                href="#"
                className="text-blue-600 underline inline-flex items-center"
              >
                Learn More
              </a>
            </p>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="font-medium">Mobile Number</label>
            <PhoneInput
              country={"in"}
              value={mobileNumber}
              onChange={setMobileNumber}
              inputClass="!w-full !bg-gray-100 !border !border-gray-200 !rounded !py-2 !pl-12 !text-sm"
              buttonClass="!border !border-gray-200 !bg-white"
              containerClass="!w-full"
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="font-medium">WhatsApp Number</label>
            <PhoneInput
              country={"in"}
              value={whatsappNumber}
              onChange={setWhatsappNumber}
              inputClass="!w-full !bg-gray-100 !border !border-gray-200 !rounded !py-2 !pl-12 !text-sm"
              buttonClass="!border !border-gray-200 !bg-white"
              containerClass="!w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              placeholder="e.g. email@example.com"
              className="w-full mt-1 p-2 border border-gray-200 rounded bg-gray-100 focus:outline-0"
            />
          </div>

          {/* Save */}
          <button
            type="submit"
            className="mt-4 w-full bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white uppercase font-medium py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
