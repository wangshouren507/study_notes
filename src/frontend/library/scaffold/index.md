# 脚手架

## `giget` —— 下载模板项目

### 用途

`giget` 是一个用于从 **GitHub、GitLab、Bitbucket** 等平台快速下载模板项目的库。

### 核心特点

- 支持 GitHub、GitLab、Bitbucket、Gitee 等多源
- 支持压缩包下载或直接 clone
- 支持缓存（速度更快）
- 无需依赖 `git` 命令（默认下载 zip）

### 示例

```javascript
import { downloadTemplate } from 'giget'

async function createProject() {
  const { dir } = await downloadTemplate('github:user/my-template', {
    dir: './my-app',
    force: true, // 若存在同名目录则覆盖
  })
  console.log('模板下载完成：', dir)
}
createProject()
```

------

## `ora` —— CLI 终端加载动画（Spinner）

### 用途

`ora` 用于在命令行中显示一个**转动的加载动画**，让脚手架执行过程更友好，比如“正在下载模板…”、“正在安装依赖…”等。

### 示例

```javascript
import ora from 'ora'

const spinner = ora('正在下载模板...').start()

setTimeout(() => {
  spinner.succeed('下载完成！')
}, 2000)
```

### 常用方法

| 方法            | 含义           |
| --------------- | -------------- |
| `.start()`      | 开始动画       |
| `.succeed(msg)` | 成功状态并停止 |
| `.fail(msg)`    | 失败状态并停止 |
| `.info(msg)`    | 提示状态       |
| `.warn(msg)`    | 警告状态       |

------

## `chalk` —— 终端输出文字着色

### 用途

`chalk` 用来给终端输出加上**颜色和样式**，让 CLI 输出更清晰。

### 示例

```javascript
import chalk from 'chalk'

console.log(chalk.green('操作成功！'))
console.log(chalk.red.bold('错误：下载失败'))
console.log(chalk.blue.bgYellow('提示信息'))
```

### 常用颜色和样式

- 颜色：`red`、`green`、`yellow`、`blue`、`magenta`、`cyan`
- 样式：`bold`、`italic`、`underline`、`bgColor`

------

## `figlet` —— ASCII 艺术字生成器

### 用途

`figlet` 可以把普通文本转为 ASCII 艺术风格的标题，比如 CLI 启动时的 Logo。

### 示例

```javascript
import figlet from 'figlet'

figlet('My CLI', (err, data) => {
  console.log(data)
})
```

输出：

```bash
 __  __       _      _     
|  \/  | __ _| | ___| |__  
| |\/| |/ _` | |/ _ \ '_ \ 
| |  | | (_| | |  __/ | | |
|_|  |_|\__,_|_|\___|_| |_|
```

------

## `commander` —— 命令行参数解析器

###  用途

`commander` 用于定义命令、选项、参数，是 CLI 的“大脑”。

### 示例

```javascript
import { Command } from 'commander'
const program = new Command()

program
  .name('my-cli')
  .description('自定义脚手架')
  .version('1.0.0')

program
  .command('create <project>')
  .description('创建新项目')
  .option('-f, --force', '强制覆盖')
  .action((project, options) => {
    console.log('创建项目：', project, '选项：', options)
  })

program.parse(process.argv)
```

运行：

```bash
my-cli create demo -f
# => 创建项目：demo 选项：{ force: true }
```

------

## `fs-extra` —— 文件系统增强版

### 用途

`fs-extra` 是对 Node.js `fs` 模块的增强，支持 Promise 和更多便捷方法。

### 常用函数

| 函数                    | 功能             |
| ----------------------- | ---------------- |
| `copy(src, dest)`       | 复制文件或文件夹 |
| `remove(path)`          | 删除文件或文件夹 |
| `ensureDir(path)`       | 确保目录存在     |
| `readJson(path)`        | 读取 JSON 文件   |
| `writeJson(path, data)` | 写入 JSON 文件   |

### 示例

```javascript
import fs from 'fs-extra'

await fs.ensureDir('./dist')
await fs.copy('./template', './dist')
await fs.writeJson('./dist/config.json', { name: 'my-cli' })
```

------

## `is-unicode-supported` —— 检测终端是否支持 Unicode 字符

### 用途

有些终端（如旧版 Windows）不支持 Unicode 符号（如 spinner 动画符号 ❯、✔），这个库可以帮助检测支持性，从而动态切换。

### 示例

```javascript
import isUnicodeSupported from 'is-unicode-supported'

console.log(isUnicodeSupported ? '✅ 支持 Unicode' : '❌ 不支持 Unicode')
```

通常配合 `ora` 或 `chalk` 使用，防止乱码。

------

## `table` —— 在终端打印表格

###  用途

`table` 库用于在 CLI 中打印**整齐的表格数据**。

###  示例

```
import { table } from 'table'

const data = [
  ['项目', '描述'],
  ['my-cli', '自定义脚手架'],
  ['version', '1.0.0']
]

console.log(table(data))
```

输出：

```
┌────────┬──────────────┐
│ 项目   │ 描述         │
├────────┼──────────────┤
│ my-cli │ 自定义脚手架 │
│ version│ 1.0.0        │
└────────┴──────────────┘
```

------

## `shelljs` —— 执行系统命令的库

### 用途

`shelljs` 让你在 Node 中像写 Shell 一样执行命令（例如 `git clone`、`npm install`）。

### 示例

```javascript
import shell from 'shelljs'

shell.echo('开始安装依赖...')
if (shell.exec('npm install').code !== 0) {
  shell.echo('❌ 安装失败')
  shell.exit(1)
}
```

### 常用方法

| 方法            | 功能     |
| --------------- | -------- |
| `exec(cmd)`     | 执行命令 |
| `cd(path)`      | 切换目录 |
| `ls(path)`      | 列出文件 |
| `cp(src, dest)` | 复制文件 |
| `rm(path)`      | 删除文件 |

------

## `@inquirer/prompts` —— 交互式命令行输入

### 用途

`@inquirer/prompts` 是新版 `inquirer` 的轻量替代，用于创建命令行交互问题（输入、选择、确认等）。

### 示例

```javascript
import { input, select, confirm } from '@inquirer/prompts'

const name = await input({ message: '请输入项目名称：' })
const type = await select({
  message: '请选择模板类型：',
  choices: [
    { name: 'Vue 3', value: 'vue3' },
    { name: 'React', value: 'react' },
  ],
})
const overwrite = await confirm({ message: '是否覆盖已存在文件？' })

console.log({ name, type, overwrite })
```

输出交互式：

```
? 请输入项目名称：my-app
? 请选择模板类型： › Vue 3
? 是否覆盖已存在文件？ › (Y/n)
```

------

## 🧱 总结一览表

| 库名                     | 作用             | 示例用途                    |
| ------------------------ | ---------------- | --------------------------- |
| **giget**                | 下载远程模板     | 拉取 GitHub 模板项目        |
| **ora**                  | 动画加载提示     | 下载中/安装中转圈动画       |
| **chalk**                | 彩色终端文字     | 错误红色、成功绿色          |
| **figlet**               | ASCII 艺术字     | CLI 启动时展示 Logo         |
| **commander**            | 命令与选项解析   | 定义 `create <name>` 命令   |
| **fs-extra**             | 文件操作增强     | 复制模板文件、写入配置      |
| **is-unicode-supported** | 检测终端字符支持 | 防止 emoji 显示异常         |
| **table**                | 输出表格         | 打印选项列表、帮助信息      |
| **shelljs**              | 执行系统命令     | `git clone` / `npm install` |
| **@inquirer/prompts**    | 命令行交互       | 输入项目名、选择模板        |
