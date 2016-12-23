# animate.css

[animate.css](http://daneden.github.io/animate.css/) 效果在页面中



## 基本用法

1. 在<head>中引用

   ```html
   <head>
     <link rel="stylesheet" href="animate.min.css">
   </head>
   ```

2. 给想添加的元素加上`animated`样式

3. 如果想无限循环则再加上 `infinite`样式

e.p

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
<h1 class="animated infinite bounce">Example</h1>
```



## 进阶

当你将 animate.css 与 jQuery 一起使用或者添加你自己的 CSS 规则时， 你可以用 animate.css 做一大堆其他的事，使用 jQuery 动态添加动画：

```javascript
$('#yourElement').addClass('animated bounceOutLeft');
```

可以自定义更改动画的持续时间

```css
#yourElement {
  -webkit-animation-duration: 3s;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-count: infinite;
}
```

