# 部署指南

本文档描述如何将 Step 官网部署到生产环境。

## 🚀 部署平台

### 1. Vercel (推荐)

Vercel 是 Next.js 的官方推荐平台，提供最佳的性能和开发体验。

#### 自动部署（推荐）

1. **连接 Git 仓库**

```bash
# 推送代码到 GitHub/GitLab/Bitbucket
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **在 Vercel 导入项目**

- 访问 [vercel.com](https://vercel.com)
- 点击 "New Project"
- 导入你的 Git 仓库
- Vercel 会自动检测 Next.js 项目

3. **配置环境变量**（如果需要）

在 Vercel 项目设置中添加：

```
# 可选的环境变量
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

4. **部署**

- Vercel 会自动构建和部署
- 每次 push 到 main 分支都会自动重新部署
- Preview 分支会生成预览 URL

#### 手动部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

### 2. Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 登录
netlify login

# 构建
npm run build

# 部署
netlify deploy --prod --dir=.next
```

**netlify.toml**:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 3. 自托管 (Docker)

#### Dockerfile

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### 部署

```bash
# 构建
docker build -t step-web .

# 运行
docker run -p 3000:3000 step-web

# 使用 docker-compose
docker-compose up -d
```

### 4. AWS Amplify

```bash
# 安装 Amplify CLI
npm i -g @aws-amplify/cli

# 配置
amplify configure

# 初始化
amplify init

# 添加托管
amplify add hosting

# 部署
amplify publish
```

## ⚙️ 构建配置

### next.config.ts

确保生产环境配置正确：

```typescript
const nextConfig: NextConfig = {
  output: 'standalone', // Docker 部署时使用
  
  // 图片优化
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 压缩
  compress: true,
  
  // 静态导出（可选）
  // output: 'export', // 如果不需要服务端功能
};
```

### 环境变量

创建 `.env.production`:

```bash
# 站点 URL
NEXT_PUBLIC_SITE_URL=https://stepapp.com

# Google Analytics (可选)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 其他 API 密钥
```

**注意**: 不要将敏感信息提交到 Git！

## 📊 性能优化

### 1. 启用静态生成

在 `app/[locale]/page.tsx` 中：

```typescript
export const dynamic = 'force-static';
export const revalidate = 3600; // 每小时重新验证
```

### 2. 图片优化

```typescript
// 使用 Next.js Image 组件
import Image from 'next/image';

<Image
  src="/images/app-screenshot.png"
  alt="App Screenshot"
  width={1170}
  height={2532}
  priority // 首屏图片
  placeholder="blur" // 模糊占位符
/>
```

### 3. 字体优化

```typescript
// app/[locale]/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {children}
    </html>
  );
}
```

## 🔍 SEO 检查清单

部署后检查：

- [ ] 访问 `https://yoursite.com/sitemap.xml`
- [ ] 访问 `https://yoursite.com/robots.txt`
- [ ] 检查 Open Graph 标签: [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] 检查 Twitter Cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] 检查页面速度: [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] 检查移动端适配: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 📈 分析和监控

### Google Analytics

在 `app/[locale]/layout.tsx` 中添加：

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/[locale]/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔐 安全配置

### 添加安全头部

在 `next.config.ts` 中：

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};
```

## 🌐 CDN 和缓存

### Cloudflare

1. 添加网站到 Cloudflare
2. 更新 DNS 记录
3. 配置缓存规则：
   - `/images/*` - 缓存 1 年
   - `/_next/static/*` - 缓存 1 年
   - `/blog/*` - 缓存 1 天

## 🔄 持续集成/持续部署 (CI/CD)

### GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## 📋 部署后检查清单

- [ ] 网站可以访问
- [ ] 所有页面正常加载
- [ ] 中英文切换正常
- [ ] 博客文章显示正常
- [ ] 图片正常加载
- [ ] 移动端适配正常
- [ ] SEO 标签正确
- [ ] Analytics 工作正常
- [ ] 表单提交正常（如果有）
- [ ] 404 页面正常

## 🆘 故障排查

### 构建失败

```bash
# 清除缓存
rm -rf .next node_modules
npm install
npm run build
```

### 图片无法加载

检查 `next.config.ts` 中的 `images.domains` 配置。

### 国际化问题

确保 `middleware.ts` 配置正确，并且 locale 文件存在。

## 📞 支持

如果遇到部署问题：

- 查看 [Next.js 部署文档](https://nextjs.org/docs/deployment)
- 联系技术支持: tech@stepapp.com

---

**祝部署顺利！🎉**

