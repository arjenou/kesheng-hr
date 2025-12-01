"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export default function Footer() {
  const { t } = useI18n()
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
          <p className="text-sm text-white/80">{t.footer.tagline}</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          <Link 
            href="#services" 
            onClick={(e) => handleNavClick(e, "#services")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.services}
          </Link>
          <Link 
            href="#advantages" 
            onClick={(e) => handleNavClick(e, "#advantages")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.advantages}
          </Link>
          <Link 
            href="#service-process" 
            onClick={(e) => handleNavClick(e, "#service-process")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.process}
          </Link>
          <Link 
            href="#team" 
            onClick={(e) => handleNavClick(e, "#team")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.team}
          </Link>
          <Link 
            href="#about" 
            onClick={(e) => handleNavClick(e, "#about")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.about}
          </Link>
          <Link 
            href="#hot-jobs" 
            onClick={(e) => handleNavClick(e, "#hot-jobs")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.news}
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "#contact")} 
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-white/70">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
