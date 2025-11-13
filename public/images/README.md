# 图片资源说明

本目录用于存放网站所需的图片资源。

## 📋 需要准备的图片清单

### 1. Logo 和品牌标识

- [ ] `logo.svg` - 网站 Logo（SVG 格式，推荐）
- [ ] `logo.png` - 网站 Logo（PNG 格式，备用）
- [ ] `logo-dark.svg` - 深色模式 Logo（可选）

**规格要求**:
- 尺寸: 建议 200x200px 或等比例
- 格式: SVG（推荐）或 PNG（透明背景）
- 文件大小: < 50KB

### 2. App 截图

用于首页和功能页面展示：

- [ ] `app-screenshot-home.png` - 主界面截图
- [ ] `app-screenshot-add.png` - 快速添加功能
- [ ] `app-screenshot-habits.png` - 循环任务打卡
- [ ] `app-screenshot-pomodoro.png` - 番茄钟界面
- [ ] `app-screenshot-stats.png` - 数据统计

**规格要求**:
- 尺寸: 1170x2532px (iPhone 14 Pro)
- 格式: PNG 或 WEBP
- 文件大小: < 500KB 每张
- 建议使用 iPhone 样机包装

### 3. 功能演示图

用于功能详细页面：

- [ ] `feature-quick-add.png`
- [ ] `feature-habits.png`
- [ ] `feature-pomodoro.png`
- [ ] `feature-statistics.png`
- [ ] `feature-categories.png`
- [ ] `feature-reminders.png`

**规格要求**:
- 尺寸: 1200x900px 或 16:9 比例
- 格式: PNG 或 WEBP
- 文件大小: < 300KB 每张

### 4. 社交媒体分享图

- [ ] `og-image.png` - Open Graph 图片 (1200x630px)
- [ ] `twitter-image.png` - Twitter Card 图片 (1200x675px)

**规格要求**:
- Open Graph: 1200x630px
- Twitter Card: 1200x675px
- 格式: PNG 或 JPG
- 文件大小: < 1MB

**设计建议**:
- 包含 Logo 和 Slogan
- 使用品牌色彩 (#007AFF)
- 文字清晰可读
- 简洁现代的设计

### 5. Favicon 和应用图标

- [ ] `favicon.ico` - 网站图标 (32x32)
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `apple-touch-icon.png` - iOS 图标 (180x180)
- [ ] `android-chrome-192x192.png` - Android 图标
- [ ] `android-chrome-512x512.png` - Android 图标

**规格要求**:
- 格式: PNG（透明背景）和 ICO
- 尺寸: 按照文件名标注的尺寸
- 设计: 简洁的 Logo 或 "S" 字母

**生成工具**:
- https://realfavicongenerator.net/
- https://favicon.io/

### 6. 博客封面图（可选）

用于博客文章的封面图：

- `blog-*.png` 或 `blog-*.jpg`

**规格要求**:
- 尺寸: 1200x630px (16:9)
- 格式: PNG 或 JPG
- 文件大小: < 300KB

### 7. 其他装饰性图片

- [ ] `hero-background.png` - 首页背景图（可选）
- [ ] `pattern.svg` - 装饰性图案（可选）

## 🎨 设计规范

### 品牌色彩

参考 `tailwind.config.ts` 中定义的品牌色：

```
主色: #007AFF (Step Blue)
辅助色: #34C759 (Growth Green)
功能色: #FF3B30 (红), #FF9500 (橙)
```

### 设计风格

- **极简主义**: 简洁、现代、留白充足
- **iOS 风格**: 圆角、渐变、磨砂效果
- **高对比度**: 确保文字和图标清晰可读
- **响应式**: 图片应该在不同设备上都能良好显示

## 🔄 图片优化

在添加图片后，建议进行优化：

```bash
# 使用 ImageOptim (macOS)
# 或在线工具: https://tinypng.com/

# 转换为 WEBP 格式（可选）
cwebp input.png -q 80 -o output.webp
```

## 📝 使用示例

在代码中引用图片：

```tsx
// Next.js Image 组件
import Image from 'next/image';

<Image
  src="/images/app-screenshot-home.png"
  alt="Step App 主界面"
  width={1170}
  height={2532}
  className="rounded-2xl shadow-2xl"
/>

// 背景图
<div
  style={{
    backgroundImage: 'url(/images/hero-background.png)',
    backgroundSize: 'cover',
  }}
>
```

## 🎯 优先级

高优先级（必需）:
1. ✅ Favicon 系列
2. ✅ og-image.png
3. ✅ app-screenshot-home.png
4. ✅ logo.svg

中优先级（推荐）:
- App 功能截图系列
- 功能演示图

低优先级（可选）:
- 装饰性背景图
- 博客封面图

## 📞 需要帮助？

如果需要设计支持，请联系：
- 设计团队: design@stepapp.com
- 参考设计指南: `/docs/brand/DESIGN_GUIDE.md`

---

**提示**: 本目录中的图片会直接影响网站的视觉效果和加载性能，请确保所有图片都经过优化处理。

