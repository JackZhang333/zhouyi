# 周易学习应用开发计划

## 项目概述

开发一个功能完善的周易学习应用，支持摇卦、查卦、分享和交流功能。每卦独立页面，支持SEO和GEO优化。

## 技术栈

- **前端框架**: Next.js 14+ (App Router)
- **样式**: Tailwind CSS
- **UI组件**: Shadcn/UI
- **状态管理**: Zustand
- **后端/数据库**: Supabase
- **分享功能**: html2canvas（生成分享卡片）
- **动画**: Framer Motion（仪式感动效）
- **音效**: Howler.js 或原生 Web Audio API（可选）

## 设计风格

**东方禅意美学 + 现代简约**

### 视觉风格
- **主色调**: 米白、暖灰、墨色、朱砂红（点缀）
- **背景**: 纸张纹理或淡淡的山水墨韵渐变
- **字体**: 标题使用书法字体（如思源宋体、方正清刻本悦宋），正文使用现代无衬线字体
- **留白**: 大量留白，营造空灵、宁静的氛围
- **圆角**: 柔和的圆角，避免尖锐感
- **阴影**: 极淡的弥散阴影，营造层次感

### 动效设计
- **缓动函数**: 使用 ease-out、cubic-bezier(0.25, 0.1, 0.25, 1) 等柔和的缓动
- **过渡时长**: 较长的过渡时间（500ms-1000ms），营造从容不迫的节奏
- **微交互**: 按钮悬停时轻微放大、涟漪效果
- **页面切换**: 淡入淡出，如云雾散开

## 摇卦交互设计（仪式感）

### 阶段一：静心准备
- 页面显示水墨晕染背景动画
- 中央显示"静心凝神，诚心起卦"提示文字
- 用户点击"开始摇卦"按钮，伴随清脆的铃铛音效（可选）

### 阶段二：六次摇卦（核心仪式）
每次摇卦包含以下步骤：

1. **铜钱蓄力**
   - 三枚铜钱在屏幕中央悬浮旋转
   - 轻微呼吸感动画（缩放 0.95 → 1.05 循环）
   - 提示文字："第 N 爻 - 诚心默念所求之事"

2. **抛掷动作**
   - 用户点击/长按屏幕触发抛掷
   - 铜钱向上飞散，伴随金色粒子拖尾效果
   - 铜钱在空中翻转（3D rotate 动画）

3. **落地定格**
   - 铜钱缓缓落下，轻微弹跳后静止
   - 镜头聚焦，画面微震
   - 显示正反面结果，计算爻象

4. **爻象显现**
   - 爻象从下方缓缓升起，如墨滴在水中晕开
   - 阳爻（—）或阴爻（- -）以水墨笔触绘制动画
   - 如果是变爻（老阴/老阳），显示特殊标记（红点或金色边框）

5. **过渡下一爻**
   - 当前爻定格在页面下方（六爻从下往上排列）
   - 淡出当前铜钱，准备下一轮

### 阶段三：卦成显现
- 六次摇卦完成后，六爻完整呈现
- 卦象缓缓浮现，如画卷展开
- 显示本卦名称和卦辞摘要
- 如有变爻，变卦以淡墨形式隐约显示在旁
- 底部出现"记录所求"按钮，引导下一步

### 音效设计（可选）
- 开始：空灵的钟声/木鱼声
- 抛掷：清脆的铜钱碰撞声
- 落卦：深沉的鼓声/磬声
- 变爻：特殊的提示音

### 动画时序参考
```
铜钱蓄力：2秒（呼吸动画）
抛掷上升：0.8秒（ease-out）
空中翻转：0.5秒 × 3圈
落地弹跳：0.6秒（弹性缓动）
爻象绘制：1秒（stroke-dasharray 动画）
爻位上升：0.8秒（ease-out）
```

## 关键决策

| 决策项 | 选择 |
|--------|------|
| 用户认证 | 邮箱/密码注册登录 |
| 白话文风格 | 通俗性（易于理解的日常语言） |
| 分享权限 | 生成公开链接，任何人可查看 |
| 响应式优先级 | 移动端优先设计 |
| 评论功能 | 每卦页面支持用户讨论/笔记 |
| SEO内容 | 自动生成 |
| 部署平台 | Vercel |
| 未登录用户权限 | 可查看卦详情，无法评论/保存记录 |
| 变爻展示 | 显示变卦名称+链接跳转，不显示解读 |
| 数据来源 | 《周易》通行本（王弼注本） |
| 第一版排除 | 支付/会员、后台管理、数据统计 |

## 核心功能

### 1. 摇卦功能
- 模拟三枚铜钱摇卦（每次得到4、5、6、7、8、9中的一个数）
- 记录6次摇卦结果，从下到上形成六爻
- 自动确定本卦和变卦（如有变爻）
- 铜钱翻转动画效果

### 2. 查卦功能
- 64卦列表展示，支持搜索（按卦名、拼音）
- 卦详情页：卦象、卦辞、六爻爻辞
- 卦关系展示：错卦、综卦、交卦、互卦
- 八卦基础信息展示

### 3. AI 解读功能
- 摇卦后引导用户填写所求事物（问题描述）
- 提交给 Kimi AI 进行卦象解读
- 结合本卦、变卦（如有）和所求问题进行智能分析
- 显示 AI 解读结果并可保存

### 4. 分享与交流
- 保存摇卦记录（支持添加问题描述、AI解读、笔记）
- 生成可分享的卦象卡片（图片形式，含AI解读摘要）
- 历史记录管理（查看、删除、导出/导入）
- 用户评论/讨论功能（Supabase支持）

## 64卦数据结构

```typescript
interface Hexagram {
  id: string;              // 卦的唯一标识（如 "qian"）
  sequence: number;        // 序号 1-64
  name: string;            // 卦名（如 "乾"）
  pinyin: string;          // 拼音（如 "qián"）
  symbol: string;          // 卦象符号

  // 卦象（六爻，从下到上）
  lines: YaoType[];        // [9,9,9,9,9,9] 表示六阳爻

  // 原文
  original: {
    guaCi: string;         // 卦辞原文
    tuanCi: string;        // 彖传原文
    xiangCi: string;       // 大象原文
    yaoCi: string[];       // 六爻爻辞原文 [初九, 九二, ...]
    xiaoXiang: string[];   // 小象原文
    wenYan?: string;       // 文言（乾坤两卦特有）
  };

  // 白话解释
  vernacular: {
    guaCi: string;         // 卦辞白话
    tuanCi: string;        // 彖传白话
    xiangCi: string;       // 大象白话
    yaoCi: string[];       // 六爻爻辞白话
    xiaoXiang: string[];   // 小象白话
    wenYan?: string;       // 文言白话
  };

  // 关系卦
  relations: {
    cuoGua: string;        // 错卦ID
    zongGua: string;       // 综卦ID
    jiaoGua: string;       // 交卦ID
    huGua: string;         // 互卦ID
  };

  // SEO/GEO优化字段
  seo: {
    title: string;         // 页面标题
    description: string;   // 页面描述
    keywords: string[];    // 关键词
    structuredData: object; // JSON-LD结构化数据
  };
}
```

## Supabase 数据库设计

### 表：divination_records（摇卦记录）
```sql
- id: uuid (primary key)
- user_id: uuid (foreign key to auth.users)
- question: text (所求事物)
- lines: int[] (六爻结果)
- original_hexagram_id: string (本卦ID)
- changed_hexagram_id: string (nullable) (变卦ID)
- changing_lines: int[] (变爻位置)
- ai_interpretation: text (AI解读结果)
- notes: text (用户笔记)
- tags: text[]
- is_public: boolean (是否公开分享)
- created_at: timestamp
- updated_at: timestamp
```

### 表：comments（评论）
```sql
- id: uuid (primary key)
- record_id: uuid (foreign key)
- user_id: uuid (foreign key)
- content: text
- created_at: timestamp
```

## 项目结构

```
zhouyi-app/
├── app/                         # Next.js App Router
│   ├── page.tsx                 # 首页
│   ├── layout.tsx               # 根布局
│   ├── globals.css
│   ├── divination/
│   │   └── page.tsx             # 摇卦页面
│   ├── divination/result/
│   │   └── page.tsx             # 摇卦结果页
│   ├── hexagrams/
│   │   ├── page.tsx             # 64卦列表
│   │   └── [id]/
│   │       └── page.tsx         # 卦详情页（SSR + SEO）
│   ├── history/
│   │   └── page.tsx             # 历史记录
│   ├── share/
│   │   └── [id]/
│   │       └── page.tsx         # 分享页
│   └── api/                     # API Routes（如需要）
├── components/
│   ├── ui/                      # Shadcn/UI 组件
│   ├── hexagram/                # 卦象相关组件
│   ├── divination/              # 摇卦相关组件
│   │   ├── CoinAnimation.tsx    # 铜钱动画
│   │   ├── YaoInkAnimation.tsx  # 爻象水墨绘制
│   │   ├── DivinationRitual.tsx # 摇卦仪式流程
│   │   └── ScrollReveal.tsx     # 卷轴展开效果
│   ├── layout/                  # 布局组件
│   └── seo/                     # SEO组件
├── lib/
│   ├── utils.ts                 # 工具函数
│   ├── supabase/                # Supabase客户端
│   │   ├── client.ts
│   │   └── server.ts
│   └── seo/                     # SEO工具
├── hooks/                       # 自定义Hooks
├── stores/                      # Zustand状态管理
├── types/
│   └── index.ts                 # TypeScript类型
├── data/
│   └── hexagrams.ts             # 64卦静态数据
├── public/
│   └── images/                  # 静态资源
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 关键文件

| 文件 | 用途 |
|------|------|
| `lib/utils/divination.ts` | 摇卦核心算法（铜钱投掷、六爻生成、变爻计算） |
| `lib/utils/hexagram.ts` | 卦象计算（根据六爻查卦、错/综/交/互卦计算） |
| `lib/utils/kimi.ts` | Kimi AI API 调用封装 |
| `types/index.ts` | 核心类型定义 |
| `data/hexagrams.ts` | 64卦完整数据（原文+白话+SEO） |
| `app/hexagrams/[id]/page.tsx` | 卦详情页（Next.js SSR） |
| `app/api/interpret/route.ts` | AI 解读 API 路由（保护 API Key） |
| `lib/seo/hexagram.ts` | SEO/GEO元数据生成 |
| `stores/divinationStore.ts` | 摇卦状态管理 |
| `lib/supabase/client.ts` | Supabase客户端配置 |

## AI 解读功能设计

### 用户流程
1. 用户完成摇卦，获得本卦和变卦（如有）
2. 页面显示卦象结果，并提示"您想询问什么？"
3. 用户填写所求事物（如：事业发展、感情状况、健康等）
4. 点击"获取 AI 解读"按钮
5. 调用 Kimi API 进行解读
6. 显示 AI 解读结果（包含：卦象概述、针对问题的分析、建议）
7. 用户可选择保存记录（包含卦象、问题、AI解读）

### 技术实现

**API 路由**: `app/api/interpret/route.ts`
```typescript
// 保护 Kimi API Key，不暴露给前端
export async function POST(req: Request) {
  const { hexagram, changedHexagram, question, changingLines } = await req.json();

  const prompt = buildInterpretationPrompt({
    hexagram,        // 本卦信息
    changedHexagram, // 变卦信息（可选）
    question,        // 用户问题
    changingLines,   // 变爻位置
  });

  const interpretation = await callKimiAPI(prompt);
  return Response.json({ interpretation });
}
```

**Prompt 构建**:
```
你是一位精通周易的智者。请根据以下卦象为用户进行解读：

本卦：{卦名}（{卦辞}）
变卦：{变卦名}（如有）
变爻：{第几爻}（如有）
所求：{用户问题}

请提供以下方面的解读：
1. 卦象概述（本卦的整体含义）
2. 针对问题的分析（结合所求事物）
3. 变卦的启示（如有变爻）
4. 具体建议（务实、可操作的建议）

风格要求：通俗易懂、理性客观、富有智慧。
```

**数据存储**:
AI 解读结果存储在 `divination_records` 表的 `ai_interpretation` 字段中。

## 页面路由（Next.js App Router）

| 路径 | 页面 | SEO优化 |
|------|------|---------|
| `/` | 首页 | 是 |
| `/divination` | 摇卦页面 | 是 |
| `/divination/result` | 摇卦结果页 | 否 |
| `/hexagrams` | 64卦列表 | 是 |
| `/hexagrams/:id` | 卦详情页 | 是（SSR动态meta） |
| `/history` | 历史记录 | 否（需登录） |
| `/share/:id` | 分享页 | 是 |

## SEO/GEO优化策略（Next.js原生支持）

### 1. 每卦独立页面
- 使用动态路由 `/hexagrams/[id]/page.tsx`
- Next.js `generateMetadata()` 生成动态meta
- 服务端渲染确保搜索引擎可抓取

### 2. 内容优化
- 原文和白话文对照展示
- 丰富的关键词覆盖
- JSON-LD结构化数据（Schema.org）

### 3. 技术实现
```typescript
// app/hexagrams/[id]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hexagram = await getHexagram(params.id);
  return {
    title: `${hexagram.name}卦 - ${hexagram.pinyin} | 周易学习`,
    description: hexagram.seo.description,
    keywords: hexagram.seo.keywords,
    openGraph: { ... },
  };
}

export default async function HexagramPage({ params }: Props) {
  const hexagram = await getHexagram(params.id);
  return (
    <>
      <Script type="application/ld+json">
        {JSON.stringify(hexagram.seo.structuredData)}
      </Script>
      <HexagramDetail hexagram={hexagram} />
    </>
  );
}
```

### 4. 站点地图
- 使用 `next-sitemap` 自动生成 sitemap.xml
- 包含所有64卦详情页URL

## 开发阶段

### 第一阶段：项目初始化 + 数据准备
1. `npx shadcn@latest init --yes --template next` 初始化项目
2. 配置 TailwindCSS + Shadcn/UI
3. 配置 Supabase
4. 准备64卦完整数据（原文+白话+SEO字段）
5. 类型定义

### 第二阶段：基础组件 + 仪式感动效
1. 使用 Shadcn/UI 搭建禅意风格布局（米白/墨色主题）
2. 配置书法字体和纸张纹理背景
3. 仪式感动效组件开发：
   - 铜钱悬浮呼吸动画
   - 抛掷飞散 + 粒子拖尾效果
   - 爻象水墨绘制动画（SVG stroke-dasharray）
   - 卦成卷轴展开动画
4. 摇卦页面完整流程实现

### 第三阶段：查卦功能 + SEO
1. 64卦列表页
2. 卦详情页（Next.js SSR + generateMetadata）
3. 错卦/综卦/交卦/互卦展示
4. JSON-LD结构化数据

### 第四阶段：Supabase集成
1. 用户认证（可选）
2. 摇卦记录存储
3. 评论功能
4. 分享功能

### 第五阶段：优化完善
1. 响应式设计
2. 性能优化（图片、代码分割）
3. Vercel部署

## 验证方式

- 本地运行 `npm run dev` 启动开发服务器
- 测试摇卦流程是否正常工作
- 验证64卦数据展示是否正确（原文+白话）
- 检查每卦页面的SEO meta标签和结构化数据
- 测试Supabase数据存储和读取
- 测试历史记录保存和分享功能
