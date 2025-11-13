# 贡献指南

感谢你对 Step 官网项目的关注！我们欢迎所有形式的贡献。

## 🤝 如何贡献

### 报告问题

如果你发现了 bug 或有功能建议：

1. 在 [Issues](../../issues) 页面搜索，确保问题未被报告
2. 创建新的 Issue，使用清晰的标题和详细的描述
3. 包含复现步骤（如果是 bug）
4. 添加截图或屏幕录制（如果适用）

### 提交代码

1. **Fork 项目**

```bash
# 克隆你的 fork
git clone https://github.com/your-username/step-web.git
cd step-web
```

2. **创建分支**

```bash
# 从 main 分支创建新分支
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/bug-description
```

3. **开发**

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

4. **提交更改**

```bash
# 添加更改
git add .

# 提交（使用有意义的提交信息）
git commit -m "feat: add new feature"
# 或
git commit -m "fix: resolve bug in component"
```

5. **推送并创建 Pull Request**

```bash
# 推送到你的 fork
git push origin feature/your-feature-name
```

然后在 GitHub 上创建 Pull Request。

## 📝 代码规范

### 命名规范

- **组件**: PascalCase (`Header.tsx`, `LanguageSwitcher.tsx`)
- **工具函数**: camelCase (`blog.ts`, `utils.ts`)
- **常量**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)

### TypeScript

- 优先使用类型定义
- 避免使用 `any`
- 为公共 API 添加 JSDoc 注释

```typescript
/**
 * 获取所有博客文章
 * @param locale - 语言代码 (zh/en)
 * @returns 博客文章元数据数组
 */
export function getAllPosts(locale: string): BlogPostMetadata[] {
  // ...
}
```

### React 组件

- 优先使用函数组件
- 使用 TypeScript 定义 Props
- 添加必要的注释

```typescript
interface HeaderProps {
  /** 是否显示搜索栏 */
  showSearch?: boolean;
}

export default function Header({ showSearch = false }: HeaderProps) {
  // ...
}
```

### CSS / Tailwind

- 使用 Tailwind CSS 工具类
- 保持类名的可读性
- 使用响应式前缀 (sm:, md:, lg:)

```tsx
<div className="px-4 py-8 sm:px-6 lg:px-8">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    Title
  </h1>
</div>
```

## 🌐 国际化

### 添加新的翻译

1. 在 `messages/zh.json` 和 `messages/en.json` 中添加键值对
2. 保持两个文件的结构一致
3. 使用有意义的键名

```json
{
  "section": {
    "title": "标题",
    "description": "描述"
  }
}
```

### 使用翻译

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('section');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## 📝 博客文章

### 创建新文章

1. 在 `posts/zh/` 和 `posts/en/` 中创建对应的 `.md` 文件
2. 文件名使用 kebab-case: `my-new-post.md`
3. 添加 Front Matter

```markdown
---
title: 文章标题
date: 2025-11-13
excerpt: 文章摘要（用于列表显示）
author: 作者名称
tags: ['标签1', '标签2']
---

# 文章标题

文章内容...
```

## 🎨 设计原则

- **简洁**: 去除不必要的元素
- **一致**: 保持设计系统的统一性
- **响应式**: 确保在所有设备上良好显示
- **无障碍**: 遵循 WCAG 2.1 AA 标准

## 🧪 测试

### 本地测试

```bash
# 运行开发服务器
npm run dev

# 构建生产版本
npm run build

# 测试生产构建
npm start
```

### 检查清单

在提交 PR 之前：

- [ ] 代码在本地正常运行
- [ ] 没有 TypeScript 错误
- [ ] 没有 ESLint 警告
- [ ] 在不同屏幕尺寸下测试（移动端、平板、桌面）
- [ ] 在不同浏览器测试（Chrome、Safari、Firefox）
- [ ] 测试中英文切换
- [ ] 检查深色模式
- [ ] 更新相关文档

## 📋 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
类型(范围): 简短描述

详细描述（可选）

Footer（可选）
```

### 类型

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具变动

### 示例

```
feat(blog): add category filter

Add ability to filter blog posts by category on the blog listing page.

Closes #123
```

## 🔍 代码审查

所有 PR 都需要经过代码审查。审查标准：

1. **功能**: 代码是否实现了预期功能
2. **质量**: 代码是否清晰、可维护
3. **性能**: 是否有性能问题
4. **安全**: 是否存在安全隐患
5. **设计**: 是否符合设计规范

## 📞 获取帮助

如果你有任何问题：

- 查看 [README.md](README.md)
- 查看 [部署指南](DEPLOYMENT.md)
- 在 Issues 中搜索
- 联系维护者: dev@stepapp.com

## 📄 许可证

通过提交代码，你同意你的贡献将在与项目相同的许可证下发布。

---

**感谢你的贡献！每一份贡献都让 Step 变得更好。** ❤️

