# 105 Javascript输出

[1JavaScript显示数据](#1JavaScript显示数据)

[2使用window.alert弹出警告框](#2使用window.alert弹出警告框)

[3使用document.write写到HTML文档中](#3使用document.write写到HTML文档中)

[4使用innerHTML写入到HTML元素](#4使用innerHTML写入到HTML元素)

[5使用console.log写入到浏览器的控制台。](#5使用console.log写入到浏览器的控制台。)

[总结](#总结)



JavaScript 没有任何打印或者输出的函数。

## 1JavaScript显示数据

JavaScript 可以通过不同的方式来输出数据：

* 使用 **window.alert()** 弹出警告框。
* 使用 **document.write()** 方法将内容写到 HTML 文档中。
* 使用 **innerHTML** 写入到 HTML 元素。
* 使用 **console.log()** 写入到浏览器的控制台。



## 2使用window.alert弹出警告框

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



## 3使用document.write写到HTML文档中

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

**==注意==**

```
请使用 document.write() 仅仅向文档输出写内容。
如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。
```



## 4使用innerHTML写入到HTML元素

如需从 JavaScript 访问某个 HTML 元素，您可以使用 document.getElementById(id) 方法。
请使用 "id" 属性来标识 HTML 元素，并 innerHTML 来获取或插入元素内容。

```
    <p>使用innerHTML = " "写入到HTML元素</p>
    <p id="change">这是一个要被改动的段落</p>
    <script>
        document.getElementById("change").innerHTML = "段落已修改";
    </script>
```

实例： [10503innerHTML.html](10503innerHTML.html) 



## 5使用console.log写入到浏览器的控制台。

如果您的浏览器支持调试，你可以使用 console.log() 方法在浏览器中显示 JavaScript 值。

浏览器中使用 F12 来启用调试模式， 在调试窗口中点击 "Console" 菜单。

```
    <script>
        console.log(100); // 100
        a = 1;
        b = 5;
        c = a + b;
        console.log(c); // 6
    </script>
```

实例： [10504consoleLog.html](10504consoleLog.html) 



## 总结

测试输出时尽量用console.log()，或者alert()也可以，不建议用document.write = (" ")，因为会改写或覆盖HTML文档内容。