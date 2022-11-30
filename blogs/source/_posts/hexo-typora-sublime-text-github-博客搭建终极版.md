---
title: hexo + typora + sublime text + github 博客搭建终极版
date: 2022-11-26 21:25:38
categories:
tags:
permalink:
---

# hexo + typora + sublime text  + github 博客搭建终极版

## 使用说明

### hexo博客结构说明

- 现在使用的博客目录结构：
  BLOGS中有一个blogs子文件夹，blogs子文件夹是专门用来存放博客源文件用的。由于想要多端同步博客源文件，这里便将BLOGS文件夹下所有的博客源文件推送到`dkl-justdoit.github.io`远程仓库的`hexo-source`分支。博客发布时，可以在blogs文件夹中使用hexo三件套来进行新博客的发布，推送到`dkl-justdoit.github.io`远程仓库的`main`(默认)分支。
- 以后可以使用的博客目录结构：
  其实完全可以不用单独创建一个专门用来存储博客源文件的文件夹，可以直接放到根文件夹BLOGS下，只用一个BLOGS文件夹也是可以的，不会影响博客源文件的备份以及新博客的正常发布。

其实，二者的区别就在于进行博客初始化时，在BLOGS中执行的是"`hexo init blogs`"还是"`hexo init`"，如果是前者，那么就会在BLOGS中默认创建一个blogs文件夹，用来存放博客源文件，同时还会生成一些其他必要的文件；如果是后者，就不会创建blogs文件夹，生成的那些必要文件会直接存放到BLOGS文件夹中。因此，关键点在于在`hexo init`初始化时，在BLOGS文件夹内是执行“`hexo init blogs`”还是“`hexo init`”，其他本质上没有区别。

### 关于多主题共存的说明

1. 多主题共存，以fluid为例，不是将主题推送到 `git@github.com:dkl-justdoit/dkl-justdoit.github.io.git` ，而是推送到 `git@github.com:dkl-justdoit/hexo-theme-fluid.git` 。因此，所有修改过后的主题是保存到对应主题仓库下的[主题名]分支(若以fluid为例，就是保存到 `git@github.com:dkl-justdoit/hexo-theme-fluid.git` 的fluid分支)。所以，针对多主题共存，需要在本地仓库的主题目录中新创建分支，然后再推送到远程库并关联追踪。

2. 对于博客源文件，在博客根目录下，使用git推送到 `git@github.com:dkl-justdoit/dkl-justdoit.github.io.git` 的hexo-source分支，这样可以在其他电脑直接同步博客，不影响博客写作，也避免了冲突的发生。前提是每次写完博客推送到Github pages发布页后还要将博客源码推送到hexo-source分支。

3. 对于展示出来的hexo博客的html/css/js文件则是推送到main分支。原因是因为hexo博客的站点根目录的配置文件中就已经定义了会将展示用的html/css/js文件推送到 `git@github.com:dkl-justdoit/dkl-justdoit.github.io.git` 的哪个分支。

## hexo + typora + sublime text + github 博客具体搭建过程

### 1. 下载安装Git

1. 官网下载地址：https://git-scm.com/downloads

![image-20221126175618194](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175618194.png)

2. 下载完成后，双击2.38.1版本安装包进行安装，点击next

![image-20221125213053792](hexo-typora-sublime-text-github-博客搭建终极版/image-20221125213053792.png)

3. 修改git的默认安装路径，点击next

![image-20221126174552220](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174552220.png)

4. 选择要安装的组件配置，点击next(由于git更新可能会影响后来安装的nodejs，故这里取消更新检查)

![image-20221126174617041](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174617041.png)

5. 选择开始菜单文件夹，点击next

![image-20221126174628271](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174628271.png)

6. 选择git默认使用的编辑器，测试后，点击next

![image-20221126174656214](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174656214.png)

7. 确定新存储仓库初始化分支的名称，这里让git决定，点击next

![image-20221126174704371](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174704371.png)

8. 调整path环境变量，这里选择第二项，避免了对其他环境的污染，可以在Git Bash和Windows命令提示符中使用git，点击next

![image-20221126174713773](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174713773.png)

9. 这里选择绑定的OpenSSH，点击next

!](hexo + typora + sublime text + github 博客搭建终极版/image-20221126174724964.png)

10. 选择HTTPS传输后端，点击next

![image-20221126174736379](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174736379.png)

11. 配置行结束符，点击next

![image-20221126174750864](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174750864.png)

12. 配置终端模拟器，点击next

![image-20221126174758662](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174758662.png)

13. 选择Git上传的默认行为，点击next

![image-20221126174808011](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174808011.png)

14. 选择Git凭证管理器，点击next

![image-20221126174815664](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174815664.png)

15. 选择额外选项配置，点击next

![image-20221126174824190](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174824190.png)

16. 实验选项配置，不要勾选，因为有bug，所以这里默认都不勾选，点击next

![image-20221126174832894](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174832894.png)

17. 取消勾选，点击next

![image-20221126174842924](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126174842924.png)

### 2. 下载安装TortoiseGit

1. 官网下载地址：https://tortoisegit.org/download/

![image-20221126183836246](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126183836246.png)

2. 将TortoiseGit安装包和TortoiseGit中文语言包下载完成后，先双击TortoiseGit安装包，点击next

![image-20221126175732987](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175732987.png)

3. 点击next，SSH客户端选择git默认SSH客户端，点击next

![image-20221126175827163](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175827163.png)

![image-20221126175842018](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175842018.png)

4. 修改TortoiseGit的默认安装路径，点击next，然后点击install即可

![image-20221126175849483](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175849483.png)

![image-20221126175857584](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175857584.png)

5. 取消勾选"Run first start wizard"，点击finish即可

![image-20221126175903539](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175903539.png)

6. 双击tortoiseGit语言安装包，点击下一步，勾选"Configure TortoiseGit to use this language"后，点击完成

![image-20221126175928166](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175928166.png)

![image-20221126175937283](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175937283.png)

7. 右键单击，依次选择"tortoisegit"-->"设置"，取消每周自动检查新版本，然后应用，点击确定

![image-20221126175949773](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126175949773.png)

### 3. 下载安装nodejs，nodejs环境配置与hexo插件安装

在安装nodejs(版本18.12.1)时要注意权限问题，nodejs在安装后新建文件或文件夹时都需要管理员权限，为了避免npm全局包安装失败，给nodejs的程序安装目录提升权限即可(给everyone或当前登录用户添加完全控制权限即可)。

1. 官网下载地址：https://nodejs.org/en/

![image-20221126185821392](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126185821392.png)

2. 双击nodejs安装包，点击next，然后勾选同意协议，点击next

![image-20221126180021773](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180021773.png)

![image-20221126180033108](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180033108.png)

3. 更改nodejs的默认安装路径，点击next，然后再次点击next

![image-20221126190431393](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126190431393.png)

![image-20221126180046448](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180046448.png)

4. 保持默认即可，不用勾选，点击next，然后点击install，安装完成后点击finish

![image-20221126180052499](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180052499.png)

![image-20221126180058434](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180058434.png)

![image-20221126180105446](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180105446.png)

5. 依次查看node与npm的安装版本以及npm全局安装默认文件夹

![image-20221126180123821](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180123821.png)

6. nodejs安装完成后，检查权限，发现权限不够，需要提升权限，以everyone用户组为例，指定完全控制权限

![image-20221126180130123](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180130123.png)

![image-20221126180137136](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180137136.png)

![image-20221126180146309](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180146309.png)

7. 给everyone用户组指定完全控制权限后，创建文件或文件夹无需管理员权限也能成功

![image-20221126180153618](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180153618.png)

8. 在nodejs默认安装目录下新创建两个文件夹，`node_global`和`node_cache`，一个用来存放npm的全局安装包，一个用来存放nodejs安装npm包时产生的缓存

![image-20221126180203343](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180203343.png)

9. 以管理员身份打开Windows命令提示符cmd，然后执行如下两条命令，设置完成后通过`npm root -g`来查看npm全局安装包的默认安装位置是否设置成功，然后全局安装hexo相关插件(`npm install -g hexo-cli` 和`npm install -g npm`)，这里目前只需要全局安装`hexo-cli`即可

```bash
npm config set prefix "E:\Program Files\nodejs\node_global"
npm config set cache "E:\Program Files\nodejs\node_cache"
npm root -g # 查看npm全局安装包的默认安装位置
npm install -g hexo-cli # 使用npm全局安装hexo-cli
```

![image-20221126180243666](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126180243666.png)

10. 最后还要修改系统的环境变量，这里主要有两处需要修改：1、环境变量的用户变量；2、环境变量的系统变量

```bash
1、在用户环境变量下的path中，将默认的"C:\Users\vain\AppData\Roaming\npm\"修改为"E:\Program Files\nodejs\node_global"，点击确定
2、在系统变量中添加变量名为：NODE_PATH；变量值为："E:\Program Files\nodejs\node_global\node_modules"，点击确定
3、在系统变量下的path中，将新创建的"NODE_PATH"变量名前后加个%，变成"%NODE_PATH%"添加到path中，点击确定
```

### 4. hexo博客的详细配置

1. 修改git默认家目录

![image-20221126214338538](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126214338538.png)

2. 修改git默认编辑器

- 可以在git中通过命令行打开Sublime Text、VSCode、Typora，进行博客md源文件的编写，这里以Sublime Text为例
- 若以sublime text为git的默认编辑器，首先应将sublime text.exe的安装目录放到环境变量中(可能需要重启)，其次执行命令：`git config --global core.editor "sublime_text.exe -w"`或`git config --global core.editor "sublime_text.exe -w|1"`
- 若以VSCode为git的默认编辑器，可直接执行命令：`git config --global --replace core.editor "code --wait"`
- 若以Typora为git的MD文件默认编辑器，可直接执行命令：`git config --global core.editor "Typora.exe"`

![image-20221126205746156](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126205746156.png)

3. 创建dkl-justdoit.github.io站点文件夹，在站点文件夹中右键git bash，git初始化

![image-20221126203245381](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126203245381.png)

![image-20221126203746807](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126203746807.png)

4. 配置git全局用户信息`user.name`和`user.email`

```bash
配置用户名和邮箱
git config --global user.name "dkl-justdoit"
git config --global user.email "vaincourtship@gmail.com"
# 配置用户名和邮箱后会在.git同级目录下生成一个.gitconfig文件
```

5. 修改.gitconfig配置文件信息

使用`git config --global --list`查看全局配置信息，其实就是`.gitconfig`中的信息；

`vim .gitconfig`，然后用下面的信息替换掉

```bash
[user]
	name = dkl-justdoit
	email = vaincourtship@gmail.com
[credential]
  helper = store
[core]
	editor = sublime_text.exe -w|1
```

6. 给远程dkl-justdoit.github.io仓库指定别名，基于https协议和git协议

```bash
git remote -v # 查看所有远程仓库别名
git remote add origin https://github.com/dkl-justdoit/dkl-justdoit.github.io.git # 给远程库添加别名，基于https协议
git remote add ssh_origin git@github.com:dkl-justdoit/dkl-justdoit.github.io.git # 给远程库添加别名，基于git协议
```

7. 将处理好的.ssh压缩包(.ssh密钥的生成这里不展开)解压到与.git同级目录中，执行`ssh -T git@github.com`，若返回信息为：`Hi dkl-justdoit! You've successfully authenticated, but GitHub does not provide shell access.`，说明已经完成ssh处理

![image-20221126211945128](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126211945128.png)

8. 在站点文件夹dkl-justdoit.github.io中初始化博客站点，这里以hexo init blogs为例

![image-20221126212340801](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126212340801.png)

9. 在blogs中本地安装hexo-deployer-git和hexo-renderer-marked插件

```bash
npm install hexo-deployer-git --save # 推送博客html/css/js文件到github
npm install hexo-renderer-marked --save # 解决hexo与typora图片显示问题

以下几个不是在这里使用
npm install -g hexo-cli # 这个已经安装过了
npm install -g npm # 这个更新不更新其实都可以的
npm install hexo-generator-feed --save # 为博客添加RSS订阅链接
npm install hexo-admin --save # Hexo博客引擎的管理用户界面插件，最初是作为本地编辑器设计的，在本地运行hexo使用hexo-admin编写文章
npm install hexo-renderer-pug hexo-renderer-stylus --save # butterfly主题需要，不然无法正常渲染展示
```

![image-20221126213734001](hexo-typora-sublime-text-github-博客搭建终极版/image-20221126213734001.png)

10. 修改站点根目录blogs下的配置文件`_config.yml`，刚开始只需要关注两点：博客想要使用的主题以及要推送到github的哪个仓库的哪个分支，其余可以暂时不管，可以等后续处理

```bash
theme: hexo-theme-fluid # 修改博客主题为fluid，我的博客的默认主题
#theme: hexo-theme-butterfly # butterfly主题可以使用但未启用
#theme: hexo-theme-volantis # volantis主题可以使用但未启用

# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: 'git' # 类型为git
  #repository: https://github.com/dkl-justdoit/dkl-justdoit.github.io.git # 使用https协议的url格式的仓库
  repository: git@github.com:dkl-justdoit/dkl-justdoit.github.io.git # 使用git协议的url格式的仓库
  branch: main # branch的值修改为main  
```

11. 在blogs中通过git submodule子模块添加多主题，这里以fluid、butterfly、volantis为例，通过fork原作者的主题仓库来同步主题的更新，然后将主题的自定义修改推送到自己fork的主题仓库的fluid、butterfly、volantis分支，这样以后如果想要更新，进行分支的合并后更新即可，而dkl-justdoit.github.io仓库，只是用来作为blogs的更新推送，里面都是html、css和js文件

```bash
=============================================================================================================
cd blogs # 切换到blogs目录下
git submodule add git@github.com:dkl-justdoit/hexo-theme-fluid.git themes/hexo-theme-fluid
git submodule update --init --recursive
cd themes/hexo-theme-fluid/

git branch -v # 查看本地分支
git branch fluid    # 创建本地fluid主题分支
git checkout fluid  # 切换到fluid本地主题分支
git add .
git commit -m '剥离主题fluid'
git push -u origin fluid # 推送本地fluid主题分支到dkl-justdoit/hexo-theme-fluid.git/fluid，并进行关联追踪

cd blogs # 切换到blogs目录下
hexo clean
hexo g
hexo d
hexo s
=============================================================================================================
cd blogs # 切换到blogs目录下
git submodule add git@github.com:dkl-justdoit/hexo-theme-butterfly.git themes/hexo-theme-butterfly
git submodule update --init --recursive
cd themes/hexo-theme-butterfly/

git branch -v # 查看本地分支
git branch butterfly   # 创建本地butterfly主题分支
git checkout butterfly  # 切换到butterfly本地主题分支
git add .
git commit -m '剥离主题butterfly'
git push -u origin butterfly # 推送本地butterfly主题分支到dkl-justdoit/hexo-theme-butterfly.git/butterfly，并进行关联追踪

cd blogs # 切换到blogs目录下
hexo clean
hexo g
hexo d
hexo s
=============================================================================================================
cd blogs # 切换到blogs目录下
git submodule add git@github.com:dkl-justdoit/hexo-theme-volantis.git themes/hexo-theme-volantis
git submodule update --init --recursive
cd themes/hexo-theme-volantis/

git branch -v # 查看本地分支
git branch volantis   # 创建本地volantis主题分支
git checkout volantis  # 切换到volantis本地主题分支
git add .
git commit -m '剥离主题volantis'
git push -u origin volantis # 推送本地volantis主题分支到dkl-justdoit/hexo-theme-volantis.git/volantis，并进行关联追踪

cd blogs # 切换到blogs目录下
hexo clean
hexo g
hexo d
hexo s
==============================================================================================================
总结：这里以fluid、butterfly、volantis为例，通过fork原作者的主题仓库来同步主题的更新，然后将主题的自定义修改推送到自己fork的主题仓库的fluid、butterfly、volantis分支，这样以后如果想要更新，进行分支的合并后更新即可，而dkl-justdoit.github.io仓库，只是用来作为blogs的更新推送，里面都是html、css和js文件。
```

12. 修改站点根目录下配置文件中的主题相关字段，依次启用hexo-theme-fluid、hexo-theme-butterfly、hexo-theme-volantis进行测试，启用后记得保存_config.yml文件，然后依次执行hexo clean，hexo g，hexo d推送博客文件到github pages。其中，fluid和volantis可以正常展示，但是butterfly会报一个错误(可以解决)，需要注意

![image-20221127112125750](hexo-typora-sublime-text-github-博客搭建终极版/image-20221127112125750.png)

- butterfly主题报错如下，需要在blogs目录下执行：`npm install hexo-renderer-pug hexo-renderer-stylus --save`，然后重新执行hexo clean，hexo g，hexo d推送博客文件到github pages即可

![image-20221127121759509](hexo-typora-sublime-text-github-博客搭建终极版/image-20221127121759509.png)

13. 基于hexo的博客，通过typora编辑MD文件，插入图片后typora本地是能正常展示的，但是发布到github pages上就展示不了了，主要的原因还是路径的问题，当然hexo官网也给了解决的办法，但是在本地使用很不方便，所以这里借助hexo-renderer-marked插件来解决这个问题，但也需要在hexo-renderer-marked插件中添加关于图片路径处理的代码，具体如下：

- 首先引用 hexo-renderer-marked 包

```bash
npm install hexo-renderer-marked --save # 在blogs目录中
```

- 然后修改_config.yml文件

```bash
post_asset_folder: true
marked:
    prependRoot: true
    postAsset: true
```

- 开启了之后，图片资源就会自动解析成对应的图片路径。比如：“LINUX.jpg” 位于 “/2022/10/11/LINUX/LINUX.jpg”

```bash
![](LINUX.jpg)` 将会转换成 `<img src="/2022/10/11/LINUX/LINUX.jpg">
```

这种方式，虽然能解决发布之后图片展示的问题，但是不能解决本地typora编辑的问题，例如，有如下的目录结构：

![image-20221127181937572](hexo-typora-sublime-text-github-博客搭建终极版/image-20221127181937572.png)

编辑`tcpdump和wireshark工具-网络排障.md`文件，如果写成：

```bash
![image-20221001134526709](tcpdump和wireshark工具-网络排障/image-20221001134526709.jpg)
```

这种相对路径之后，能在typora中显示图片，但是在网页上就不能展示图片，如果改成下面这种：

```bash
![image-20221001134526709](image-20221001134526709.jpg)
```

能在网页上显示图片，但是在typora中又不能显示，这个时候，我们就通过修改插件 hexo-renderer-marked 的代码，来兼容两方的需求，找到图片路径转换的代码：

![image-20221127180716090](hexo-typora-sublime-text-github-博客搭建终极版/image-20221127180716090.png)

- 在`node_modules/hexo-renderer-marked/lib/renderer.js`中查找`image(href, title, text)`；
- 在 `const { hexo, options } = this;
  const { relative_link } = hexo.config;
  const { lazyload, prependRoot, postPath } = options;`前面插入如下代码：

``` js
//console.log(0,href);
if(href.indexOf('/')>-1){
      href = href.split('/')[1];
    }
```

其中红框中的代码就是新加的，这样我们在md文件中，路径写成：`tcpdump和wireshark工具-网络排障/image-20221001134526709.jpg`这样，就能同时在typora和网页上进行展示。

- 使用hexo clean、hexo g、hexo s查看没有问题后再使用hexo d推送到GitHub上，至此hexo + typora + sublime text  + github 博客搭建已经初步完成，后期可以继续完善博客功能。

```bash
hexo clean
hexo g
hexo s
# 查看没有问题后再推送
hexo d
# 使用hexo-renderer-marked插件，typora在本地写文章插入图片后，可以在本地正常显示，同样发布到dkl-justdoit.github.io后也能在网页正常显示
# 推送完成后，可以打开url，测试功能是否成功实现
```

### 5. hexo博客搭建过程中的注意事项

1. 一定要先安装Git和TortoiseGit，再安装nodejs

原因是如果先配置nodejs环境，再安装git会导致npm root -g的存储路径恢复成默认的位置，不便于管理。

2. 在设置完nodejs的环境变量等配置后建议安装全局包前使用npm root -g确定是否是你想要存储的位置

```bash
最好在Windows命令提示符cmd中(管理员运行)执行
npm install -g hexo-cli # hexo博客必须要安装的全局包
npm install -g npm # 安装最新的npm包到自定义的全局包的位置
```

3. 除了必要的npm全局包外，安装局部npm包都需要在需要的、指定的目录下进行局部安装，且只能在该目录下使用，不能像全局包一样添加到环境变量中，可以到处使用

```bash
npm install hexo-deployer-git --save # 若有blogs目录，则在blogs目录下安装即可；若无，直接在dkl-justdoit.github.io目录下安装即可
npm install hexo-renderer-marked --save # 同上
npm install hexo-generator-feed --save # 同上
npm install hexo-admin --save # 同上
npm install hexo-renderer-pug hexo-renderer-stylus --save # 如果butterfly主题不能在网页显示，而是报错，这两个插件就需要安装
```

4. 将hexo博客的源文件推送到了dkl-justdoit.github.io仓库的hexo-source分支；将hexo博客生成的网页代码推送到了dkl-justdoit.github.io仓库的main分支(默认分支)

- 提交源码到hexo-source分支

```bash
根目录下(BLOGS)
git add .
git commit -m '注释信息'
git push -u ssh_origin hexo-source
提交源码到hexo-source分支
```

- 默认提交网页代码到main分支

```bash
根目录下(blogs)
hexo clean
hexo g
hexo d
默认提交网页代码到main分支
```

### 6. 打完收工

开始愉快地写博客吧！！！
