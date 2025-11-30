"use client"

import Link from "next/link"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-[#1C2036] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="mb-4">
            <img src="/kesheng-logo.png" alt="KESHENG Logo" className="h-24 w-auto mx-auto" />
          </div>
          <p className="text-sm text-white/80">致力于为全球 AI 与科技企业提供高端人才与组织解决方案</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          <Link 
            href="#client-logos" 
            onClick={(e) => handleNavClick(e, "#client-logos")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            合作伙伴
          </Link>
          <Link 
            href="#services" 
            onClick={(e) => handleNavClick(e, "#services")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            服务介绍
          </Link>
          <Link 
            href="#advantages" 
            onClick={(e) => handleNavClick(e, "#advantages")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            核心优势
          </Link>
          <Link 
            href="#service-process" 
            onClick={(e) => handleNavClick(e, "#service-process")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            服务流程
          </Link>
          <Link 
            href="#team" 
            onClick={(e) => handleNavClick(e, "#team")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            我们的团队
          </Link>
          <Link 
            href="#about" 
            onClick={(e) => handleNavClick(e, "#about")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            关于我们
          </Link>
          <Link 
            href="#hot-jobs" 
            onClick={(e) => handleNavClick(e, "#hot-jobs")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            公司动态
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "#contact")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            联系我们
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-white/70">
          <p>株式会社科盛 KESHENG Consulting. all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
