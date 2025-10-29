# vscode

## 常用快捷键（必背）

这些是每天都会用到的，掌握后能大幅提高效率：

| 功能               | 快捷键（Windows）       | 说明                         |
| ------------------ | ----------------------- | ---------------------------- |
| 打开命令面板       | `Ctrl + Shift + P`      | 所有命令的入口，万能钥匙     |
| 打开终端           | `Ctrl + ~`              | 集成终端，非常方便           |
| 文件快速跳转       | `Ctrl + P`              | 输入文件名模糊搜索，神速定位 |
| 全局搜索           | `Ctrl + Shift + F`      | 在所有文件中搜索字符串       |
| 查找/替换          | `Ctrl + F` / `Ctrl + H` | 当前文件内查找替换           |
| 选中同名单词       | `Ctrl + D`              | 连续选择多个同样的变量或单词 |
| 多光标编辑         | `Alt + 鼠标左键`        | 同时编辑多个位置             |
| 注释               | `Ctrl + /`              | 单行注释切换                 |
| 格式化代码         | `Shift + Alt + F`       | 自动对齐与美化代码           |
| 查看定义           | `F12` / `Ctrl + 点击`   | 跳转函数/变量定义            |
| 悬浮提示           | `Ctrl + K` `Ctrl + I`   | 查看类型或注释               |
| 分屏               | `Ctrl + \`              | 左右或上下分屏查看文件       |
| 快速重命名         | `F2`                    | 对变量或函数统一重命名       |
| 文件资源管理器切换 | `Ctrl + B`              | 显示/隐藏侧边栏              |

## 常用插件推荐（高效开发）

### 前端开发类

| 插件                              | 说明                             |
| --------------------------------- | -------------------------------- |
| **ESLint**                        | 实时检测代码错误和风格问题       |
| **Prettier**                      | 统一代码格式                     |
| **Path Intellisense**             | 智能路径补全                     |
| **Auto Import**                   | 自动导入依赖                     |
| **Import Cost**                   | 显示 import 包的体积             |
| **HTML CSS Support**              | HTML 中智能提示 CSS 类名         |
| **Tailwind CSS IntelliSense**     | Tailwind 项目必装                |
| **Vue Language Features (Volar)** | Vue 3 官方推荐语言支持           |
| **React Developer Tools**         | React 智能提示和调试支持         |
| **npm Intellisense**              | npm 模块自动补全                 |
| **GitLens**                       | 查看每行代码是谁写的、提交记录等 |

### 工具增强类

| 插件                         | 说明                                 |
| ---------------------------- | ------------------------------------ |
| **Error Lens**               | 把报错信息直接显示在代码行上         |
| **Code Spell Checker**       | 拼写错误检查                         |
| **Bookmarks**                | 添加代码书签，快速跳转               |
| **Todo Tree**                | 自动收集 `TODO` 注释列表             |
| **Peacock**                  | 给不同项目窗口染上不同颜色，避免混淆 |
| **Bracket Pair Colorizer 2** | 彩色括号匹配（美观又实用）           |

## 高效工作流技巧

### 快速跳转项目文件

- 按 `Ctrl + P` 输入文件名模糊匹配（例如输入 `com` 就可能找到 `components/App.vue`）。
- 输入 `:` 再加行号（例如 `:120`）可直接跳转到第 120 行。

### 快速搜索函数 / 类

- `Ctrl + Shift + O`：列出当前文件所有函数、变量。
- `Ctrl + T`：全项目范围搜索符号（比如函数名、类名）。

### 批量重命名变量

- 选中变量 → 按 `F2` → 输入新名字 → VS Code 自动改动所有引用。

### 自动补全导入

输入函数名后，如果未导入，按下 `Ctrl + .`（快速修复）→ 自动添加 `import`。

### 代码片段（Snippets）

在 `.vscode/snippets` 中自定义常用模板。
 例如 Vue 模板：

```
{
  "Vue3 setup": {
    "prefix": "v3setup",
    "body": [
      "<script setup>",
      "import { ref } from 'vue'",
      "",
      "const msg = ref('Hello World')",
      "</script>",
      "",
      "<template>",
      "  <div>{{ msg }}</div>",
      "</template>"
    ],
    "description": "Vue 3 setup basic template"
  }
}
```

输入 `v3setup` → 自动生成 Vue 文件框架。

### 多光标批量编辑

- `Ctrl + D`：选中下一个同名单词；
- `Ctrl + Alt + ↑/↓`：垂直添加光标；
- `Alt + 鼠标左键`：自由添加光标。

### 自动保存

打开设置 → 搜索 “auto save” → 选择 `afterDelay`，写完自动保存，防止遗漏。

### 文件比较

在文件树中选中文件 → 右键 “Select for Compare” → 再选另一文件 → “Compare with Selected”。

## 调试与终端技巧

- 使用 **VS Code 自带调试器**，配置 `.vscode/launch.json` 启动前端项目。
- 终端支持多标签：`Ctrl + Shift + 5` 新建、`Ctrl + Shift + [`/`]` 切换。
- 可设置默认终端为 PowerShell / Git Bash / WSL。

## 性能优化建议

- 禁用不常用的插件；
- 打开设置 `"files.exclude"` 忽略无关目录（如 `node_modules`）；
- 在大项目中开启 `"editor.largeFileOptimizations": true`；
- 配置 `"editor.quickSuggestionsDelay": 0"` 提升智能提示速度。

## 冷门但好用的功能

| 功能                | 用法                                    |
| ------------------- | --------------------------------------- |
| 快速打开最近文件    | `Ctrl + R`                              |
| 同步 VS Code 设置   | 登录 Microsoft 或 GitHub 账户           |
| Markdown 预览       | `Ctrl + Shift + V`                      |
| JSON 格式化         | `Alt + Shift + F`                       |
| 快速折叠/展开代码块 | `Ctrl + Shift + [` / `Ctrl + Shift + ]` |
| Peek 定义（不跳转） | `Alt + F12`                             |
| 终端拖拽执行命令    | 直接拖文件或路径到终端自动补全路径      |

------

## 实战推荐配置

可以在项目根目录创建 `.vscode/settings.json`：

```
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.singleQuote": true,
  "prettier.semi": false
}
```

→ 保存时自动格式化 + ESLint 修复，非常爽！
