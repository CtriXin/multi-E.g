## 文字换行
```
/*强制不换行*/
white-space:nowrap;
/*自动换行*/
word-wrap: break-word;
word-break: normal;
/*强制英文单词断行*/
word-break:break-all;

```





##两端对齐
```
text-align:justify;text-justify:inter-ideogra
```



## 去掉Webkit(chrome)浏览器中input(文本框)或textarea的黄色焦点框
```
input,button,select,textarea{ outline:none;}
textarea{ font-size:13px; resize:none;}
```


# clearfix
```
.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;}
.clearfix{display:inline-block;}
html[xmlns] .clearfix{display:block;}
* html .clearfix{height:1%;}

.clearfix{*zoom: 1;}
.clearfix:after{clear:both;display:table;content:"”;}

.clearfix{overflow:hidden;_zoom:1;}
```

## min-height: 最小高度兼容代码
```
.minheight500{min-height:500px;height:auto !important;height:500px;overflow:visible;}
```


##  鼠标不允许点击
```
cursor:not-allowed;
```


## mac font: osx平台字体优化
```
font-family:"Hiragino Sans GB","Hiragino Sans GB W3",'微软雅黑';
```


## chrome字体缩小！
```
.chrome_adjust { font-size: 9px; -webkit-transform: scale(0.75); }
```


