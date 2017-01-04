# demo

此文件夹为从网上凑集到的各类型demo，对于一些基本的项目可能有一些帮助



## 圆形进度条

有时候 进度条会以异性方式出现，而圆形可能是出现频率比较多的


## 滚动新闻播放

定时3秒滚动新闻，但是现在是再一条内容区间内滚动，如果需要别的请参考别的实例[^修改1]

[^修改1]: 现在暂时还没有模板。如果有，此处将会修改 



## 获取url中参数

类似get方法 获取连接中带有的参数值



## 上传文件 input 按钮自定义

自定义input按钮，上传文件的哪个



## 验证码获取

点击获取验证码，倒计时1分钟计时


## 点击查看大图(lightbox)

使用simple lightbox为基础js 基于 jquery的lightbox 具体参数参见<http://www.dowebok.com/186.html>


## [点击查看大图](https://github.com/CtriXin/multi-E.g/tree/master/%E7%82%B9%E5%87%BB%E6%9F%A5%E7%9C%8B%E5%A4%A7%E5%9B%BE)
纯js的简单查看大图，样式修改自行制作



## 滚动加载

基于页面高度，滚动条高度，文档高度随滚动动态插入数据


## [全屏弹窗(animatedModal)](https://github.com/CtriXin/multi-E.g/tree/master/%E5%85%A8%E5%B1%8F%E5%BC%B9%E7%AA%97%EF%BC%88%E5%8A%A8%E6%95%88%EF%BC%89)

点击按钮弹窗，全屏显示，是animatedmodal.js，具体参数详见<http://joaopereirawd.github.io/animatedModal.js/>



## 字数限制

对div增加参数，从而限制其字数



## [图片延迟加载](https://github.com/CtriXin/multi-E.g/tree/master/%E5%9B%BE%E7%89%87%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD)

### lazyload
是用来缓冲加载图片的插件。如果一篇文章很长有很多图片的话，下载图片就需要很多时间。而这款插件，会检测你的滚动情况，只有你要看到那个图片的时候，它才会从后台请求下载图片，然后显示出来。

它有一些自己的配置项，比如
1. 提前加载
   默认的情况是，当你滚动到图片位置的时候，插件开始加载。这样，用户可能首先看到的是一个空白图像，然后再缓慢出现。如果你想在用户滚动之前，提前加载这个图像，你可以配置一下参数。
>$("img.lazy").lazyload({ threshold : 200 });

距离图片还有200px时加载图片
2. 自定义触发事件
   默认的触发事件，是滚动，当你滚动的时候，就会检查然后加载。你可以使用event属性，设置你自己的加载事件，之后你可以自定义触发这个事件的条件，然后去加载图像。
>$("img.lazy").lazyload({ event : "click" });
3. 自定义显示效果
   默认的图片实现效果，就是没有效果，下载完成之后，直接显示出来。这样的用户体验并不好，你可以设置 effect 属性，来控制显示图片的效果。例如
>$("img.lazy").lazyload({ effect : "fadeIn" });





### scrollLoading
功能和lazyload相类似，但是代码更轻量级，调用也只需要一行代码，但是可自定义性也许没有lazyload好



## 弹窗
lightbox? 待定 尚未修改完版本


## 判断登录设备
纯js代码判断登录设备，可判断是手机还是电脑


## [fullpage](https://github.com/CtriXin/multi-E.g/tree/master/fullpage)
一滚一屏操作，常用，参数等自行查看浏览器收藏夹
增加了纯javascript语言的支持 但是其特殊参数和设定不适用



## [下拉刷新，上拉加载](https://github.com/CtriXin/multi-E.g/tree/master/%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0%EF%BC%8C%E4%B8%8A%E6%8B%89%E5%8A%A0%E8%BD%BD)
简单的pullrefresh，操作注意事项已经再js中注释了



## 点击分享
简单的点击按钮，出现蒙版，点击蒙版关闭的分享弹窗



## 秒表计时器
显示是秒后两位的毫秒数，可修改为三位，把millisecond后面的除以10去掉即可
上面js代码中的基数则是多少毫秒一跳，可自行修改



## 图片验证码

类似其他的网站，点击图片进行更换的图片验证码





## 图片镂空

有时需要透明的图片上面叠加一层图片 镂空格式








