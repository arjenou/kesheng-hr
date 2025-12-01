'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations, Translations } from './translations'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh')

  useEffect(() => {
    // 从localStorage读取保存的语言设置
    const savedLang = localStorage.getItem('language') as Language
    let lang: Language = 'zh'
    if (savedLang && (savedLang === 'zh' || savedLang === 'ja' || savedLang === 'en')) {
      lang = savedLang
    } else {
      // 根据浏览器语言自动检测
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('ja')) {
        lang = 'ja'
      } else if (browserLang.startsWith('en')) {
        lang = 'en'
      }
    }
    setLanguageState(lang)
    // 更新html lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en'
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // 更新html lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en'
  }

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
