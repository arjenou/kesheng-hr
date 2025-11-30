"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 100 // 导航栏高度 + 一些额外间距
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false) // 移动端点击后关闭菜单
  }

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/e9254cce6107f0a3d6ff66169641adaa.png" alt="KESHENG Logo" className="h-40 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#client-logos" onClick={(e) => handleNavClick(e, "#client-logos")} className="text-slate-600 hover:text-blue-600 transition-colors">
              合作伙伴
            </Link>
            <Link href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-slate-600 hover:text-blue-600 transition-colors">
              服务介绍
            </Link>
            <Link href="#advantages" onClick={(e) => handleNavClick(e, "#advantages")} className="text-slate-600 hover:text-blue-600 transition-colors">
              核心优势
            </Link>
            <Link href="#service-process" onClick={(e) => handleNavClick(e, "#service-process")} className="text-slate-600 hover:text-blue-600 transition-colors">
              服务流程
            </Link>
            <Link href="#team" onClick={(e) => handleNavClick(e, "#team")} className="text-slate-600 hover:text-blue-600 transition-colors">
              我们的团队
            </Link>
            <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-slate-600 hover:text-blue-600 transition-colors">
              关于我们
            </Link>
            <Link href="#hot-jobs" onClick={(e) => handleNavClick(e, "#hot-jobs")} className="text-slate-600 hover:text-blue-600 transition-colors">
              公司动态
            </Link>
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-slate-600 hover:text-blue-600 transition-colors">
              联系我们
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(e as any, "#contact")
            }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-0.5"
          >
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
          <nav className="md:hidden pb-4 space-y-2 bg-white/70 backdrop-blur-md">
            <Link href="#client-logos" onClick={(e) => handleNavClick(e, "#client-logos")} className="block text-slate-600 hover:text-blue-600 py-2">
              合作伙伴
            </Link>
            <Link href="#services" onClick={(e) => handleNavClick(e, "#services")} className="block text-slate-600 hover:text-blue-600 py-2">
              服务介绍
            </Link>
            <Link href="#advantages" onClick={(e) => handleNavClick(e, "#advantages")} className="block text-slate-600 hover:text-blue-600 py-2">
              核心优势
            </Link>
            <Link href="#service-process" onClick={(e) => handleNavClick(e, "#service-process")} className="block text-slate-600 hover:text-blue-600 py-2">
              服务流程
            </Link>
            <Link href="#team" onClick={(e) => handleNavClick(e, "#team")} className="block text-slate-600 hover:text-blue-600 py-2">
              我们的团队
            </Link>
            <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="block text-slate-600 hover:text-blue-600 py-2">
              关于我们
            </Link>
            <Link href="#hot-jobs" onClick={(e) => handleNavClick(e, "#hot-jobs")} className="block text-slate-600 hover:text-blue-600 py-2">
              公司动态
            </Link>
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="block text-slate-600 hover:text-blue-600 py-2">
              联系我们
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
