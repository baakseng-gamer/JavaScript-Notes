# 105 Javascript输出

JavaScript 没有任何打印或者输出的函数。

## 1.1 JavaScript显示数据

JavaScript 可以通过不同的方式来输出数据：

* 使用 **window.alert()** 弹出警告框。
* 使用 **document.write()** 方法将内容写到 HTML 文档中。
* 使用 **innerHTML** 写入到 HTML 元素。
* 使用 **console.log()** 写入到浏览器的控制台。



## 1.2 使用window.alert()

```
    <p>使用window.alert()</p>
    <script>
        alert(5 + 10); //15
        alert("5 + 10"); //5 + 10
    </script>
```

实例： [10501windowAlert.html](10501windowAlert.html) 

弹出来的提示框为 15。

注alert( )括号里可以计算，如果加引号就原封不动显示出来。



## 1.3 使用document.write()

```
    <script>
        document.write("<h2>这是使用JS写到HTML上<h2>");
    </script>
```

还可以弄出样式来

```
    <style>
        .box{
            width: 200px;
            height: 200px;
            background: lightseagreen;
        }
    </style>
    
    <script>
        document.write("<div class='box'>可以弄出方块</div>");
    </script>
```

实例： [10502documentwrite.html](10502documentwrite.html) 

