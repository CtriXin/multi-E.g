# npm安装及使用

3.1、说明：npm（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）；

3.2、使用npm安装插件：命令提示符执行**npm install  [-g][--save-dev]**；

3.2.1、****：node插件名称。例：**npm install gulp-less --save-dev**

3.2.2、**-g**：全局安装。将会安装在`C:\Users\Administrator\AppData\Roaming\npm`，并且写入系统环境变量；  非全局安装：将会安装在当前定位目录；  全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；

3.2.3、**--save**：将保存配置信息至package.json（package.json是[nodejs项目配置文件](http://www.ydcss.com/archives/18#lesson6)）；

3.2.4、**-dev**：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/body-parser等等。

3.2.5、为什么要保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json并将其加入版本管理，其他开发者对应下载即可（命令提示符执行**npm install**，则会根据package.json下载所有需要的包，`npm install --production`只下载dependencies节点的包）。

3.3、使用npm卸载插件：**npm uninstall  [-g][--save-dev]**  PS：不要直接删除本地插件包

3.3.1、删除全部插件：**npm uninstall gulp-less gulp-uglify gulp-concat ……**???太麻烦

3.3.2、借助rimraf：**npm install rimraf -g** 用法：**rimraf node_modules**

3.4、使用npm更新插件：**npm update  [-g] [--save-dev]**

3.4.1、更新全部插件：**npm update [--save-dev]**

3.5、查看npm帮助：**npm help**

3.6、当前目录已安装插件：**npm list**



# 选装cnpm

4.1、说明：因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事。32个**！来自官网：**“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。”**；

4.2、官方网址：[http://npm.taobao.org](http://npm.taobao.org/)；

4.3、安装：命令提示符执行**npm install cnpm -g --registry=https://registry.npm.taobao.org**；  注意：安装完后最好查看其版本号**cnpm -v**或关闭命令提示符重新打开，安装完直接使用有可能会出现错误；

注：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm（以下操作将以cnpm代替npm）。