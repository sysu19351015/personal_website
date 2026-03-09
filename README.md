# 个人网站（Next.js）

这是一个基于 Next.js App Router 构建的个人网站项目，包含首页、关于我、作品集三个独立页面。  
整体风格为高对比、黑边框、贴纸感与卡片化布局，适合用于个人简历展示与项目作品呈现。

## 页面结构

- `/`：首页（个人主视觉与身份介绍）
- `/about`：关于我（教育背景、近期动态、成长轨迹等）
- `/portfolio`：作品页（作品图片、名称、简述与跳转链接）

## 技术栈

- Next.js 15（App Router）
- React 19 + TypeScript
- Tailwind CSS 4
- Lucide React 图标

## 本地运行

### 1) 安装依赖

```bash
npm install
```

### 2) 启动开发环境

```bash
npm run dev
```

默认访问地址：`http://localhost:3000`

### 3) 生产构建与启动

```bash
npm run build
npm run start
```

## 常用脚本

- `npm run dev`：开发模式
- `npm run build`：生产构建
- `npm run start`：运行生产构建
- `npm run lint`：代码检查

## 自定义指南

你通常只需要修改以下文件：

- `components/hero-section.tsx`：首页文案与主视觉
- `components/about-section.tsx`：关于页内容与模块样式
- `components/portfolio-section.tsx`：作品列表（图片、标题、简介、跳转链接）
- `components/navigation.tsx`：导航菜单与路由入口

### 作品数据修改示例

在 `components/portfolio-section.tsx` 中维护作品数组，可直接替换：

- `title`：作品名称
- `description`：作品简述
- `image`：作品图片路径（建议放在 `public/images/`）
- `href`：点击卡片跳转地址

## 部署建议

可部署到 Vercel、Netlify 或自托管环境。以 Vercel 为例：

1. 将仓库推送到 GitHub
2. 在 Vercel 导入该仓库
3. 保持默认构建命令（`npm run build`）并部署

## 许可证

仅用于个人展示与学习参考。如需商用，请自行检查素材与图片版权。
