---
title: Git 远程删除分支后，本地 git branch -a 依然能看到的解决办法
comment: twikoo
hide: true
tags:
  - Git
categories:
  - - 工具
banner_img: /assets/img/banner/a.jpg
index_img: /assets/img/common/a.jpg
math: false
abbrlink: dcbbdee8
date: 2022-10-08 16:21:22
layout:
updated:
---

# git 远程删除分支后，本地 git branch -a 依然能看到远程的分支

 `git branch -a` 命令可以查看所有本地分支和远程分支（`git branch -r` 可以只查看远程分支）。发现很多在远程仓库已经删除的分支在本地依然可以看到。

```bash
vain@XXX-BF MINGW64 ~ (hexo-source)
$ git branch -a
* hexo-source
  master
  remotes/ssh_origin/hexo-source # 带有remotes/都是远程仓库使用过的分支，且如果开启颜色显示的话，会红色显示

vain@XXX-BF MINGW64 ~ (hexo-source)
$
```

 `git remote show origin`或`git remote show ssh_origin`，可以查看remote地址，远程分支，还有本地分支与之相对应关系等信息。此时我们可以看到那些远程仓库已经不存在的分支，根据提示，使用 `git remote prune origin` 或`git remote prune ssh_origin`命令可以删除那些远程仓库不存在的分支。

```bash
$ git remote prune ssh_origin
 
Pruning ssh_origin
URL: https://github.com/xxx/xxx.git
 * [pruned] ssh_origin/develop
 * [pruned] ssh_origin/right
```
