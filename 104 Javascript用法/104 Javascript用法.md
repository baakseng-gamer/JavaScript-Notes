# 104 Javascript用法

[1script标签](#1script标签) [2行内使用](#2行内使用) [3内嵌使用（嵌入式）](#3内嵌使用（嵌入式）) [4外联式（外部脚本）](#4外联式（外部脚本）) [总结](#总结)

HTML 中的脚本必须位于` <script>` 与` </script>` 标签之间。

## 1script标签

JavaScript 程序可以在` <script> `标签的帮助下插入到 HTML 文档的任何地方。

有三种书写位置，分别为行内、内嵌和外部

`<script>`标签中包裹了 JavaScript 代码，当浏览器遇到 `<script>` 标签，代码会自动运行。



## 2行内使用

```
<a href="https://www.baidu.com" onclick="alert('准备跳到百度')" target="_blank">通向百度</a>
```

注意`terget="_blank"`是在原网页中弹出，不是跳到新窗口弹出

实例：  [10401行内.html](10401行内.html) 



## 3内嵌使用（嵌入式）

直接写在HTML页面中

### 3.1 body中的Javascript

```
<body>
    <!-- 行内式的js 直接写到元素的内部 -->
    <script>
        document.write("<h1>这是一个标题</h1>")
        document.write("<p>这是一个段落</p>")
    </script>
    <input type="button" value="雄火龙" onclick="alert('雌火龙')">
</body>
```

实例： [10402body.html](10402body.html) 



### 3.2 head中的Javascript

head中的Javascript

```
<head>
	.....
	.....
	<script>
      function showdate() {
        var x = new Date();
        alert(x);
      }
    </script>
</head>

  <body>
    <button type="button" onclick="showdate()">点击显示日期</button>
  </body>
```

实例： [10403head.html](10403head.html) 



### 3.3 body和head中的Javascript函数

```
<head>
	....
	....
	<script>
		function xx(){
			....
		}
	</script>
<head>
```



```
<body>
	<script>
		function xxxx(){
			...
		}
	<script>
</body>
```



## 4外联式（外部脚本）

如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。

脚本文件可以通过 src 特性（attribute）添加到 HTML 文件中。

HTML内容：

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./js/test.js"></script> //外部脚本
</head>
```

外部的JS内容：

```
function dianji() {
    alert("这是外联式JS");
}
```

实例： [10404src.html](10404src.html) 



如果用绝对路径，但是需要是完整的URL

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```



如果要添加多个脚本，则使用多个标签：

```
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
```



**请注意**

```
一般来说，只有最简单的脚本才嵌入到 HTML 中。更复杂的脚本存放在单独的文件中。

使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 缓存 中。

之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。

这可以节省流量，并使得页面（加载）更快。
```





**==!WARING!==**

如果设置了 src 特性，script 标签内容将会被忽略。
一个单独的` <script>` 标签不能同时有 src 特性和内部包裹的代码。

```
<script src="file.js">
  alert(1); // 此内容会被忽略，因为设定了 src
</script>
```

我们必须进行选择，要么使用外部的` <script src="…">`，要么使用正常包裹代码的 `<script>`。

为了让上面的例子正常工作，我们可以将它分成两个`<script>` 标签，如下：

```
<script src="file.js"></script>
<script>
  alert(1);
</script>
```



## 总结

* 我们可以使用一个`<script> `标签将 JavaScript 代码添加到页面中。
* type 和 language 特性（attribute）不是必需的。
* 外部的脚本可以通过`<script src="path/to/script.js"></script>`的方式插入。

