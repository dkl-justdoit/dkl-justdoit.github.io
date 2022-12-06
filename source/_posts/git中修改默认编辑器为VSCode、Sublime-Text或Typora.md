---
title: git中修改默认编辑器为VSCode、Sublime Text或Typora
comment: twikoo
hide: true
tags:
  - VSCode
  - Sublime Text
  - Typora
categories:
  - - 工具
  - - 文本编辑器
banner_img: /assets/img/banner/a.jpg
index_img: /assets/img/common/a.jpg
math: false
abbrlink: fa6b5160
date: 2022-10-25 20:22:09
layout:
updated:
---

# git中修改默认编辑器

## 1. 将git默认编辑器修改为VSCode

右键git bash，修改git默认编辑器，操作如下：

```bash
git config --global --replace core.editor "code --wait" # 这个已经测试过了，可以使用(其实不修改也可以直接使用"code ."来打开当前文件夹)
git config --global core.editor "code --wait"
```

## 2. 将git默认编辑器修改为Sublime Text 4

1. 首先确定sublime text 4 的安装路径，我的这台电脑的sublime text 完整路径为：`D:\Program Files\Sublime Text\sublime_text.exe`，为了能够在git bash命令行中使用sublime_text.exe，所以需要将`D:\Program Files\Sublime Text`放入环境变量的系统变量中。

```bash
注：这里一定要注意是"D:\Program Files\Sublime Text"而不是"D:\Program Files\Sublime Text\"，多了一个反斜杠和少了一个反斜杠在Windows11系统中有很大区别。
```

2. 将sublime text 4的安装路径`D:\Program Files\Sublime Text`放到环境变量中(可能要重启系统)。
3. 打开git，设置 sublime text 为默认的编辑器， 使用如下命令。

```bash
git config --global core.editor "sublime_text.exe -w"
git config --global core.editor "sublime_text.exe -w|1"
```

此处注意：如果路径中有空格， 类unix及Linux系统中需要用单引号括起来，而Windows系统中需要使用双引号括起来。
-w : ask git to wait for you to finish typing the message in the text editor
l1 : tell git to start at line one, put the cursor at line one

4. 验证有没有效果：`git commit -a`， 之后 sublime text 会被打开，同时一个名为 COMMIT_EDITMSG 文件也会被打开。但输入完成后必须关闭 sublime text，否则 git 无法完成提交。

## 3. 将git默认编辑器修改为Typora

1. 首先确定Typora 的安装路径，我的这台电脑的Typora完整路径为：`D:\Program Files\Typora\Typora.exe`，为了能够在git bash命令行中使用Typora.exe，所以需要将`D:\Program Files\Typora`放入环境变量的系统变量中。

```bash
注：这里一定要注意是"D:\Program Files\Typora"而不是"D:\Program Files\Typora\"，多了一个反斜杠和少了一个反斜杠在Windows11系统中有很大区别。
```

2. 将Typora的安装路径`D:\Program Files\Typora`放到环境变量中(可能要重启系统)。
3. 打开git，设置 Typora为默认的编辑器， 使用如下命令。

```bash
git config --global core.editor "Typora.exe"
```

