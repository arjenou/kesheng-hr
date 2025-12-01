"use client"

import type React from "react"

import { useState } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function Contact() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ company: "", name: "", phone: "", email: "", address: "", message: "" })
    alert(t.contact.successMessage)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* PC端标题 */}
        <div className="hidden lg:block text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">{t.contact.title}</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
        </div>

        {/* PC端：左右两栏布局 */}
        <div className="hidden lg:flex lg:justify-center gap-8 items-stretch">
          {/* 左侧：表单 */}
          <div className="max-w-2xl flex-1 flex">
            <form onSubmit={handleSubmit} className="form-style w-full flex flex-col">
              <p className="title-style">
                {t.contact.formTitle}
              </p>
              <p className="message-style">{t.contact.formMessage}</p>

              <div className="flex gap-2">
                <label className="form-label">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="input-style"
                    placeholder=" "
                  />
                  <span>{t.contact.company}</span>
                </label>
                <label className="form-label">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-style"
                    placeholder=" "
                  />
                  <span>{t.contact.name}</span>
                </label>
              </div>

              <div className="flex gap-2">
                <label className="form-label">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-style"
                    placeholder=" "
                  />
                  <span>{t.contact.phone}</span>
                </label>
                <label className="form-label">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-style"
                    placeholder=" "
                  />
                  <span>{t.contact.email}</span>
                </label>
              </div>

              <label className="form-label">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="input-style"
                  placeholder=" "
                />
                <span>{t.contact.address}</span>
              </label>

              <label className="form-label">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-style resize-none pt-3"
                  placeholder=" "
                ></textarea>
                <span>{t.contact.message}</span>
              </label>

              <button type="submit" className="submit-style mt-auto">
                {t.contact.submit}
              </button>
            </form>
          </div>

          {/* 右侧：联系信息卡片 */}
          <div className="max-w-sm flex-shrink-0 flex">
            <div className="bg-white rounded-2xl p-6 w-full sticky top-8 shadow-lg border border-slate-100 flex flex-col">
              <div className="space-y-6">
                {/* 地址 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{t.contact.address}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t.contact.beijing}：{t.contact.beijingAddress}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      {t.contact.hebei}：{t.contact.hebeiAddress}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      {t.contact.tokyo}：{t.contact.tokyoAddress}
                    </p>
                  </div>
                </div>

                {/* 邮件 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{t.contact.consultNow}</h3>
                    <a href="mailto:lishengyang3@keshengcaidao.com" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      lishengyang3@keshengcaidao.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/73024403/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* 二维码 */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-slate-900 mb-4">{t.contact.followUs}</h3>
                    <div className="flex justify-center">
                      <img 
                        src="/公众号.png" 
                        alt="公众号二维码" 
                        className="w-40 h-40 object-contain"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-3">{t.contact.scanQRCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 移动端：使用新设计 */}
        <div className="lg:hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">{t.contact.title}</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          </div>

          <form onSubmit={handleSubmit} className="form-style">
            <p className="title-style">
              {t.contact.formTitle}
            </p>
            <p className="message-style">{t.contact.formMessage}</p>

            <div className="flex flex-col gap-4">
              <label className="form-label">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="input-style"
                  placeholder=" "
                />
                <span>{t.contact.company}</span>
              </label>
              <label className="form-label">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-style"
                  placeholder=" "
                />
                <span>{t.contact.name}</span>
              </label>
              <label className="form-label">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-style"
                  placeholder=" "
                />
                <span>{t.contact.phone}</span>
              </label>
              <label className="form-label">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-style"
                  placeholder=" "
                />
                <span>{t.contact.email}</span>
              </label>
              <label className="form-label">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="input-style"
                  placeholder=" "
                />
                <span>{t.contact.address}</span>
              </label>
              <label className="form-label">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-style resize-none pt-3"
                  placeholder=" "
                ></textarea>
                <span>{t.contact.message}</span>
              </label>
            </div>

            <button type="submit" className="submit-style">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
