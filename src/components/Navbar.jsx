"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import { FaStackExchange } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Clients", href: "/clients", icon: <IoIosPeople /> },
  { label: "Content", href: "/content", icon: <CgFileDocument /> },
  { label: "Activities", href: "/activities", icon: <FaStackExchange /> },
  { label: "Bulk Send", href: "/bulk-send", icon: <IoIosPeople /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo + Mobile Menu Toggle */}
        <div className="flex items-center gap-4 sm:hidden">
          <Link href="/" className="text-cyan-600 font-bold text-xl">
            🔗
          </Link>
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center justify-center">
          <Link href="/" className="text-cyan-600 font-bold text-xl">
            🔗
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 text-[16px] font-medium transition py-3 ${
                pathname.startsWith(link.href)
                  ? "text-[var(--theme-color)] border-b-4"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Avatar */}
        <div>
          <FaUserCircle className="text-2xl text-gray-500" />
        </div>
      </div>

      {/* Floating Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 text-[16px] font-medium py-2 px-2 rounded transition ${
                pathname.startsWith(link.href)
                  ? "text-[var(--theme-color)] bg-gray-100"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
