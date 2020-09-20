# 110 Javascript变量

变量是用于存储信息的"容器"。

大多数情况下，JavaScript 应用需要处理信息。这有两个例子：

* 一个网上商店 —— 这里的信息可能包含正在售卖的商品和购物车。
* 一个聊天应用 —— 这里的信息可能包括用户和消息等等。

变量就是用来储存这些信息的。



## 1. let

在 JavaScript 中创建一个变量，我们需要用到 `let `关键字。

```
let massage;
```

上面创建了一个名称为"massage"的变量名，未赋值，数据类型为undefined（后面会学习typeof检测数据类型）。

实例： [110variables01.html](110variables01.html) 打开控制台的Console查看。



用赋值运算符`=`给变量添加数据，也叫变量初始化：

```
let massage;
massage = "Hello Javascript!"; // 保存字符串
```

现在这个字符串已经保存到与该变量相关联的内存区域了，我们可以通过使用该变量名称访问它：

```
let massage;
massage = "Hello Javascript!"; // 保存字符串
alert(massage);// Hello Javascript
```

实例： [110variables02.html](110variables02.html) 



上面代码更简洁一点：

```
let massage = "Hello Javascript!"; //定义变量并赋值
alert(massage); //Hello Javascript
```



可以一行中声明多个变量：

```
let num = 1;
let name = "Baakseng";
let age = 30;
```

改成一行如下：

```
let num = 1, name = "Baakseng", age = 30;
```

但上上面代码不推荐，影响可读性。



可以采用下面写法：

```
let num = 1,
	name = "Baakseng",
	age = 30;
```



变量可以被改变，而且可以改多少次：

```
let massage;
massage = "AAA";
massage = "BBB";
alert(massage); // BBB
```

实例： [110variables03.html](110variables03.html) 检测一下呗

当值改变的时候，之前的数据就被从变量中删除了。



我们还可以声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。

```
    let massage1 = "Hello";
    let massage2;
    massage2 = massage1;
    console.log(massage1);
    console.log(massage2);
```

实例： [110variables04.html](110variables04.html) 



**!WARING!**

声明两次会触发 error

```
let massage = "ABC";
let massage = "ABC";
alert(massage);// Uncaught SyntaxError: Identifier 'massage' has already been declared
```

实例： [110variables05.html](110variables05.html) Console查看错误信息

一个变量应该只被声明一次。

因此，我们对同一个变量应该只声明一次，之后在不使用`let` 的情况下对其进行引用。



**=拓展=**

函数式语言
有趣的是，也存在禁止更改变量值的 函数式 编程语言。比如 Scala 或 Erlang。

在这种类型的语言中，一旦值保存在盒子中，就永远存在。如果你试图保存其他值，它会强制创建一个新盒子（声明一个新变量），无法重用之前的变量。

虽然第一次看上去有点奇怪，但是这些语言有很大的发展潜力。不仅如此，在某些领域，比如并行计算，这个限制有一定的好处。研究这样的一门语言（即使不打算很快就用上它）有助于开阔视野。



## 命名

