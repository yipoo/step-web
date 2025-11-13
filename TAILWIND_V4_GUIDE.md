# Tailwind CSS v4 配置说明

本项目使用 **Tailwind CSS v4**（最新版本），配置方式与 v3 有重大不同。

## 🔄 主要变化

### 1. 配置文件变化

**v3（旧版）：**
```typescript
// tailwind.config.ts
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: {...} } }
}
```

**v4（新版）：**
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-blue: #007AFF;
}
```

✅ **不再需要 `tailwind.config.ts` 文件！** 所有配置直接写在 CSS 文件中。

### 2. CSS 导入方式

**v3（旧版）：**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**v4（新版）：**
```css
@import "tailwindcss";
```

### 3. 主题配置

**v4 使用 CSS 变量定义主题：**

```css
@theme {
  /* 颜色 */
  --color-brand-blue: #007AFF;
  --color-brand-green: #34C759;
  
  /* 字体 */
  --font-family-sans: -apple-system, sans-serif;
  
  /* 圆角 */
  --radius-brand: 12px;
  
  /* 阴影 */
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

## 📦 依赖包

```json
{
  "devDependencies": {
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

## ⚙️ PostCSS 配置

```javascript
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}
  }
};
```

## 🎨 使用自定义颜色

在 HTML/JSX 中使用：

```tsx
<div className="bg-brand-blue text-white">
  <h1 className="text-brand-green">Hello</h1>
</div>
```

## 📁 当前项目结构

```
web/
├── app/
│   ├── globals.css          # Tailwind 配置和导入
│   └── layout.tsx           # 导入 globals.css
├── postcss.config.mjs       # PostCSS 配置
└── package.json             # tailwindcss ^4
```

## ✅ 检查清单

- [x] 删除 `tailwind.config.ts`
- [x] 更新 `globals.css` 使用 `@import "tailwindcss"`
- [x] 在 `@theme` 中定义自定义颜色
- [x] 在根 `layout.tsx` 中导入 `globals.css`
- [x] PostCSS 配置使用 `@tailwindcss/postcss`

## 🚀 自动内容检测

Tailwind v4 会自动检测项目中的所有文件并提取类名，无需手动配置 `content` 路径。

它会扫描：
- `app/**/*.{js,ts,jsx,tsx}`
- `components/**/*.{js,ts,jsx,tsx}`
- `pages/**/*.{js,ts,jsx,tsx}`

## 📚 参考资源

- [Tailwind CSS v4 文档](https://tailwindcss.com/docs/v4-beta)
- [迁移指南](https://tailwindcss.com/docs/upgrade-guide)

---

**注意**: 如果遇到样式不生效的问题，请重启开发服务器！

