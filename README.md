# Kesheng website design

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/wangyunjie1101-2718s-projects/v0-kesheng-website-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/ns2KeTsgAyS)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/wangyunjie1101-2718s-projects/v0-kesheng-website-design](https://vercel.com/wangyunjie1101-2718s-projects/v0-kesheng-website-design)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/ns2KeTsgAyS](https://v0.app/chat/ns2KeTsgAyS)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## 邮件配置

联系表单功能已集成，需要通过腾讯企业邮箱发送邮件。请配置以下环境变量：

### 环境变量配置

在项目根目录创建 `.env.local` 文件（不要提交到 Git），添加以下配置：

```env
# 腾讯企业邮箱 SMTP 配置
SMTP_HOST=smtp.exmail.qq.com
SMTP_PORT=465
SMTP_USER=lishengyang2@keshengcaidao.com
SMTP_PASSWORD=your_password_here
RECIPIENT_EMAIL=lishengyang2@keshengcaidao.com
```

### 重要提示

1. **SMTP_PASSWORD**: 如果您的邮箱开启了微信安全登录，需要使用"客户端专用密码"而不是普通密码
   - 登录邮箱 -> 设置 -> 收发信设置 -> 客户端专用密码 -> 生成新密码
   - 使用生成的客户端专用密码作为 `SMTP_PASSWORD`

2. **SMTP_PORT**: 
   - 使用 `465` 端口（SSL）
   - 或使用 `587` 端口（TLS），需要将 `secure` 设置为 `false`

3. **部署到 Vercel**: 
   - 在 Vercel 项目设置中添加上述环境变量
   - 确保 `SMTP_PASSWORD` 使用客户端专用密码

4. **部署到腾讯云服务器**: 
   - ⚠️ **重要**：不要将包含真实密码的 `.env.local` 文件提交到 Git！
   - 在服务器上单独创建 `.env.local` 文件并配置环境变量
   - 详细部署步骤请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)

## ⚠️ 安全提示

**绝对不要将邮箱密码等敏感信息提交到代码仓库！**

- ✅ `.env.local` 文件已在 `.gitignore` 中，不会被提交
- ✅ 使用 `.env.example` 作为模板（不包含真实密码）
- ✅ 在服务器上单独配置环境变量
- ❌ 不要将包含真实密码的文件上传到 Git
