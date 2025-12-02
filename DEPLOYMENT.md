# 腾讯云轻量服务器部署指南

## ⚠️ 重要安全提示

**绝对不要将邮箱密码等敏感信息提交到代码仓库！**

所有敏感信息（如 `SMTP_PASSWORD`）都应该通过环境变量在服务器上单独配置。

## 部署步骤

### 1. 服务器准备

确保服务器已安装：
- Node.js 18+ 或 20+
- pnpm（推荐）或 npm
- Git
- PM2（用于进程管理，可选）

```bash
# 安装 Node.js（如果未安装）
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 pnpm
npm install -g pnpm

# 安装 PM2（可选，用于进程管理）
npm install -g pm2
```

### 2. 克隆代码到服务器

```bash
cd /var/www  # 或您选择的目录
git clone https://github.com/arjenou/kesheng-hr.git
cd kesheng-hr
```

### 3. 安装依赖

```bash
pnpm install
```

### 4. 配置环境变量

**在服务器上创建 `.env.local` 文件**（不要从本地复制包含真实密码的文件）：

```bash
cd /var/www/kesheng-hr
nano .env.local  # 或使用 vim
```

添加以下内容（替换为您的真实值）：

```env
# 腾讯企业邮箱 SMTP 配置
SMTP_HOST=smtp.exmail.qq.com
SMTP_PORT=465
SMTP_USER=lishengyang2@keshengcaidao.com
SMTP_PASSWORD=你的客户端专用密码
RECIPIENT_EMAIL=lishengyang2@keshengcaidao.com

# Next.js 环境变量
NODE_ENV=production
```

**重要：**
- `SMTP_PASSWORD` 必须是腾讯企业邮箱的"客户端专用密码"，不是普通登录密码
- 获取方式：登录邮箱 -> 设置 -> 收发信设置 -> 客户端专用密码 -> 生成新密码
- 确保 `.env.local` 文件权限安全：`chmod 600 .env.local`

### 5. 构建项目

```bash
pnpm build
```

### 6. 启动应用

#### 方式一：使用 PM2（推荐，支持自动重启）

```bash
# 启动应用
pm2 start npm --name "kesheng-hr" -- start

# 查看状态
pm2 status

# 查看日志
pm2 logs kesheng-hr

# 设置开机自启
pm2 startup
pm2 save
```

#### 方式二：直接启动（不推荐用于生产环境）

```bash
pnpm start
```

### 7. 配置 Nginx 反向代理（推荐）

创建 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/kesheng-hr
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为您的域名

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/kesheng-hr /etc/nginx/sites-enabled/
sudo nginx -t  # 测试配置
sudo systemctl reload nginx
```

### 8. 配置 SSL 证书（可选，推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 9. 防火墙配置

确保开放必要端口：

```bash
# 开放 80 和 443 端口（HTTP/HTTPS）
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# 如果需要直接访问 3000 端口（不推荐）
sudo ufw allow 3000/tcp
```

## 更新部署

当代码更新后，在服务器上执行：

```bash
cd /var/www/kesheng-hr
git pull
pnpm install
pnpm build
pm2 restart kesheng-hr  # 如果使用 PM2
```

## 环境变量说明

| 变量名 | 说明 | 必需 | 默认值 |
|--------|------|------|--------|
| `SMTP_HOST` | SMTP 服务器地址 | 否 | smtp.exmail.qq.com |
| `SMTP_PORT` | SMTP 端口 | 否 | 465 |
| `SMTP_USER` | 发件邮箱地址 | 否 | lishengyang2@keshengcaidao.com |
| `SMTP_PASSWORD` | 客户端专用密码 | **是** | 无 |
| `RECIPIENT_EMAIL` | 收件邮箱地址 | 否 | lishengyang2@keshengcaidao.com |
| `NODE_ENV` | 运行环境 | 否 | production |

## 故障排查

### 邮件发送失败

1. 检查环境变量是否正确配置：
   ```bash
   cat .env.local
   ```

2. 检查日志：
   ```bash
   pm2 logs kesheng-hr
   ```

3. 确认客户端专用密码是否正确生成

4. 确认邮箱已开启 POP3/SMTP 服务

### 应用无法启动

1. 检查端口是否被占用：
   ```bash
   netstat -tulpn | grep 3000
   ```

2. 检查 Node.js 版本：
   ```bash
   node -v
   ```

3. 重新安装依赖：
   ```bash
   rm -rf node_modules
   pnpm install
   ```

## 安全建议

1. ✅ **使用环境变量**：所有敏感信息通过环境变量配置
2. ✅ **文件权限**：`.env.local` 文件权限设置为 600
3. ✅ **定期更新**：保持系统和依赖包更新
4. ✅ **使用 HTTPS**：配置 SSL 证书
5. ✅ **防火墙**：只开放必要端口
6. ❌ **不要提交**：`.env.local` 文件不要提交到 Git

