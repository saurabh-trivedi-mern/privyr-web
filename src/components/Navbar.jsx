'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'

const navLinks = [
  { label: 'Clients', href: '/clients' },
  { label: 'Content', href: '/content' },
  { label: 'Activities', href: '/activities' },
  { label: 'Bulk Send', href: '/bulk-send' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-cyan-600 font-bold text-xl">
          <span className="inline-block align-middle">🔗</span> Privyr
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname.startsWith(link.href)
                  ? 'text-cyan-600'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Avatar */}
        <FaUserCircle className="text-2xl text-gray-500" />
      </div>
    </nav>
  )
}
