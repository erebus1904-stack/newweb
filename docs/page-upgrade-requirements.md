# PassGrid 页面升级要求

本文档记录后续页面升级时必须遵守的项目要求。适用于 PMP/CAPM 题库页、prompt 页、学习路径页、mock exam 页、首页入口和 SEO 落地页。

## 1. UI 基线规范

页面升级必须以现有 UI 为基准，不重新设计视觉系统。

### 1.1 不允许随意改动的 UI 基础

- 字体族不动。
- 字号体系不动。
- 标题层级不动。
- 正文字重、行高和颜色不动。
- 主色、辅助色、背景色、边框色不动。
- 卡片圆角、边框、阴影和内边距不动。
- 页面最大宽度、左右留白、移动端留白不动。
- 顶部导航、移动端菜单、footer 结构不动。
- 按钮样式、链接样式、CTA 样式不动。

### 1.2 新增内容的 UI 写法

- 不为了新增内容重做视觉体系。
- 优先复用现有类名和组件，例如 `guide-section`、`section-heading`、`guide-grid`、`guide-card`、`practice-panel`、`domain-card`、`prompt-card`。
- 新增说明内容优先放在现有 section 结构中，不额外创建新的视觉模块。
- 新增入口优先使用现有卡片、导航链接或 CTA 形态。
- `styles.css` 默认不动。只有在页面无法复用现有样式、且用户明确同意时，才允许新增极小范围样式。

### 1.3 宽屏和窄屏 UI 要求

- 宽屏下，卡片列数、边框、字体、间距必须和原页面一致。
- 窄屏下，内容必须自然单列或按原响应式规则折叠。
- 不允许出现横向滚动。
- 不允许出现文字溢出。
- 不允许出现卡片互相挤压。
- 不允许出现按钮文字遮挡。
- 不允许出现标题、正文、卡片、导航互相重叠。
- 不允许因为新增文案导致移动端首屏结构明显变形。

### 1.4 UI 检查基准

每次页面升级后，至少对比这些点：

- `body` 字体是否仍然是项目原字体栈。
- `.guide-card` 圆角是否仍为原项目值。
- `.guide-card` 边框颜色是否仍为原项目值。
- 页面是否存在 `documentElement.scrollWidth > clientWidth` 的横向溢出。
- 新增卡片是否有 `scrollWidth > clientWidth` 或明显文本溢出。
- 移动端菜单、footer、面包屑是否仍正常显示。

## 2. 内容真实性优先

- 涉及 PMP、CAPM、PMI、Pearson VUE、考试题量、考试时长、考试版本、报考要求、考试政策等信息时，必须核实官方来源或明确标注为站内练习组织方式。
- 不把站内题库比例写成 PMI 官方考试比例，除非已经从官方资料核实。
- 对容易变化的信息使用具体日期，不使用含混的“最新”“当前”“明年”等表述。
- 不写通过保证、分数保证、收入保证、就业保证、官方认可暗示。
- PassGrid 必须继续保持独立声明：不隶属于 PMI，也不受 PMI 背书。

## 3. 页面入口必须可见

- 新增页面不能只是存在文件，必须从合理的入口链接过去。
- 重要入口至少应出现在相关页面之一：首页、`practice.html`、`blog.html`、`programs/pmp.html`、`pmp-ai-prompts.html`、题库页或 mock exam 页。
- 新增 prompt 页必须能从 prompt hub 进入；新增练习/复盘相关内容必须能从题库或学习路径进入。
- 修改后需要检查本地 URL 是否能直接打开，不能只检查文件存在。

## 4. SEO 页面要求

- SEO 落地页必须有可索引的静态说明内容，不能只依赖 JavaScript 渲染。
- 题库页要说明题库如何组织、适合何时使用、和 mock exam 或章节练习有什么区别。
- Prompt 页不能变成泛泛的 AI prompt 库，必须围绕 PMP 学习、PMP 复盘、PMP 考试操作、官方信息核实或项目经理工作场景。
- 每个新增 indexable 页面必须同步：
  - canonical
  - meta description
  - Open Graph / Twitter description
  - JSON-LD
  - `_private/seo-page-map.mjs`
  - `sitemap.xml`
- `drill.html` 继续作为功能页处理，不作为主要 SEO 落地页。

## 5. 内部链接要求

- 页面之间要按学习路径自然互链，不做孤立页面。
- PMP 题库页应能链接到章节练习、mock exam、study prompts、mistake-review prompts 和相关 PMP guide。
- PMP mock exam 页应能链接到题库页、章节练习、mistake-review prompts、exam operations prompts 和考试版本说明。
- PMP chapter practice 页应能链接到 study prompts、mistake-review prompts、PMP study plan、PMP domain practice 和 mock exam。
- CAPM 页应保持 CAPM 基础定位。可以桥接到 PMP，但不能把 CAPM 页面改成 PMP prompt 关键词页面。

## 6. Prompt 页面要求

- Prompt 页必须包含实际可复制的 prompt，不只写说明文。
- 每个 prompt 卡片建议包含：
  - Use case
  - Prompt text
  - What to paste
  - Expected output
  - Next step
- Prompt 内容要服务具体学习或工作动作，例如：复盘错题、制定学习计划、核实官方政策、整理考试日清单、创建项目章程、做 stakeholder analysis。
- 不创建与 PMP/CAPM/项目管理无关的泛 prompt 分类。

## 7. 宽屏和窄屏检查

每次页面升级后至少检查：

- 桌面宽度：约 1280px 或 1366px。
- 移动宽度：约 390px。
- 页面没有横向溢出。
- 新增卡片没有文本溢出。
- 标题、正文、按钮、卡片边框和间距与原页面一致。
- 当前页面主要入口、面包屑和 footer 仍然正常。

## 8. 推荐验证命令

按修改范围选择运行：

```powershell
node _private\verify-site-seo-basics.mjs
node _private\verify-indexable-pages.mjs
node _private\verify-structured-data.mjs
node _private\verify-prompt-seo.mjs
node _private\verify-question-bank-structure.mjs
node _private\verify-question-bank-seo.mjs
git diff --check
```

本地 URL 检查示例：

```powershell
curl.exe -L -s -o NUL -w "STATUS:%{http_code} SIZE:%{size_download}`n" http://127.0.0.1:4173/pmp-questions.html
```

## 9. 修改范围控制

- 每一步只改当前阶段需要的文件，不做无关重构。
- 不回滚用户或其他工具产生的无关改动。
- 如果工作区里有无关未跟踪文件，除非用户要求，否则保持不动。
- 提交前需要确认 `styles.css` 是否被意外修改；如果本次目标不涉及样式，`styles.css` 应无 diff。

## 10. 当前阶段记录

- Phase 1：PMP AI Prompts MVP 已完成。
- Phase 2：Operations / Research / Career prompt pages 已完成。
- Phase 3：Project manager AI prompts 已完成。
- Phase 4：Question bank SEO enhancement 已完成。
- 下一阶段应以文档中的 Phase 5 reporting / review process 为主，除非用户重新调整优先级。
