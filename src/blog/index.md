# 项目规范

## 1.editorconfig

### 作用

> 让不同开发者、不同编辑器打开同一个项目时，代码的缩进、换行、文件编码等行为保持一致

### 配置

| 配置项                     | 作用                                        |
| -------------------------- | ------------------------------------------- |
| `indent_style`             | 缩进风格：`space`（空格）或 `tab`（制表符） |
| `indent_size`              | 缩进宽度（例如 2、4）                       |
| `end_of_line`              | 换行符类型：`lf`（Unix）、`crlf`（Windows） |
| `charset`                  | 文件字符集（一般设为 `utf-8`）              |
| `trim_trailing_whitespace` | 是否删除行尾多余空格                        |
| `insert_final_newline`     | 文件末尾是否自动补一个空行                  |
| `max_line_length = off`    | 关闭单行限制                                |
| `[*.md]` 这种节            | 只对特定文件类型应用规则                    |

### 示例

```yaml
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = crlf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

### 插件

VS Code **本身** 并不会自动解析 `.editorconfig`。
需要安装插件 **`EditorConfig for VS Code`** 才能让 VS Code 读取并应用 `.editorconfig` 文件中的规则

> 当安装此插件后，在`vscode`的资源管理器右键菜单中会提供一个菜单选项`Generate .editorconfig`，可快速创建`.editorconfig`配置文件

## 2.prettier

### 作用

**Prettier** 是一个“代码格式化工具”，它的核心作用是 **统一代码风格**，让所有开发者写的代码风格一致，不再因为空格、换行、缩进、单双引号等问题产生争议。

### 特点

- **格式化一致**：不关注代码逻辑，只关注排版和格式。

- **自动化**：可以集成在编辑器或 git 钩子中，保存自动格式化。

- **支持多语言**：JavaScript、TypeScript、JSON、HTML、CSS、Markdown 等。

- **不可配置原则**：与 ESLint 不同，Prettier 的配置项很少，鼓励“少而统一”。

### 安装

```bash
npm i prettier -D
```

### 配置

```json
{
  "printWidth": 80,         // 每行最大长度，超过换行
  "tabWidth": 2,            // 缩进空格数
  "useTabs": false,         // 是否使用 tab
  "semi": true,             // 行尾加分号
  "singleQuote": true,      // 使用单引号
  "trailingComma": "es5",   // 尾随逗号，none/es5/all
  "bracketSpacing": true,   // 对象大括号内空格 { a: 1 }
  "arrowParens": "always"   // 箭头函数参数括号 always/avoid
}
```

### 使用

```bash
npx prettier --write src/index.js
```

### 编辑器集成

1. 安装 `Prettier - Code formatter` 插件

2. 设置默认格式化器：

   ```json
   "[javascript]": {
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

## 3.eslint

### 作用

对代码进行格式化和质量检查。通常`eslint`只负责质量检查，代码格式化还是交给专业的工具prettier去做

### 安装

```bash
npm install eslint -D
```

### 初始化

```bash
npx eslint --init
```

### 配置

```javascript
module.exports = {
  root: true, // 指定为根配置，避免父级目录干扰
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021, // 支持最新语法
    sourceType: 'module', // ES模块
  },
  extends: [
    'eslint:recommended', // ESLint 官方推荐规则
    'plugin:react/recommended', // React 推荐规则
    'airbnb', // Airbnb 规范
  ],
  plugins: ['react', 'import'], // 自定义插件
  rules: {
    'no-console': 'warn', // console.log 提示警告
    'quotes': ['error', 'single'], // 强制单引号
    'semi': ['error', 'always'], // 强制分号
  },
};

```

### 脚本

```bash
eslint src/ --fix
```

### 与prettier配合使用

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

```javascript
extends: ['plugin:prettier/recommended']
```

### 编辑器集成

- 安装eslint插件

- 配置

  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
   "eslint.validate": [
     	"javascript",
   ],
  ```