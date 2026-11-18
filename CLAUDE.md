# CLAUDE.md · JH-HomeMenu AI 协作上下文导航

> 本文件与根目录 [AGENTS.md](AGENTS.md) 保持同步，供 Claude Code、Antigravity 及各类协作 Agent 直接读取项目架构、命令与规范。

---

## 1. 项目定位与核心业务规则

`JH-HomeMenu`（家味食光）是一款专为特定家庭饮食偏好定制的轻量级单页 Web 应用（SPA）。

### 核心领域约束（修改或新增菜品必读）
1. **严格「无葱蒜」饮食红线**：
   - `recipeData` 中的所有菜品配料（`ingredients`）**严禁出现葱（小葱、大葱、洋葱）、蒜（大蒜、蒜苗、蒜苔、有蒜豆豉）**。
   - 传统含葱蒜菜式在录入时必须显式标注并采用去腥提香平替方案（例如使用 `生姜`/`姜片`/`姜丝`/`姜汁`、`芹菜(平替)`、`香菜`、`豆豉(无蒜)`、`椒盐`、`花椒` 等）。
2. **偏好加权抽签机制**：
   - 含有家庭高频偏好食材（如胡萝卜、土豆、牛腩、排骨、山药等，`isFav: true`）的菜品，在点击「今天吃啥？」随机抽选时享有 **3 倍抽中权重**（普通菜品入池 1 次，`isFav` 菜品入池 3 次）。

---

## 2. 仓库目录与架构索引

本项目采用**零外部依赖、零构建打包**的纯原生前端架构（Vanilla HTML5 + CSS3 + ES6 JavaScript）：

```text
JH-HomeMenu/
├── index.html   # 页面骨架：顶栏抽签入口、搜索与分类导航、菜品网格容器、结果弹窗
├── script.js    # 数据源与交互逻辑：44 道无葱蒜菜谱数据、搜索/分类过滤、3x 加权随机算法
├── style.css    # 视觉样式：CSS 变量主题、响应式 Grid 布局、卡片悬浮与弹窗 popIn/float 动画
└── README.md    # 项目简介
```

### 2.1 数据模型 (`script.js` -> `recipeData`)
每条菜品记录遵循以下对象结构（当前共收录 44 道菜）：
```javascript
{
  name: "土豆片炒肉",                        // 菜品名称（若有特殊去葱蒜改版可注明，如"干锅土豆片(无蒜版)"）
  ingredients: ["土豆", "猪肉", "生姜", "生抽"], // 配料数组（必须通过无葱蒜检查）
  type: "meat",                             // 分类枚举："meat"（有肉类） | "veg"（纯素/蛋奶豆制品类）
  isFav: true,                              // 是否为偏好菜品（true 时渲染 ❤️ 徽章并在随机池获得 3x 权重）
  isSour: false,                            // 酸味/开胃风味标记（已在数据层预留，如糖醋里脊、酸萝卜老鸭汤等为 true）
  icon: "🥔"                                // 菜品卡片与弹窗展示的 Emoji 图标
}
```

### 2.2 核心函数与 DOM 绑定关系
- **`displayRecipes(list)`**：清空并重新渲染 `#menu-grid`。每张 `.recipe-card` 展示 Emoji 图标（`.card-img`）、可选偏好徽章（`.fav-badge`）、菜名与顿号连接的配料表。
- **`filterList()`**：组合过滤逻辑，同时满足：
  1. **关键词匹配**：`#search-bar` 输入值匹配 `item.name` 或 `item.ingredients` 中的任意配料项；
  2. **标签筛选**：读取 `.category-tags .tag.active` 的 `data-type` 属性（`all` 全部 / `meat` 有肉类 / `veg` 纯素类 / `fav` `item.isFav === true`）。
- **`showResult(recipe)` 与随机抽签**：
  - 点击 `#random-pick` 构建加权数组 `pool`（`isFav` 追加 2 次额外副本），随机抽取后填充 `#res-icon`、`#res-name`、`#res-list`，并为 `#modal-overlay` 添加 `.active` 类显示毛玻璃弹窗。
  - 弹窗内 `#re-roll`（「换一个」）直接触发 `document.getElementById('random-pick').click()` 重新抽签；点击 `.close-btn`、`#accept-btn` 或遮罩背景 `#modal-overlay` 关闭弹窗。
- **预留扩展点**：
  - `index.html` 弹窗中预留了 `<div id="res-tags"></div>` 容器，数据层预留了 `isSour` 布尔字段，后续如需在筛选栏或弹窗中展示「酸甜/开胃」标签可直接对接。

---

## 3. 启动、预览与验证命令

本项目无需安装任何依赖（无 `package.json` / `node_modules`），支持直接打开或通过本地静态服务器预览：

### 3.1 本地快速启动
```powershell
# 方式 1：直接用系统默认浏览器打开
Start-Process "index.html"

# 方式 2：使用 Python 启动本地 HTTP 静态服务（推荐用于开发调试）
python -m http.server 8080
# 浏览器访问 http://localhost:8080
```

### 3.2 语法与菜谱合规性自检脚本
修改 `script.js` 后，可在终端执行以下单行命令验证 JS 语法及「无葱蒜」数据约束：
```powershell
node -e "const fs=require('fs'); const code=fs.readFileSync('script.js','utf8'); const m=code.match(/const recipeData = (\[[\s\S]*?\]);/); const data=eval(m[1]); console.log('Total recipes:', data.length); const bad=data.filter(r=>r.ingredients.some(i=>/[葱蒜]/.test(i) && !i.includes('无蒜') && !i.includes('无葱'))); if(bad.length){console.error('Violation:', bad); process.exit(1);} console.log('All recipes pass no-onion/no-garlic check!');"
```

---

## 4. 编码与维护规范

1. **保持纯静态零依赖**：
   - 保持 `index.html`、`script.js`、`style.css` 三文件直接运行架构，不引入构建工具或重型前端框架。
2. **样式与交互一致性**：
   - 颜色统一复用 `style.css` `:root` 中的 CSS 变量（`--primary`、`--secondary`、`--accent`、`--bg`、`--text`）。
   - 若把卡片渲染从 `innerHTML` 扩展为用户可输入的动态内容，注意防范 XSS（优先使用 `textContent`）。
3. **安全与隐私红线**：
   - 严禁在代码、注释、文档或 Commit Message 中包含个人真实姓名、私人邮箱、电话号码、局域网/公网 IP 或带个人用户名的本机路径。
   - 严禁提交任何 API Key、Token 或无关临时文件。
4. **Git 提交规范**：
   - 遵循 Conventional Commits（`feat:`、`fix:`、`docs:`、`style:`、`refactor:`）。
   - 提交前执行 `git status` 与 `git diff --cached` 检查变更内容。
