# Step - 跬步官网

> 不积跬步，无以至千里

Step（跬步）官方网站 - 使用 Next.js 14 和 Tailwind CSS 构建的现代化响应式网站。

## 🌟 特性

- ✅ **国际化支持** - 中英文双语切换
- ✅ **响应式设计** - 完美适配 Web、Mobile、Tablet
- ✅ **SEO 优化** - 完整的 meta 标签、sitemap、robots.txt
- ✅ **博客系统** - 基于 Markdown 的静态博客
- ✅ **现代化设计** - 简洁优雅的界面设计
- ✅ **性能优化** - Next.js 14 App Router，SSG 静态生成
- ✅ **深色模式** - 自动适配系统主题

## 🚀 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) (App Router)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **国际化**: [next-intl](https://next-intl-docs.vercel.app/)
- **Markdown**: [remark](https://remark.js.org/) + [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **SEO**: [next-seo](https://github.com/garmeeh/next-seo)
- **语言**: TypeScript

## 📦 安装

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📂 项目结构

```
web/
├── app/                      # Next.js App Router
│   ├── [locale]/            # 国际化路由
│   │   ├── layout.tsx       # 布局组件
│   │   ├── page.tsx         # 首页
│   │   ├── features/        # 功能介绍页
│   │   ├── blog/            # 博客页面
│   │   └── metadata.ts      # SEO 元数据
│   ├── layout.tsx           # 根布局（重定向）
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── components/              # React 组件
│   ├── Header.tsx           # 顶部导航
│   ├── Footer.tsx           # 页脚
│   └── LanguageSwitcher.tsx # 语言切换器
├── lib/                     # 工具函数
│   └── blog.ts              # 博客文章处理
├── messages/                # 国际化翻译文件
│   ├── zh.json              # 中文
│   └── en.json              # 英文
├── posts/                   # Markdown 博客文章
│   ├── zh/                  # 中文文章
│   └── en/                  # 英文文章
├── public/                  # 静态资源
│   ├── images/              # 图片资源
│   └── site.webmanifest     # PWA 配置
├── i18n.ts                  # 国际化配置
├── middleware.ts            # Next.js 中间件
└── tailwind.config.ts       # Tailwind 配置
```

## 🎨 设计系统

### 品牌色彩

- **主色调**: `#007AFF` (Step Blue)
- **辅助色**: `#34C759` (Growth Green)
- **功能色**: 红、橙、紫、粉、靛、青

### 响应式断点

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📝 博客文章

博客文章使用 Markdown 格式编写，支持：

- Front Matter 元数据
- 代码高亮
- 图片引用
- 自定义样式

### 创建新文章

1. 在 `posts/zh/` 或 `posts/en/` 目录下创建 `.md` 文件
2. 添加 Front Matter:

```markdown
---
title: 文章标题
date: 2025-11-13
excerpt: 文章摘要
author: 作者名称
tags: ['标签1', '标签2']
---

# 文章内容

...
```

## 🌐 国际化

### 支持的语言

- 中文 (zh)
- English (en)

### 添加翻译

在 `messages/zh.json` 和 `messages/en.json` 中添加对应的翻译键值对。

## 🔍 SEO 优化

- ✅ 语义化 HTML
- ✅ Meta 标签完整
- ✅ Open Graph 支持
- ✅ Twitter Cards 支持
- ✅ 结构化数据
- ✅ Sitemap.xml 自动生成
- ✅ Robots.txt 配置
- ✅ 多语言 hreflang 标签

## 📱 PWA 支持

网站支持渐进式 Web 应用（PWA）特性：

- 离线访问
- 桌面图标安装
- 推送通知（可选）

## 🖼️ 图片资源

### 需要准备的图片

放置在 `public/images/` 目录下：

1. **Logo**: `logo.svg` 或 `logo.png`
2. **App 截图**: `app-screenshot-*.png`
3. **功能演示**: `feature-*.png`
4. **Open Graph**: `og-image.png` (1200x630)
5. **Twitter Card**: `twitter-image.png` (1200x675)
6. **Favicon**: 
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

## 🚀 部署

### Vercel (推荐)

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 其他平台

支持任何支持 Next.js 的托管平台：

- Netlify
- AWS Amplify
- Cloudflare Pages
- 自托管 Docker

## 📄 许可证

本项目为 Step 产品的官方网站，版权归 Step 团队所有。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

- 官网: https://stepapp.com
- 邮箱: support@stepapp.com

---

**Step，与你一起，跬步千里。**
