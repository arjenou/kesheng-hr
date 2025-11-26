"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    alert("感谢您的留言，我们会尽快与您联系！")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">联系我们</h2>
          <p className="text-lg text-slate-600">有任何问题或需要帮助？请填写下方表格，我们会在24小时内与您联系</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="font-bold text-slate-900 mb-2">北京</h3>
            <p className="text-sm text-slate-600">
              昌平区科星西路106号
              <br />
              国风美唐综合楼2号楼701
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <h3 className="font-bold text-slate-900 mb-2">东京</h3>
            <p className="text-sm text-slate-600">
              日本东京丰岛区1 Chome-19-1
              <br />
              Higashiikebukuro
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200">
            <h3 className="font-bold text-slate-900 mb-2">邮箱</h3>
            <p className="text-sm text-slate-600">
              <a href="mailto:contact@keshengcaidao.com" className="text-indigo-600 hover:underline">
                contact@keshengcaidao.com
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">姓名</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="请输入您的姓名"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">邮箱</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="请输入您的邮箱"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">电话</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="请输入您的电话"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">公司名称</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="请输入您的公司名称"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2">留言</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="请输入您的留言内容"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            提交表格
          </button>
        </form>
      </div>
    </section>
  )
}
