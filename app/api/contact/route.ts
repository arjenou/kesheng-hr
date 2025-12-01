import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { company, name, phone, email, address, message } = body

    // 验证必填字段
    if (!company || !name || !phone || !email || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      )
    }

    // 获取环境变量
    const smtpHost = process.env.SMTP_HOST || 'smtp.exmail.qq.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465') // 默认使用 465 端口（SSL）
    const smtpUser = process.env.SMTP_USER || 'lishengyang2@keshengcaidao.com'
    const smtpPassword = process.env.SMTP_PASSWORD
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'lishengyang2@keshengcaidao.com'

    if (!smtpPassword) {
      console.error('SMTP_PASSWORD 环境变量未设置')
      return NextResponse.json(
        { error: '邮件服务器配置错误' },
        { status: 500 }
      )
    }

    // 清理密码（移除所有空格，包括中间的空格）
    // 客户端专用密码通常是连续的字符串，不应该有空格
    const cleanPassword = smtpPassword.replace(/\s+/g, '').trim()
    
    // 调试信息（仅开发环境）
    if (process.env.NODE_ENV === 'development') {
      console.log('=== SMTP 配置信息 ===')
      console.log('Host:', smtpHost)
      console.log('Port:', smtpPort)
      console.log('User:', smtpUser.trim())
      console.log('Password length:', cleanPassword.length)
      console.log('Password (first 4 chars):', cleanPassword.substring(0, 4))
      console.log('Password (last 4 chars):', cleanPassword.substring(cleanPassword.length - 4))
      console.log('Original password length:', smtpPassword.length)
      console.log('========================')
    }
    
    // 创建邮件传输器
    // 根据腾讯企业邮箱官方文档：SMTP 使用 465 端口，SSL 加密
    // 参考：https://open.work.weixin.qq.com/help2/pc/14931
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true, // 465 端口必须使用 SSL，等同于 client.Connect(host, port, true)
      auth: {
        user: smtpUser.trim(), // 发件箱地址
        pass: cleanPassword, // 客户端专用密码
      },
      // SSL/TLS 配置
      tls: {
        rejectUnauthorized: false, // 不验证证书（某些环境下可能需要）
      },
      // 添加超时设置
      connectionTimeout: 20000, // 20秒连接超时
      greetingTimeout: 20000, // 20秒问候超时
      socketTimeout: 20000, // 20秒socket超时
      // 添加调试信息（开发环境）
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
    })

    // 不进行 verify() 验证，直接发送邮件（避免卡住）
    // verify() 在某些网络环境下可能会超时

    // 邮件内容
    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `【联系表单】来自 ${company} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            新的联系表单提交
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">公司名称：</td>
                <td style="padding: 8px 0; color: #1f2937;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">联系人：</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">联系电话：</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">电子邮箱：</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${address ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">地址：</td>
                <td style="padding: 8px 0; color: #1f2937;">${address}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">留言内容：</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px; color: #1f2937; white-space: pre-wrap; line-height: 1.6;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>此邮件由网站联系表单自动发送</p>
            <p>提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
          </div>
        </div>
      `,
      text: `
新的联系表单提交

公司名称：${company}
联系人：${name}
联系电话：${phone}
电子邮箱：${email}
${address ? `地址：${address}` : ''}

留言内容：
${message}

---
此邮件由网站联系表单自动发送
提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
      `,
    }

    // 准备确认邮件内容
    const confirmationMailOptions = {
      from: `"科盛咨询" <${smtpUser}>`,
      to: email, // 发送给提交表单的用户
      subject: `【科盛咨询】感谢您的咨询 - 我们会尽快与您联系`,
      html: `
        <div style="font-family: Arial, 'Microsoft YaHei', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <!-- Logo/Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 28px; font-weight: 600;">科盛咨询</h1>
              <p style="color: #6b7280; margin: 8px 0 0 0; font-size: 14px;">KESHENG Consulting</p>
            </div>
            
            <!-- Greeting -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 22px;">尊敬的 ${name}，</h2>
              <p style="color: #374151; line-height: 1.8; margin: 0; font-size: 16px;">
                感谢您通过我们的联系表单提交咨询。我们已经收到您的信息，我们的团队会在<strong style="color: #2563eb;">24小时内</strong>与您取得联系。
              </p>
            </div>
            
            <!-- Submitted Info -->
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">您提交的信息：</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 100px;">公司名称：</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">联系电话：</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${phone}</td>
                </tr>
                ${address ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">地址：</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${address}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <!-- Next Steps -->
            <div style="border-left: 4px solid #2563eb; padding-left: 20px; margin-bottom: 30px;">
              <h3 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">接下来：</h3>
              <ul style="color: #374151; line-height: 1.8; margin: 0; padding-left: 20px; font-size: 14px;">
                <li>我们的专业顾问会仔细审阅您的需求</li>
                <li>我们会在24小时内通过电话或邮件与您联系</li>
                <li>如有紧急需求，请直接致电我们的客服热线</li>
              </ul>
            </div>
            
            <!-- Contact Info -->
            <div style="background-color: #eff6ff; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
              <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">联系我们：</h3>
              <p style="color: #1e40af; margin: 5px 0; font-size: 14px;">
                📧 邮箱：<a href="mailto:lishengyang2@keshengcaidao.com" style="color: #2563eb; text-decoration: none;">lishengyang2@keshengcaidao.com</a>
              </p>
              <p style="color: #1e40af; margin: 5px 0; font-size: 14px;">
                🌐 网站：<a href="https://keshengcaidao.com" style="color: #2563eb; text-decoration: none;">keshengcaidao.com</a>
              </p>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 12px; margin: 5px 0; line-height: 1.6;">
                此邮件为自动发送的确认邮件，请勿直接回复。<br>
                如有任何疑问，请通过上述联系方式与我们取得联系。
              </p>
              <p style="color: #9ca3af; font-size: 11px; margin: 15px 0 0 0;">
                提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
尊敬的 ${name}，

感谢您通过我们的联系表单提交咨询。我们已经收到您的信息，我们的团队会在24小时内与您取得联系。

您提交的信息：
- 公司名称：${company}
- 联系电话：${phone}
${address ? `- 地址：${address}` : ''}

接下来：
- 我们的专业顾问会仔细审阅您的需求
- 我们会在24小时内通过电话或邮件与您联系
- 如有紧急需求，请直接致电我们的客服热线

联系我们：
邮箱：lishengyang2@keshengcaidao.com
网站：keshengcaidao.com

---
此邮件为自动发送的确认邮件，请勿直接回复。
提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
      `,
    }

    // 立即返回成功响应，不等待邮件发送完成
    // 邮件发送在后台异步进行
    Promise.all([
      transporter.sendMail(mailOptions).catch((error) => {
        console.error('发送管理员邮件失败:', error)
      }),
      transporter.sendMail(confirmationMailOptions).catch((error) => {
        console.error('发送确认邮件失败:', error)
      }),
    ]).then((results) => {
      const [adminResult, confirmationResult] = results
      if (adminResult) {
        console.log('管理员邮件已发送:', adminResult.messageId)
      }
      if (confirmationResult) {
        console.log('确认邮件已发送给用户:', email, confirmationResult.messageId)
      }
    }).catch((error) => {
      console.error('邮件发送过程中出现错误:', error)
    })

    // 立即返回成功响应，提升用户体验
    return NextResponse.json(
      {
        success: true,
        message: '表单提交成功，我们会尽快与您联系',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('邮件发送失败:', error)
    
    // 处理认证错误
    if (error instanceof Error && 'code' in error && error.code === 'EAUTH') {
      const errorMessage = error.message || ''
      const isSystemBusy = errorMessage.includes('system busy')
      
      return NextResponse.json(
        {
          error: '邮件认证失败',
          details: isSystemBusy 
            ? '服务器繁忙或 SMTP 服务未开启。请检查：1) 在邮箱设置中开启 POP3/SMTP 服务 2) 确认客户端专用密码正确 3) 等待几分钟后重试'
            : '请检查：1) 客户端专用密码是否正确 2) 是否在邮箱设置中开启了 POP3/SMTP 服务 3) 邮箱账号是否正确',
          message: errorMessage,
          troubleshooting: [
            '登录腾讯企业邮箱网页版',
            '进入：设置 → 收发信设置',
            '确保已开启 POP3/SMTP 服务',
            '确认客户端专用密码已正确生成',
          ],
        },
        { status: 401 }
      )
    }
    
    // 处理超时错误
    if (error instanceof Error && 'code' in error && error.code === 'ETIMEDOUT') {
      return NextResponse.json(
        {
          error: '连接超时',
          details: '邮件服务器响应超时，请稍后重试',
          message: error.message,
        },
        { status: 504 }
      )
    }
    
    return NextResponse.json(
      {
        error: '邮件发送失败，请稍后重试',
        details: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    )
  }
}

