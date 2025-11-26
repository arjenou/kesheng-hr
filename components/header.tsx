"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/kesheng-logo.png" alt="KESHENG Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
              关于我们
            </Link>
            <Link href="#advantages" className="text-slate-600 hover:text-blue-600 transition-colors">
              核心优势
            </Link>
            <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
              服务介绍
            </Link>
            <Link href="#team" className="text-slate-600 hover:text-blue-600 transition-colors">
              团队
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              联系我们
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
            联系我们
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#about" className="block text-slate-600 hover:text-blue-600 py-2">
              关于我们
            </Link>
            <Link href="#advantages" className="block text-slate-600 hover:text-blue-600 py-2">
              核心优势
            </Link>
            <Link href="#services" className="block text-slate-600 hover:text-blue-600 py-2">
              服务介绍
            </Link>
            <Link href="#team" className="block text-slate-600 hover:text-blue-600 py-2">
              团队
            </Link>
            <Link href="#contact" className="block text-slate-600 hover:text-blue-600 py-2">
              联系我们
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
