"use client"

import { useState } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { Language } from "@/lib/i18n/translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()

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
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <Link href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.services}
            </Link>
            <Link href="#advantages" onClick={(e) => handleNavClick(e, "#advantages")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.advantages}
            </Link>
            <Link href="#service-process" onClick={(e) => handleNavClick(e, "#service-process")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.process}
            </Link>
            <Link href="#team" onClick={(e) => handleNavClick(e, "#team")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.team}
            </Link>
            <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.about}
            </Link>
            <Link href="#hot-jobs" onClick={(e) => handleNavClick(e, "#hot-jobs")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.news}
            </Link>
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-xs lg:text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm font-medium">
                  {language === 'zh' ? '中文' : language === 'ja' ? '日本語' : 'English'}
                </span>
                <svg className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                    <button
                      onClick={() => {
                        setLanguage('zh')
                        setLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors rounded-t-lg ${
                        language === 'zh' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-700'
                      }`}
                    >
                      中文
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('ja')
                        setLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                        language === 'ja' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-700'
                      }`}
                    >
                      日本語
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors rounded-b-lg ${
                        language === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-700'
                      }`}
                    >
                      English
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <button 
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(e as any, "#contact")
              }}
              className="px-4 lg:px-6 py-2 text-xs lg:text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t.nav.contactUs}
            </button>
          </div>

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
            <Link href="#services" onClick={(e) => handleNavClick(e, "#services")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.services}
            </Link>
            <Link href="#advantages" onClick={(e) => handleNavClick(e, "#advantages")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.advantages}
            </Link>
            <Link href="#service-process" onClick={(e) => handleNavClick(e, "#service-process")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.process}
            </Link>
            <Link href="#team" onClick={(e) => handleNavClick(e, "#team")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.team}
            </Link>
            <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.about}
            </Link>
            <Link href="#hot-jobs" onClick={(e) => handleNavClick(e, "#hot-jobs")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.news}
            </Link>
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="block text-sm text-slate-600 hover:text-blue-600 py-2 whitespace-nowrap">
              {t.nav.contact}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 text-sm font-medium">语言 / Language</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLanguage('zh')
                      setIsOpen(false)
                    }}
                    className={`px-3 py-1 text-sm rounded ${
                      language === 'zh' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ja')
                      setIsOpen(false)
                    }}
                    className={`px-3 py-1 text-sm rounded ${
                      language === 'ja' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    日本語
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsOpen(false)
                    }}
                    className={`px-3 py-1 text-sm rounded ${
                      language === 'en' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
