# git 常用命令。

## 创建SSH Key
```shell
$ ssh-keygen -t rsa -C "备注"
```

## 测试SSH key配对成功

```shell
$ ssh -T git@github.com
```

## 配置用户信息

```shell
$ git config --global user.name "Your Name"             
$ git config --global user.email "email@example.com"
```

## 仓库
> 在当前目录新建一个Git代码库
```shell
$ git init
```

> 新建一个目录，将其初始化为Git代码库
```shell
$ git init [project-name]
```

> 下载一个项目和它的整个代码历史
```shell
$ git clone [url]
```
## 增加/删除文件
> 添加指定文件到暂存区
```shell
$ git add [file1] [file2] ...
```

> 添加指定目录到暂存区，包括子目录
```shell
$ git add [dir]
```

> 添加当前目录的所有文件到暂存区
```shell
$ git add .
```

> 删除工作区文件，并且将这次删除放入暂存区
```shell
$ git rm [file1] [file2] ...
```

> 停止追踪指定文件，但该文件会保留在工作区
```shell
$ git rm --cached [file]
```

## 代码提交
> 提交暂存区到仓库区
```shell
$ git commit -m [message]
```

> 提交工作区自上次commit之后的变化，直接到仓库区
```shell
$ git commit -a
```

## 查看信息
> 显示有变更的文件
```shell
$ git status
```

> 显示当前分支的版本历史
```shell
$ git log
```

> 显示当前分支的最近几次提交
```shell
$ git reflog
```
## 分支

> 列出所有本地分支

```shell
$ git branch
```

> 新建一个分支，但依然停留在当前分支

```shell
$ git branch [branch-name]
```

> 新建一个分支，并切换到该分支

```shell
$ git checkout -b [branch]
```

> 切换到指定分支，并更新工作区

```shell
$ git checkout [branch-name]
```

> 合并指定分支到当前分支

```shell
$ git merge [branch]
```

> 删除分支

```shell
$ git branch -d [branch-name]
```

## 远程同步

> 下载远程仓库的所有变动
```shell
$ git fetch [remote]
```

> 显示所有远程仓库
```shell
$ git remote -v
```

> 显示某个远程仓库的信息
```shell
$ git remote show [remote]
```

> 增加一个新的远程仓库，并命名
```shell
$ git remote add [shortname] [url]
```

> 取回远程仓库的变化，并与本地分支合并
```shell
$ git pull [remote] [branch]
```

## 撤销
> 恢复暂存区的指定文件到工作区
```shell
$ git checkout [file]
```

> 恢复某个commit的指定文件到暂存区和工作区
```shell
$ git checkout [commit] [file]
```

> 恢复暂存区的所有文件到工作区
```shell
$ git checkout .
```

> 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
```shell
$ git reset [file]
```

> 重置暂存区与工作区，与上一次commit保持一致
```shell
$ git reset --hard 
```
