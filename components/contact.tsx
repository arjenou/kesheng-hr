"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
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
    alert("感谢您的留言，我们会尽快与您联系！")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* PC端标题 */}
        <div className="hidden lg:block text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">联系我们</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
        </div>

        {/* PC端：左右两栏布局 */}
        <div className="hidden lg:flex lg:justify-center gap-8">
          {/* 左侧：表单 */}
          <div className="max-w-2xl flex-1">
            <form onSubmit={handleSubmit} className="form-style">
              <p className="title-style">
                联系我们
              </p>
              <p className="message-style">填写表单，我们会尽快与您联系</p>

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
                  <span>公司名称</span>
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
                  <span>姓名</span>
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
                  <span>电话号码</span>
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
                  <span>邮箱</span>
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
                <span>地址</span>
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
                <span>咨询内容</span>
              </label>

              <button type="submit" className="submit-style">
                提交
              </button>
            </form>
          </div>

          {/* 右侧：联系信息卡片 */}
          <div className="max-w-sm flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 h-fit sticky top-8 shadow-lg border border-slate-100">
              <div className="space-y-6">
                {/* 地址 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">住所</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      北京：昌平区科星西路106号国风美唐综合楼2号楼701
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      东京：日本东京丰岛区1 Chome-19-1 Higashiikebukuro, Toshima City, Tokyo 170-0013
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      河北：邢台市信都区河北机电大学
                    </p>
                  </div>
                </div>

                {/* 电话号码 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">电话号码</h3>
                    <a href="tel:" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      请通过邮件联系我们
                    </a>
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
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">现在咨询</h3>
                    <a href="mailto:lishengyang3@keshengcaidao.com" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      lishengyang3@keshengcaidao.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 移动端：使用新设计 */}
        <div className="lg:hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">联系我们</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          </div>

          <form onSubmit={handleSubmit} className="form-style">
            <p className="title-style">
              联系我们
            </p>
            <p className="message-style">填写表单，我们会尽快与您联系</p>

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
                <span>公司名称</span>
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
                <span>姓名</span>
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
                <span>电话号码</span>
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
                <span>邮箱</span>
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
                <span>地址</span>
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
                <span>咨询内容</span>
              </label>
            </div>

            <button type="submit" className="submit-style">
              提交
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
