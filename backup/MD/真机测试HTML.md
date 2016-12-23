# 真机测试HTML

[TOC]

## http-server

```python
npm install http-server -g
```

执行 `http-server -p 端口号 (默认 8080)`



## browserSync

1.   安装node.js

2.   安装BrowserSync

         `npm install -g browser-sync`

3.   启动BrowserSync

     + BS将会启动一个小型的服务器并提供一个URL来查看你的网站

       ### 静态网站

       + 如果只想监听css文件，则运行如下命令

       ```javascript
       // --files 路径是相对于运行该命令的项目（目录） 
       browser-sync start --server --files "css/*.css"
       ```

     + 如果需要监听多个类型的文件，只需要用逗号隔开，例如，我们在假如一个`html`文件

       ```javascript
       // --files 路径是相对于运行该命令的项目（目录） 
       browser-sync start --server --files "css/*.css, *.html"
       // 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。 
       browser-sync start --server --files "**/*.css, **/*.html"
       //所有文件
       browser-sync start --server --files "**/*.*"
       ```

     ### 动态网站

     + 如果已经发布的服务器页面需要执行代理模式（次模式就现在看来没有时时刷新。。。）

       ```javascript
       browser-sync start --proxy "主机名" "css/*.css"
       ```

4.   启动服务之后，terminal会返回连接

         ​```
         [BS] Access URLs:
          -------------------------------------
                Local: http://localhost:3000
             External: http://10.205.25.69:3000
          -------------------------------------
                   UI: http://localhost:3001
          UI External: http://10.205.25.69:3001
          -------------------------------------
         ​```
         
         上两个连接是访问连接，后两个是调试连接，第一第三个为本地，第二第四为外部设备访问

5.   想要dev tool调试的话，需要进入UI的连接，也就是调试连接，

     + 进入后选择`remote debug` 
     + 开启第一个`Remote Debugger`,开启后，
     + 点击下面红色的连接，进入weinre调试
     + 在targets处选择你需要调试的目标，进入elements，剩下的就跟chrome一样了，注意，右侧的style需要双击修改！



## weinre 真机测试

1. 首先 安装weinre `sudo npm install -g weinre`
2. 在本地开启监听服务器 `ipconfig getifaddr en0`
3. 去网络查看自己的电脑ip（高级-TCP/IP-IPv4地址）
4. 在命令窗口执行`weinre --boundHost xxx.xxxx.x.xxxx`
5. weinre默认会监听8080端口，进入连接192.168.x.xxx：8080
6. 找到Target Script标题，复制下面的script到你想要测试的页面上
7. 假如你启动一个项目，地址为127.0.0.1:7777，则在浏览器中替换127.0.0.1为xxx.xxxx.x.xxxx
8. 访问即可





## Vorlon.js真机实测

1. 同上面 这个更新更好
2. 安装vorlon `sudo npm install -g vorlon`
3. 运行vorlon `vorlon`
4. 将连接粘贴在页面中，`<script src="http://localhost:1337/vorlon.js"></script>`， 如果想外部设备访问（手机），需要把localhost改成本机ip