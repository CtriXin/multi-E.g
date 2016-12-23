# 制作svg sprite

1. 用vector magic 将png或者jpg拖到里面 存成ai或者svg
2. 打开https://icomoon.io/app/#/select
3. 上传icon
4. 如果有颜色，改成黑色最好
5. 点击左下角 Generate SVG & More
6. 点击齿轮标志
7. 勾选Formats to include里的title（css sprite）设为16 16
8. 点击下载



## 调整大小

1. 首先 去获取图片的大小 （鼠标放在background-image上会有图片的大小）
2. 其次确定icon的大小，比如原先是width:32 height:32想缩放50%
3. 在icon的class上定义background-size 将其缩放50% 具体到px数值 

e.p. 原来：

```css
.icon-pencil {

1. width: 32px;
2. height: 32px;
3. background-position: -144px 0;

}

.icon {

1. display: inline-block;
2. background-repeat: no-repeat;
3. background-image: url(sprite.svg);

}

```



现在：

```css
.icon-pencil {

1. width: 16px;
2. height: 16px;
3. background-position: -72px 0;
4. background-size: 376px 16px;

}

.icon {

1. display: inline-block;
2. background-repeat: no-repeat;
3. background-image: url(sprite.svg);

}

```





## iconfont中有的icon合适的话可以下载

1. 找到icon
2. 鼠标上移，选择最后一个下载
3. svg下载
4. 重复第一个步骤