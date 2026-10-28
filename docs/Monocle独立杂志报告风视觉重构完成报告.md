# BeforeChina「方向 A：Monocle / 金融时报周末版（FT Weekend）独立杂志报告风」全站重构报告

> **更新时间**：2026-10-28  
> **实施范围**：全站设计语言系统 (`globals.css` / `layout.tsx`)、首页 7 大模块重构 (`page.tsx`)、首屏杂志封面与快捷入口栏 (`HeroCarousel.tsx`)、编号细线网格 (`WhyUs.tsx`)、交互式路线图集 (`FeaturedJourneys.tsx`)、主题目录 (`ExperienceGrid.tsx`)、双栏杂志专栏 (`JournalCard.tsx`)、医疗计算器与情报档案卡 (`FactSheet.tsx` / `HealthcareCostCalculator.tsx` / `MedicalTrustBar.tsx`)

---

## 一、 核心重构亮点对比（Before vs After）

### 1. 配色与字体系统：告别「泛黄模板色 + 刺眼荧光绿」

| 维度             | 改版前（AI 模板痕迹明显）                                                  | 改版后（Monocle / FT Weekend 独立杂志风）                                                                                                     |
| :--------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **背景体系**     | 全站单一泛黄暖米色 (`#fdfaf6`)，从头滚到底缺乏层次                         | **冷峻高级的新闻纸白 (`#F6F4EF`) + 纯白卡片 (`#FFFFFF`) + 深炭墨黑 (`#141413`) 跨栏特辑与页脚**，形成强烈的明暗杂志节奏                       |
| **主色与强调色** | 铁锈橘红 (`#a84c3a`) + 刺眼微信亮绿 (`#07C160`)                            | **深朱砂印章红 (`#9E2A2B`) + 宋韵深松石绿 (`#1E4D3B`) + 暗夜古铜金 (`#E6C27A`)**，克制、沉稳且极具东方与英伦出版物调性                        |
| **字体矩阵**     | 标题 `Playfair Display` + 正文 `Inter`，但价格、天数、时间戳混在正文字体里 | 新增 **`JetBrains Mono` 等宽数据字体 (`--font-mono`)**，所有档案编号 (`01 / 02 / 03`)、医院收费对比、免签小时数、行程天数统一采用等宽大写排版 |
| **圆角与按钮**   | 气泡胶囊按钮 (`border-radius: 9999px`)，像通用 SaaS 落地页                 | **2px 建筑感利落直角 (`--radius-sm: 2px`) + 等宽大写按钮**，悬停由炭墨黑切换为朱砂印章红                                                      |

---

### 2. 页面结构与组件「去 AI 味」重构

1. **顶部报头导航栏 (`layout.tsx`)**：
   - 顶部增加 `2px solid #141413` 杂志报头压线；
   - Logo 右侧增加等宽报头标识：`LONDON & SHANGHAI DESK · 2026`；
   - 右侧联系入口采用利落黑框等宽信箱胶囊 `HELLO@BEFORECHINA.COM`。
2. **首屏杂志封面 + 底部快捷情报栏 (`HeroCarousel.tsx`)**：
   - 将原本浮在图片正中央的通用居中文字，改为**左下角非对称杂志封面排版**（含 `DISPATCH 01 / 05` 编号、大号衬线标题、导语及 `01–05` 等宽数字切换器）；
   - 首屏底部内嵌深炭黑 **Quick Dispatch Bar（3 大核心入口直达）**：
     - `01 / ENTRY POLICY`：30-Day & 240-Hour Visa-Free Checker
     - `02 / 2026 HOSPITAL & DENTAL AUDIT`：China vs US/UK Healthcare Cost Calculator
     - `03 / PRIVATE ITINERARIES`：14 Regions & Tailor-Made Route Atlas
3. **干掉重复的居中线性图标网格 (`WhyUs.tsx` & `ExperienceGrid.tsx`)**：
   - **`WhyUs.tsx`**：由 4 个居中 SVG 图标改为 **「左标题 + 右导语」非对称报头 + 4 列 `1px` 细线分割网格 (`.hairline-grid-4`)**，以 `01 / BILATERAL DESK` 至 `04 / REAL-TIME SUPPORT` 编号呈现；
   - **`ExperienceGrid.tsx`**：由 5 个居中图标彻底重构为 **Monocle 风格的横向主题索引表（Horizontal Thematic Directory）**，每行展示 `THEME 01–05`、涉及目的地城市群、衬线标题、深度简介与右侧 `Read Brief →`。
4. **首页新增深炭黑跨栏特辑：2026 赴华医疗、牙科与配镜价格审计 (`page.tsx`)**：
   - 采用 `#141413` 深炭墨黑背景 + `#E6C27A` 古铜金顶线卡片，使 `Executive Health Checkup ($280–$680)`、`Straumann Dental Implants (~$920)` 与 `Optical & TCM ($35–$95)` 成为全站视觉焦点。
5. **合并 3 个重复路线区块为交互式「Curated Route Atlas」(`FeaturedJourneys.tsx`)**：
   - 解决了原本 3 个路线区块连续堆叠 10 张图、且 `For Nature Lovers` 第 4 张图单独掉到第二行留白 2/3 的排版缺陷；
   - 提供 4 个等宽切换 Tab：`01 / Essential Selection (6)`（默认 3×2 完美对齐）、`02 / First-Time Classics (3)`、`03 / Karsts & Alpine Lakes (4)`（自动切换为 2×2 宽画幅网格，绝不出现单张孤儿卡）、`04 / Silk Road & High Plateau (3)`；
   - **彻底解决图片重复问题**：首屏第一张改为黄山云海 (`huangshan.webp`)、长城专栏文章改为庐山晨雾 (`jiangxi.webp`)、云南茶马古道改为西南梯田 (`guizhou.webp`)，全站首页再无任何一张重复图片。
6. **故事专栏改为「左大右小」双栏杂志跨页 (`JournalCard.tsx` + `page.tsx`)**：
   - 左侧为 `16:9` 大画幅主笔文章（Lead Essay），右侧垂直叠放 2 篇田野手记 + 1 个「行前必备四大工具速查盒（Visa / Alipay / VPN / eSIM）」。
7. **情报档案卡 (`FactSheet.tsx`) 与医疗计算器 (`HealthcareCostCalculator.tsx`)**：
   - 取消全站所有的「左侧 3px/4px 彩色竖线」和「刺眼荧光绿底框」；
   - `FactSheet` 改为顶部 `2px` 墨线压顶 + 内部 `1px` 细线单元格网格 + `[ DOSSIER · 2026 VERIFIED DATA ]` 档案头。

---

## 二、 构建与验证结果

- **TypeScript 类型检查 (`npx tsc --noEmit`)**：0 报错通过。
- **Next.js 全量静态导出 (`npm run build`)**：全站 62 个静态路由全部生成通过 (`○ Static`)。
- **桌面端 (`1440×900`) 与移动端 (`390×844`) 真实浏览器渲染验收**：排版、细线网格、图片加载与移动端响应式均已通过视觉核验。
