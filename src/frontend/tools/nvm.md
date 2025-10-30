# NVM

## 什么是 nvm？

**nvm（Node Version Manager）** 是一个命令行工具，用于：

- ✅ 管理多个 Node.js 版本
- ✅ 快速切换不同版本（如 Node 14、16、18）
- ✅ 为不同项目设置不同的 Node 版本

它解决了“一个电脑上多个项目需要不同 Node 版本”的痛点。

## 安装 nvm

### Windows 用户安装（推荐使用 `nvm-windows`）

> Windows 官方的 nvm 与 macOS/Linux 不同，它是 **独立版本**。
>  项目地址：<https://github.com/coreybutler/nvm-windows>

#### 1. 下载

前往 GitHub Releases 页面下载最新版：
 👉 <https://github.com/coreybutler/nvm-windows/releases>

下载文件：

```
nvm-setup.exe
```

#### 2. 安装步骤

双击运行 `nvm-setup.exe`，然后：

1. 选择安装路径（建议默认即可）
2. 指定 Node.js 的安装路径（nvm 会自动管理）
3. 点击“Next” → “Install” → “Finish”

安装完成后，打开 **命令提示符 (cmd)** 或 **PowerShell**，输入：

```
nvm version
```

如果显示版本号，比如：

```
1.1.12
```

说明安装成功 🎉

## nvm 的常用命令

| 功能                         | 命令示例                                                     | 说明                     |
| ---------------------------- | ------------------------------------------------------------ | ------------------------ |
| 查看已安装的 Node 版本       | `nvm ls`                                                     | 显示本地安装的 Node 版本 |
| 查看可安装的版本列表         | `nvm list available` *(Windows)* `nvm ls-remote` *(mac/Linux)* | 查看所有可用版本         |
| 安装指定版本                 | `nvm install 18.16.0`                                        | 安装 Node v18.16.0       |
| 安装最新 LTS（长期支持）版本 | `nvm install --lts`                                          | 安装当前官方推荐的稳定版 |
| 使用指定版本                 | `nvm use 18.16.0`                                            | 临时切换到该版本         |
| 查看当前使用的版本           | `nvm current`                                                |                          |
| 卸载某版本                   | `nvm uninstall 16.20.0`                                      | 删除某个版本             |
| 设置默认版本                 | `nvm alias default 18.16.0`                                  | 新终端默认使用该版本     |
| 查看别名                     | `nvm alias`                                                  | 查看版本别名             |

## 实战示例

假设你要在两种 Node 版本之间切换：

### 1️⃣ 安装两个版本

```
nvm install 16.20.0
nvm install 18.16.0
```

### 2️⃣ 查看已安装版本

```
nvm ls
```

输出示例：

```
  * 18.16.0 (Currently using)
    16.20.0
```

### 3️⃣ 切换版本

```
nvm use 16.20.0
node -v
# v16.20.0
```

### 4️⃣ 设置默认版本

```
nvm alias default 18.16.0
```

以后每次打开终端自动使用 Node 18。

## nvm 的原理（简略理解）

nvm 的作用机制其实很简单：

- 它会把不同版本的 Node.js 安装在不同的文件夹；
- 当你 `nvm use` 时，它会修改系统的 `PATH` 环境变量；
- 让系统“优先”使用你选择的版本。

可以理解为：

> 它不是安装多个 Node，而是通过“路径切换”来选择你想用的 Node。

## 常见问题 🧩

### ❓1. 安装后命令无效

**原因**：环境变量未生效。
 **解决**：

- 重启命令行（或电脑）；

- 确认 `nvm` 路径在系统 PATH 中；

- 或手动执行：

  ```
  source ~/.bashrc
  ```

------

### ❓2. npm 命令找不到

每个 Node 版本都有独立的 npm。
 解决办法：

```
nvm use 18.16.0
npm -v
```

若报错，可重新安装 npm：

```
nvm install 18.16.0 --reinstall-packages-from=system
```

------

### ❓3. 如何为项目固定 Node 版本？

在项目根目录创建一个 `.nvmrc` 文件：

```
18.16.0
```

以后进入项目后执行：

```
nvm use
```

会自动切换到 `.nvmrc` 指定的版本。

## 总结

| 操作     | 命令                          |
| -------- | ----------------------------- |
| 查看版本 | `nvm ls`                      |
| 安装版本 | `nvm install <version>`       |
| 使用版本 | `nvm use <version>`           |
| 默认版本 | `nvm alias default <version>` |
| 删除版本 | `nvm uninstall <version>`     |