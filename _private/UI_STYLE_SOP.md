# PassGrid UI 一致性与效果验收 SOP

适用范围：后续新增页面、模块、按钮、题库功能、文章区、统计区、学习路径区时，用本文档检查是否与当前 PassGrid 设计风格、交互逻辑和性能策略一致。

## 1. 产品定位先验

新增功能必须先满足以下定位，再考虑视觉细节：

- 产品名称：PassGrid。
- 核心场景：PMP / CAPM 备考者在碎片时间里做知识点练习。
- 功能边界：当前版本只做题库练习，不做 Mock Exam / 模拟考试入口。
- 用户路径：先选择 CAPM 或 PMP，再进入对应题库练习、错题回看和对应文章。
- 首屏默认：CAPM。
- 文章展示：选择 CAPM 时只展示 CAPM 文章；选择 PMP 时只展示 PMP 文章。

验收要求：

- 新 UI 文案不得出现 `Mock Exam`、`mock exam`、`180-question mock`、`150-question mock` 等模拟考试定位。
- 新功能必须服务“短时练习、即时解释、错题回看、结构化文章复习”。
- 不新增宽泛考试平台、证书大全、课程商城等偏离 PMP/CAPM 的入口。

## 2. 视觉基调

当前风格关键词：

- 轻教育平台。
- 粗线条、软圆角、清晰卡片。
- 低饱和奶油背景。
- 绿色主行动按钮。
- 浅蓝辅助按钮。
- 桃色 / 浅紫作为小面积标签或图标底色。
- 整体亲和，但信息层级要清楚，不能像营销落地页一样过度装饰。

禁止：

- 大面积单一蓝色、紫色、棕色、米黄色统治整个页面。
- 随意添加渐变球、漂浮光斑、无意义装饰。
- 把每个模块都做成厚阴影按钮。
- 非交互内容使用按钮式按压阴影。
- 文字重叠、按钮文字溢出、移动端横向滚动。

## 3. 字体规范

当前字体：

```css
font-family: Nunito, Aptos, "Segoe UI Variable", "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
```

标题、按钮和强调文字使用：

```css
font-family: Fredoka, Nunito, Aptos, sans-serif;
```

使用规则：

- 大标题使用 Fredoka，保持圆润、厚实，但不要过大导致移动端换行难看。
- 正文使用 Nunito，保持可读性。
- 不使用负字距。
- 不用随 viewport 宽度无限放大的字体。
- 移动端标题必须重新检查换行，不能一行只剩孤立单词或超出容器。

## 4. 色板规范

新增样式优先使用现有 CSS 变量：

```css
--bg: #fff7f1;
--bg-soft: #fdf0e8;
--surface: #ffffff;
--surface-soft: #fffaf6;
--ink: #2b3445;
--muted: #70809a;
--line: #2b3445;
--line-soft: #eaded5;
--green: #22c55e;
--green-soft: #8dfb96;
--blue: #adddeb;
--blue-soft: #e9f8fc;
--peach: #ffb6ad;
--lavender: #e7e5ff;
```

验收要求：

- 主按钮使用绿色。
- 次按钮使用浅蓝。
- 标签可用绿色、桃色、浅蓝、浅紫，但不要超过两种标签色同时抢焦点。
- 边框统一使用 `--line` 或 `--line-soft`。
- 正文文字使用 `--ink` / `--muted`，不要使用纯黑。

## 5. 布局规范

### 页面宽度

- 主页主体使用 `width: min(1240px, calc(100% - 40px))`。
- 移动端使用 `width: min(100% - 28px, 1240px)`。
- 不允许页面主体贴边。

### 首屏

首屏必须直接表达产品用途，而不是营销空话：

- PMP / CAPM。
- 短时练习。
- 即时解释。
- 错题回看。
- 结构化文章复习。

### 页面区块

- 大页面区块保持清晰留白。
- 不要把 section 本身做成“卡片套卡片”。
- 独立重复项可以是卡片。
- footer 不使用边框卡片，只做普通页脚文本区。

## 6. 卡片规范

卡片分两类，必须区分。

### 普通展示卡片

用于：

- 统计卡片。
- 学习路径说明。
- 文章列表。
- 指南卡片。
- 数据说明。
- 纯文字内容区。

规则：

- 可以有粗边框：`border: 4px solid var(--line)`。
- 可以有圆角：通常 `24px`。
- 不使用按钮式厚阴影。
- hover 最多改变背景色或边框色。
- 不做下压、上抬、弹跳。

### 真实按钮

用于：

- Start practice。
- Choose PMP / CAPM。
- Reset session。
- Skip question。
- Next。
- Review mistakes。
- Clear mistakes。
- Open path / Study center 这类明确命令。

规则：

- 只有真实按钮使用固定阴影层和下压动效。
- 阴影层不动，按钮正面和文字一起下压。
- 按钮文字必须包在子元素里，例如：

```html
<button class="primary-button"><span>Next</span></button>
<a class="text-button" href="#"><span>Open CAPM path</span></a>
```

- 动态生成按钮必须使用 `setPressLabel()` 或同等结构，不能直接塞裸文本节点。
- 新按钮必须匹配 `.primary-button`、`.ghost-button`、`.text-button` 或 `.answer` 的按压机制。

验收检查：

- hover 时按钮背景和文字一起移动。
- 阴影不乱跳。
- 不出现“按钮面动、文字不动”。
- 禁用按钮不能像可点击按钮一样强烈响应。

## 7. 按钮动效标准

当前动效机制：

- `::after` 是固定阴影层。
- `::before` 是按钮正面。
- 直接子元素是文字层。
- hover：正面和文字移动 `3px, 3px`。
- active：正面和文字移动 `5px, 6px`。

新增按钮必须满足：

```css
.primary-button > *,
.ghost-button > *,
.text-button > *,
.answer > * {
  display: inline-flex;
  transition: transform 160ms var(--ease);
}
```

禁止：

- 对按钮元素本身做整体 `transform`，这会导致阴影一起移动。
- 只移动 `::before`，不移动文字层。
- 给非按钮卡片添加同样的 `::before` / `::after` 按压结构。

## 8. Logo 与品牌

品牌必须统一：

- 显示名：PassGrid。
- Logo 意象：书本 + 通过标记。
- 不得出现旧品牌 `LicenseAtlas`。
- 不得出现旧 `PM` 方块 logo。

验收命令：

```powershell
rg "LicenseAtlas|<span>PM</span>|M20 40h9l5-16h10" -n .
```

期望：无命中。若有命中，必须判断是否为历史文档；正式页面不得保留。

## 9. PMP / CAPM 选择区规范

选择区大卡片本身是展示容器，不是按钮。

规则：

- PMP / CAPM 大框不能有按钮式按压动画。
- 只有内部 `Choose PMP` / `Selected CAPM` 按钮可交互。
- 大框选中状态可以用背景色变化或标签变化表达。
- 点击大框空白区域不应触发选择。

验收：

- 鼠标移到大框空白处，不发生按钮式位移。
- 鼠标移到内部按钮，按钮正常下压。
- 选择后，题库、文章区、统计信息同步切换。

## 10. 题目练习区规范

练习区必须支持碎片化学习：

- 答题后立即显示解释。
- 选项顺序必须随机，不得固定 A-B-C-D-A-B-C-D。
- 正确项和错误项视觉清楚。
- Reset / Skip / Next 都是按钮，文字必须跟随按钮面一起动。
- 错题可以保存到本地，并能进入 Review mistakes。

验收：

- 新题渲染后选项顺序有随机化逻辑。
- `currentChoiceOrder` 映射正确，点击视觉选项后仍能按原始正确答案判定。
- 解释文案显示在当前题下方。
- localStorage 读写不报错。

## 11. 文章与指南页面规范

文章页用于结构化复习，不能像课程商城。

规则：

- 文章 hero 卡片可以有粗边框，但不使用按钮式阴影。
- 纯文字内容区不要加厚阴影。
- SVG / 图表中的文字不能过粗、不能溢出、不能竖排挤压。
- CAPM 文章只出现在 CAPM 视图。
- PMP 文章只出现在 PMP 视图。

文章视觉图规范：

- 深色图表块可用于流程图。
- 图内文字建议 Nunito，字号比正文小。
- 长文本必须缩短、拆行或使用 HTML 布局替代 SVG 文字。

## 12. Footer 规范

Footer 是普通页脚，不是卡片。

规则：

- 不加边框。
- 不加圆角卡片背景。
- 不加按钮式阴影。
- 保留链接和免责声明即可。

当前样式应类似：

```css
.site-footer {
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}
```

## 13. 响应式检查

每次新增功能后至少检查：

- 489px 宽移动端。
- 685px 宽移动端 / 小平板。
- 980px 左右断点。
- 1240px 以上桌面。

重点检查：

- 文字是否溢出按钮。
- 按钮是否过宽导致横向滚动。
- 卡片之间是否挤压。
- hero 标题是否过大。
- 指南卡片是否仍可扫描。
- 文章图表文字是否被裁切。

## 14. Analytics / AdSense 检查

当前策略：

- 所有 HTML 页面保留 Google Analytics。
- 所有 `index, follow` 页面加载 AdSense。
- `noindex, nofollow` 的退役页面不加载 AdSense。
- Analytics ID：`G-B2HW123JTE`。
- AdSense publisher：`ca-pub-5018342016303677`。

新增页面要求：

- 若页面是正式可索引页面，必须包含 Analytics 和 AdSense。
- 若页面是退役 / noindex 页面，保留 Analytics，但不加载 AdSense。
- 第三方脚本必须放在 `<head>`。
- 每页只能出现一份 Analytics 和一份 AdSense。

验收命令：

```powershell
node verify-adsense-readiness.mjs
```

## 15. 性能规范

当前加载策略：

- `data.js` 只允许在练习选择/大纲/答题页加载：`practice.html`、`pmp-questions.html`、`capm-questions.html`、`drill.html`。
- 普通文章页、项目页不得加载 `data.js` 或 `script.js`。
- Google scripts 必须使用 `async`。
- CSS / JS / data 修改后要更新 query version，避免本地或线上缓存旧资源。

新增功能后检查：

```powershell
Select-String -Path practice.html,pmp-questions.html,capm-questions.html,drill.html -Pattern "data.js|script.js|styles.css"
```

体积参考：

- `styles.css` gzip 应保持在 10 KB 以内或说明原因。
- `script.js` gzip 应保持在 25 KB 以内或说明原因。
- `data.js` gzip 当前约 63 KB，若题库继续增长，需要考虑按 PMP / CAPM 拆分加载。

## 16. 必跑验证命令

新增 UI 或功能后，至少运行：

```powershell
node --check script.js
node verify-project-bank-scale.mjs
node validate-question-bank.mjs --ci
node verify-pmp-question-quality.mjs
node verify-adsense-readiness.mjs
node verify-pmp-capm-phase.mjs
node verify-pmp-focus.mjs
node verify-long-guide-content.mjs
```

CSS 结构检查可用：

```powershell
@'
const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf8');
let depth = 0;
for (let i = 0; i < css.length; i += 1) {
  if (css[i] === '{') depth += 1;
  if (css[i] === '}') depth -= 1;
  if (depth < 0) throw new Error(`extra closing brace at ${i}`);
}
if (depth !== 0) throw new Error(`unbalanced css braces: ${depth}`);
console.log('CSS brace check passed');
'@ | node -
```

## 17. UI Review Checklist

每次新增功能后按顺序检查：

- 产品定位仍是 PMP/CAPM 题库练习。
- CAPM 仍为默认。
- 没有模拟考试入口或 mock exam 文案。
- 新按钮文字包在 `span` 或动态 press label 中。
- 按钮 hover 时文字和按钮面一起下压。
- 非按钮卡片没有按钮式阴影和按压动画。
- PMP/CAPM 大卡片不可点击，只有内部按钮可点击。
- CAPM 只展示 CAPM 文章，PMP 只展示 PMP 文章。
- 文章页图表文字不溢出、不竖排、不太粗。
- Footer 无边框卡片样式。
- Logo 和品牌统一为 PassGrid。
- 全站 Analytics / AdSense 策略正确。
- 页面没有横向滚动。
- 移动端按钮文字不溢出。
- 资源版本号已更新。
- 验证脚本全部通过。

## 18. 判断标准

一个新增功能可以合并的最低标准：

- 功能可用。
- 不破坏 PMP/CAPM 选择顺序。
- 不引入模拟考试定位。
- 不破坏按钮按压规则。
- 不把展示卡片做成按钮。
- 不引入旧品牌或旧 Logo。
- 不让文章、练习、统计、页脚风格割裂。
- 通过第 16 节验证命令。

