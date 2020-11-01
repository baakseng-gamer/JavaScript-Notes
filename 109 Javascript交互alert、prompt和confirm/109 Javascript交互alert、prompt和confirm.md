# 109 Javascript交互alert、prompt和confirm

为了方便信息的输入输出，JS提供了一些输入输出语句。

**目录**
- [109 Javascript交互alert、prompt和confirm](#109-javascript交互alertprompt和confirm)
- [1. alert](#1-alert)
- [2. prompt](#2-prompt)
- [3. confirm](#3-confirm)
- [总结](#总结)


***

# 1. alert

这个前面已经看到过了。它会显示一条信息，并等待用户按下 “OK”。

```
alert("Hello Javascript!");
```

弹出的这个带有信息的小窗口被称为 **模态窗**。“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口。在上面示例这种情况下 —— 直到用户点击“确定”按钮。



# 2. prompt

浏览器弹出输入框，用户可以输入。是一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。

输入内容：

```
prompt("请输入你的余额");
```

实例：  [10901prompt01.html](10901prompt01.html) 



输入内容后再弹出内容：

```
    var money = prompt("请输入你的余额");
    alert("你的余额为"  + money + "元");
```

实例： [10901prompt02.html](10901prompt02.html) 



**详细的语法**：

```
result = prompt(text, [default])
```

text为显示文本

default为可选的第2个参数，input框的初始值

例子：

```
    let x = prompt("How are you?" ,10000);
    alert(`You are ${x} years old!`);
```

**==注意==**

* 上面代码段的第二行中的 ` 号（键盘数字1键的左边），还有$号，后面会学到。

实例： [10901prompt03.html](10901prompt03.html) 

上面第二行代码与下面代码显示一样：

```
    alert("You are " + x + " years old!")
```



**==!WARING==!**

* IE 浏览器会提供默认值。

* 第二个参数是可选的。但是如果我们不提供的话，Internet Explorer 会把 "undefined" 插入到 prompt。

  我们可以在 Internet Explorer 中运行下面这行代码来看看效果：

  ```
  let test = prompt("Test");
  ```

  所以，为了 prompt 在 IE 中有好的效果，我们建议始终提供第二个参数：

  ```
  let test = prompt("Test", ''); //  用于 IE 浏览器
  ```

  实例： [10901prompt04IE.html](10901prompt04IE.html) 



# 3. confirm

如果用户点击确定按钮，则 confirm() 返回 true。如果点击取消按钮，则 confirm() 返回 false。

**语法**

```
x = confirm(text);
```

confirm 函数显示一个带有 question 以及确定和取消两个按钮的模态窗口。

点击确定返回 true，点击取消返回 false。

例子：

```
    var x = confirm("Are you ture or false");
    alert(x);
```

弹出模态窗口，如果按确定则返回ture值，按取消返回false值。

实例： [10902confirm01.html](10902confirm01.html) 

例子：你是高达吗？

```
    function show_confirm(){
        var isGUNDAM = confirm("你是高达吗？");
        if (isGUNDAM == true){
            alert("哦类哇刚大木！");
        }else{
            alert("不，我是扎古！");
        }
    }
    show_confirm();
```

实例： [10902confirm02.html](10902confirm02.html) 



例子：你是按确定还是取消？

```
    function OKorCancel(){
        var x = confirm("按下确定或取消的按钮");
        var y;
        if (x == true ){
            y = "你按下了\"确定\"按钮！";
        }else {
            y = "你按下了\"取消\"按钮！";
        }
        document.getElementById("OC").innerHTML = y;
    }
```

实例： [10902confirm03.html](10902confirm03.html) 



# 总结

我们学习了与用户交互的 3 个浏览器的特定函数：

`alert`
显示信息。

`prompt`

显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 null。

`confirm`
显示信息等待用户点击确定或取消。点击确定返回 true，点击取消或按下 Esc 键返回 false。



这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。

上述所有方法共有两个限制：

* 模态窗口的确切位置由浏览器决定。通常在页面中心。
* 窗口的确切外观也取决于浏览器。我们不能修改它。

这就是简单的代价。还有其他一些方法可以显示更漂亮的窗口，并与用户进行更丰富的交互，但如果“花里胡哨”不是非常重要，那使用本节讲的这些方法也挺好。