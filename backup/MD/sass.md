# sass



[TOC]



##  安装

1. 首先安装ruby
2. ​

## 变量

### 1.变量声明

使用`$`声明变量 如：`$highlight-color: #F90;`

### 2.变量引用

声明完变量后，可直接使用 如：

```scss
$highlight-color: #F90;
.selected {
  border: 1px solid $highlight-color;
}
```

注： 如果用下划线或者中划线分割，在引用时候是不区分的，如：

```scss
$link-color: blue;
a {
  color: $link_color;
}
```



## 嵌套

### 1.直接嵌套

嵌套规则和俄罗斯套娃一样，直接嵌套，如

```scss
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```

当然有的时候是不能直接嵌套的，如`:hove`伪类

### 2.父选择器标识符&

在使用嵌套规则时，父选择器能对于嵌套规则如何解开提供更好的控制。它就是一个简单的`&`符号，且可以放在任何一个选择器可出现的地方

```scss
article a {
  color: blue;
  &:hover { color: red }
}
```

同时父选择器标识符还有另外一种用法，你可以在父选择器之前添加选择器。

```scss
#content aside {
  color: red;
  body.ie & { color: green }
}
```

#### 2.1 群组嵌套

群组选择器 的规则会对命中群组中任何一个选择器的元素生效。

```scss
nav, aside {
  a {color: blue}
}
```

=====> `nav a, aside a {color: blue}`

#### 2.2. 子组合选择器和同层组合选择器：>、+和~;

css的规则同样适用

注意一个：全体组合选择器`~`，选择所有跟在`article`后的同层`article`元素，不管它们之间隔了多少其他元素

```scss
article ~ article { border-top: 1px dashed #ccc }
```

```scss
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
```

#### 2.3 属性嵌套

有的时候`border-style` `border-width` `border-color` 这些都重复的打border很累,把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个`{ }`块，把子属性部分写在这个`{ }`块中。

```scss
nav {
  border: 1px solid #ccc {
  left: 0px;
  right: 0px;
  }
}
```

=====> 

```css
nav {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}
```





## 导入sass

`css`有一个特别不常用的特性，即`@import`规则，它允许在一个`css`文件中导入其他`css`文件。然而，后果是只有执行到`@import`时，浏览器才会去下载其他`css`文件，这导致页面加载起来特别慢

`sass`也有一个`@import`规则，但不同的是，`sass`的`@import`规则在生成`css`文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个`css`文件中，而无需发起额外的下载请求。

```scss
@import "sidebar";
```



### 默认变量值

一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。举例说明：

```scss
$link-color: blue;
$link-color: red;
a {
color: $link-color;
}
```

会变成`red`



### 可以import原生css

尽管通常在`sass`中使用`@import`时，`sass`会尝试找到对应的`sass`文件并导入进来，但在下列三种情况下会生成原生的`CSS@import`，尽管这会造成浏览器解析`css`时的额外下载：

- 被导入文件的名字以`.css`结尾；
- 被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css），由此可用谷歌字体API提供的相应服务；
- 被导入文件的名字是`CSS`的url()值。 



### 静默注释

`sass`另外提供了一种不同于`css`标准注释格式`/* ... */`的注释语法，即静默注释，其内容不会出现在生成的`css`文件中。静默注释的语法跟`JavaScript``Java`等类`C`的语言中单行注释的语法相同，它们以`//`开头，注释内容直到行末。

```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```



## 混合器

大段大段的重用样式的代码，可以通过`sass`的混合器实现大段样式的重用

混合器使用`@mixin`标识符定义。看上去很像其他的`CSS @`标识符，比如说`@media`或者`@font-face`。这个标识符给一大段样式赋予一个名字，这样你就可以轻易地通过引用这个名字重用这段样式。下边的这段`sass`代码，定义了一个非常简单的混合器，目的是添加跨浏览器的圆角边框。

```scss
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

然后就可以在你的样式表中通过`@include`来使用这个混合器，放在你希望的任何地方。`@include`调用会把混合器中的所有样式提取出来放在`@include`被调用的地方。如果像下边这样写：.

```scss
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//sass最终生成：

.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```



#### 混合器可以复用嵌套规则



#### 混合器传参

混合器并不一定总得生成相同的样式。可以通过在`@include`混合器时给混合器传参，来定制混合器生成的精确样式。当`@include`混合器时，参数其实就是可以赋值给`css`属性值的变量。如果你写过`JavaScript`，这种方式跟`JavaScript`的`function`很像

```scss
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

当混合器被`@include`时，你可以把它当作一个`css`函数来传参。如果你像下边这样写：

```scss
a {
  @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

有时候顺序自己搞错了就不好了，于是可以用函数方法传

```scss
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
```





## 继承

使用`sass`的时候，最后一个减少重复的主要特性就是选择器继承。基于`Nicole Sullivan`面向对象的`css`的理念，选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过`@extend`语法实现，如下代码:

```scss
//通过选择器继承继承样式
.error {
  border: 1px red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```





## 数字

```scss

$size: 18;                  // A number

$px-unit: $size * 1px;      // A pixel measurement

$px-string: $size + px;     // A string

$px-number: $px-unit / 1px; // A number

```



上面代码声明了四个变量。`$size`是一个数字。`$px-unit`将`$size`和`1px`做乘法，这样将会转找成一个尺寸测量值。`$px-string` 和单位`px`相加，它将转换为`18px`，变成一个字符串，而不是一个数字。这主要是`px`本身在Sass中被视为是字符串，那么数字和字符串相加就会变成字符串。`$px-number`是使用`$px-unite`除以`1px`， 它又将变回是一个数字`18`。

## 颜色

```scss

$color: yellowgreen;            // #9ACD32

color: lighten($color, 15%);    // #b8dc70

color: darken($color, 15%);     // #6c9023

color: saturate($color, 15%);   // #a1e01f

color: desaturate($color, 15%); // #93ba45

color: (green + red);           // #ff8000
```

