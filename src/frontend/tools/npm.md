# npm

## npm的定义

npm是node.js自带的包管理工具，用来：

- 安装第三方依赖（如 lodash、axios）
- 管理项目依赖（安装、卸载、升级、锁版本）
- 发布自己的包（共享到 npmjs.com）
- 管理项目脚本（用来运行构建、测试、启动等命令）

## npm的构成

1. `package.json`项目的配置文件，记录所有依赖、脚本、元数据

   ```json
   {
     "name": "my-project",
     "version": "1.0.0",
     "description": "示例项目",
     "main": "index.js",
     "scripts": {
       "start": "node index.js"
     },
     "dependencies": {
       "axios": "^1.7.4"
     },
     "devDependencies": {
       "eslint": "^9.0.0"
     }
   }
   
   ```

   - `dependencies`: 项目运行时需要的依赖（生产环境也要用）
   - `devDependencies`: 仅开发阶段需要的依赖
   - `scripts`: 自定义命令（如 `npm run start`）
   - `main`: 包入口文件

2. `node_modules/`

   依赖包的实际安装目录。

   npm 会自动下载依赖并放在这里。

   > ⚠️ 注意：这个文件夹非常庞大，不建议手动修改，也不要上传到 GitHub，应通过 `.gitignore` 忽略。

3. `package-lock.json`

   依赖锁定文件，记录每个包的具体版本、来源、完整性效验等信息。

   作用：

   - 确保团队成员安装的依赖移植；
   - 提高安装速度
   - 保证CI/CD环境的可重复性

## npm常用命令大全

| 命令                    | 作用                            | 示例                          |
| ----------------------- | ------------------------------- | ----------------------------- |
| `npm init`              | 初始化项目，生成 `package.json` | `npm init -y`（自动确认）     |
| `npm install` / `npm i` | 安装所有依赖                    | `npm i`                       |
| `npm install xxx`       | 安装单个依赖                    | `npm i axios`                 |
| `npm install xxx -D`    | 安装开发依赖                    | `npm i eslint -D`             |
| `npm uninstall xxx`     | 卸载依赖                        | `npm uninstall axios`         |
| `npm update`            | 更新依赖                        | `npm update`                  |
| `npm run xxx`           | 运行脚本命令                    | `npm run build`               |
| `npm login`             | 登录                            | `npm run login`               |
| `npm publish`           | 发布包到 npm                    | `npm publish --access public` |
| `npm link`              | 创建软链接（本地调试包）        | `npm link`                    |
| `npm outdated`          | 检查过时依赖                    | `npm outdated`                |
| `npm ci`                | 安装依赖（严格按照 lock 文件）  | CI 环境用                     |

## npm安装机制详解

以`npm install`为例，流程如下：

1. **读取 package.json**

   确认项目需要哪些依赖。

2. **检查 package-lock.json**

   若存在，按锁定版本安装。

3. **解析依赖树**

   npm 计算依赖关系，避免重复安装。

4. **下载 tarball 压缩包**

   从 registry（默认 https://registry.npmjs.org）下载。

5. **解压到 node_modules**

6. **执行生命周期脚本**

   如包中的 `preinstall`、`postinstall` 等钩子。

## npm依赖关系与版本规则

1. **语义化版本**

   格式：`主版本号.次版本号.修订号`

   例如：`2.5.2`

   | 前缀     | 含义                                       |
   | -------- | ------------------------------------------ |
   | `^1.2.3` | 允许次版本号和补丁更新（`>=1.2.3 <2.0.0`） |
   | `~1.2.3` | 只允许补丁更新（`>=1.2.3 <1.3.0`）         |
   | `1.2.3`  | 固定版本                                   |
   | `*`      | 任意版本                                   |

## npm脚本系统

`package.json` 的 `scripts` 字段，可以定义自定义命令：

```json
"scripts": {
  "start": "node index.js",
  "dev": "vite",
  "build": "rollup -c",
  "lint": "eslint src"
}

```

运行方式：

```bash
npm run dev
```

> 💡 特性：脚本中的命令会自动使用 `node_modules/.bin` 下的可执行文件。

## 发布npm包

1. **登录npm**

   ```bash
   npm login
   ```

2. **检查包名是否可用**

   ```bash
   npm search my-utils
   ```

3. **发布**

   ```bash
   npm publish --access public
   ```

   >  普通包只要是状态是公共的，直接`npm publish`发布就行。但作用域包默认状态是私有的，需要`npm publish --access public`这样发布。

4. **更新版本再发布**

   ```bash
   npm version patch    # 小修复
   npm version minor    # 新功能
   npm version major    # 大版本
   npm publish
   ```

   > ⚠️ 不能重复发布同一个版本，否则会报 `Cannot publish over previously published version`。

## npm与 registry（镜像源）

默认源是：

```
https://registry.npmjs.org
```

可以更换为国内镜像（加速）：

```bash
npm config set registry https://registry.npmmirror.com
```

查看当前源：

```bash
npm config get registry
```

也可以使用`nrm`

```bash
npm i nrm -g
npm ls # 查看镜像列表
npm use taobao # 使用选择的源
```

## npm vs pnpm vs yarn

| 对比项   | npm               | yarn       | pnpm           |
| -------- | ----------------- | ---------- | -------------- |
| 默认附带 | ✅                 | ❌          | ❌              |
| 安装速度 | 一般              | 快         | ⚡最快          |
| 存储机制 | 复制依赖          | 扁平化缓存 | 硬链接节省空间 |
| 锁文件   | package-lock.json | yarn.lock  | pnpm-lock.yaml |

> 💬 如果你重视**速度**和**磁盘节省**，推荐使用 **pnpm**。

## npm原理小结

1. npm 是 Node.js 的包管理工具；
2. 安装依赖时会：
   - 读取 `package.json`
   - 根据 `semver` 规则解析版本
   - 从 registry 下载压缩包
   - 解压到 `node_modules`
3. 依赖解析使用**深度优先算法**，会尽可能复用相同版本；
4. `package-lock.json` 保证依赖一致；
5. `npm publish` 会上传压缩包到 registry。