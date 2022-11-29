---
title: git中submodule子模块的简单使用
date: 2022-07-11 17:20:18
categories:
tags:
permalink:
---

# git中submodule子模块的简单使用

## 1. 背景

Git中的submodule子模块，可以把别人维护的仓库当成子模块来给使用，成为自己项目的子模块，在git中使用子模块可以减少冗余重复，大大提高自己的效率。虽然不需要负责子模块的维护，但是还是要在必要的时候进行子模块的同步更新，所以能够简单使用即可，用什么学什么。

## 2. 子模块的添加

添加子模块非常简单，命令如下：

```bash
以博客为例，这里需要进入blogs目录执行
git submodule add <url> <path>
其中，`url`为子模块的路径，`path`为该子模块存储的目录路径。
```

执行成功后，`git status`会看到项目中修改了`.gitmodules`，并增加了一个新文件（为刚刚添加的路径）

`git diff --cached`查看修改内容可以看到增加了子模块，并且新文件下为子模块的提交hash摘要

`git commit`提交即完成子模块的添加

## 3. 子模块的使用

添加子模块后，默认子模块目录下无任何内容。需要在博客的blogs目录中执行如下命令完成子模块的下载，子模块目录下有了源码，再执行相应的makefile即可。

```bash
以博客为例，这里同样需要进入blogs目录执行
git submodule init
git submodule update
或
git submodule update --init --recursive
```

如果只是想拉取指定子模块，使用：

```bash
git submodule update --init 子模块名字
```

如果想要拉取所有的子模块以及子模块下面的子模块，使用：

```bash
git submodule update --init --recursive
```

如果只是想拉取当前目录下所有的子模块，就去掉`--recursive`

```bash
git submodule update --init
```

## 4. 子模块的更新

子模块的维护者提交了更新后，使用子模块的项目必须手动更新才能包含最新的提交。在项目中，进入到子模块目录下，执行 `git pull`更新，查看`git log`查看相应提交。完成后返回到项目目录，可以看到子模块有待提交的更新，使用`git add`，提交即可。

当远程子模块有更新时，如果主仓库只想更新某个子模块，则进入该子模块：

```bash
git pull
```

如果想要更新所有子模块，则使用：

```bash
git submodule foreach git pull
```

## 5.修改并提交子模块

先进入到子模块目录，如`hexo-theme-fluid目录`，然后像正常的仓库一样，进行修改，然后

```bash
git checkout fluid
git add .
git commit -m "增加了fluid的xxx功能"
git push ssh_origin fluid
```

## 6. 删除子模块

有时子模块的项目维护地址发生了变化，或者需要替换子模块，就需要删除原有的子模块。

删除子模块较复杂，步骤如下：

1. `git add .gitmodules && git rm --cached 子模块名称` 先暂存`.gitmodules`文件，否则会报错
2. `rm -rf 子模块目录` 删除子模块目录及源码
3. `vi .gitmodules` 删除项目目录下`.gitmodules`文件中子模块相关条目
4. `vi .git/config` 删除配置项中子模块相关条目
5. `rm .git/modules/*` 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的子模块目录即可

------

执行完删除后，再执行添加子模块命令即可，完成后提交到仓库。
