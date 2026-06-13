# DevToolsBox - 工具站实施计划

## 状态：待执行（Plan Mode 只读，等待退出 Plan Mode 后执行）

---

## 一、项目结构

```
src/
├── config.ts                    # 站点配置、工具元数据
├── styles/global.css            # Tailwind + 自定义样式
├── components/
│   ├── SEOHead.astro            # SEO元数据组件
│   ├── Header.astro             # 导航栏
│   ├── Footer.astro             # 页脚
│   └── AdUnit.astro             # AdSense广告位占位组件
├── layouts/
│   ├── BaseLayout.astro         # 全局布局（header + footer + SEO）
│   └── ToolLayout.astro         # 工具页布局（含广告位）
├── pages/
│   ├── index.astro              # 首页（工具网格 + 分类）
│   ├── privacy.astro            # 隐私政策
│   ├── terms.astro              # 服务条款
│   ├── about.astro              # 关于页面
│   └── tools/
│       ├── json-formatter.astro
│       ├── base64-encoder.astro
│       ├── qr-code-generator.astro
│       ├── ... (20个工具页面)
└── components/tools/
    ├── JsonFormatter.tsx
    ├── Base64Encoder.tsx
    ├── QrCodeGenerator.tsx
    ├── ... (20个React交互组件)
```

## 二、执行步骤

### Step 1: 写基础文件（8个文件）

1. `src/styles/global.css` - Tailwind 入口 + 自定义图层
2. `src/config.ts` - 站点配置 + 20个工具元数据
3. `src/components/SEOHead.astro` - SEO 组件
4. `src/components/Header.astro` - 导航栏
5. `src/components/Footer.astro` - 页脚
6. `src/components/AdUnit.astro` - 广告位占位
7. `src/layouts/BaseLayout.astro` - 全局布局
8. `src/layouts/ToolLayout.astro` - 工具页布局

### Step 2: 写页面文件（23个文件）

9. `src/pages/index.astro` - 首页
10. `src/pages/privacy.astro` - 隐私政策
11. `src/pages/terms.astro` - 条款
12. `src/pages/about.astro` - 关于
13-32. `src/pages/tools/*.astro` - 20个工具页面

### Step 3: 写React工具组件（20个文件）

33-52. `src/components/tools/*.tsx` - 20个交互组件

### Step 4: 安装依赖 + 验证

53. `npm install` (确保crypto-js, qrcode, marked, diff等工具库)
54. `npm run build` (验证构建成功)
55. `npm run dev` (本地预览)

### Step 5: 部署准备

56. 创建 `public/robots.txt`
57. 创建 `_headers` 文件
58. 创建 `wrangler.toml` (可选)

---

## 三、详细代码

所有文件的具体代码在下方的 `files/` 目录中。共约 52 个文件需要创建。

