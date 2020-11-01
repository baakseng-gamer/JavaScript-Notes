# 110 Javascript变量

**目录**
- [110 Javascript变量](#110-javascript变量)
- [概要](#概要)
- [1. let](#1-let)
- [2. 命名](#2-命名)
- [3. 常量](#3-常量)
- [4. 大写形式的常数](#4-大写形式的常数)
- [5. var](#5-var)
- [5. 起名是一门艺术](#5-起名是一门艺术)
- [总结](#总结)
- [练习](#练习)


***

# 概要

变量是用于存储信息的"容器"。

大多数情况下，JavaScript 应用需要处理信息。这有两个例子：

* 一个网上商店 —— 这里的信息可能包含正在售卖的商品和购物车。
* 一个聊天应用 —— 这里的信息可能包括用户和消息等等。

变量就是用来储存这些信息的。



# 1. let

在 JavaScript 中创建一个变量，需要用到 `let `关键字。

```
let massage;
```

上面创建了一个名称为"massage"的变量名，未赋值，数据类型为undefined（后面会学习typeof检测数据类型）。

实例： [110letiables01.html](110letiables01.html) 打开控制台的Console查看。



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

实例： [110letiables02.html](110letiables02.html) 



上面代码可以更简洁一点：

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

但是上面代码不推荐，影响可读性。



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

实例： [110letiables03.html](110letiables03.html) 检测一下呗

当值改变的时候，之前的数据就被从变量中删除了。

变量值将以最后一次赋的值为准。



还可以声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。

```
    let massage1 = "Hello";
    let massage2;
    massage2 = massage1;
    console.log(massage1);
    console.log(massage2);
```

实例： [110letiables04.html](110letiables04.html) 



**==!WARING!==**

* 声明两次会触发 error

  ```
  let massage = "ABC";
  let massage = "ABC";
  alert(massage);// Uncaught SyntaxError: Identifier 'massage' has already been declared
  ```

  实例： [110letiables05.html](110letiables05.html) Console查看错误信息

  一个变量应该只被声明一次。

  因此，对同一个变量应该只声明一次，之后在不使用`let` 的情况下对其进行引用。



**拓展**

> 函数式语言
> 有趣的是，也存在禁止更改变量值的 函数式 编程语言。比如 Scala 或 Erlang。
>
> 在这种类型的语言中，一旦值保存在盒子中，就永远存在。如果你试图保存其他值，它会强制创建一个新盒子（声明一个新变量），无法重用之前的变量。
>
> 虽然第一次看上去有点奇怪，但是这些语言有很大的发展潜力。不仅如此，在某些领域，比如并行计算，这个限制有一定的好处。研究这样的一门语言（即使不打算很快就用上它）有助于开阔视野。





# 2. 命名

JavaScript 的变量命名有两个限制：

* 变量名称必须仅包含字母，数字，符号 $ 和 _。
* 首字符必须非数字。



例如：

```
let userName;
let test123;
```



如果命名包括多个单词，通常采用驼峰式命名法（gundamNum）。也就是，单词一个接一个，除了第一个单词，其他的每个单词都以大写字母开头：myVeryLongName。



有趣的是，美元符号 '$' 和下划线 '_' 也可以用于变量命名。它们是正常的符号，就跟字母一样，没有任何特殊的含义。

```
    let $ = 3;
    let _ = 2;
    console.log($ + _); //5
```



下面的变量命名不正确：

```
let 123a; // 不能以数字开始
let my-name; // 连字符 '-' 不允许用于变量命名
```



**区分大小写**

命名为 gundam和 GunDam 的变量是不同的两个变量。



**允许非英文字母，但不推荐**

```
let имя = '这俄文是什么？';
let 我的名字 = 'Baakseng';
```

实例： [110variables07.html](110variables07.html)  测试一下嘛



**==!WARING!==** **保留字**

* 比如，let、class、return、function 都被保留了。

  下面的代码将会抛出一个语法错误：

  ```
  let let = 5; // 不能用 "let" 来命名一个变量，错误！
  let return = 5; // 同样，不能使用 "return"，错误！
  ```

​		具体的保留字列表可以上网翻阅



# 3. 常量

声明一个常数（不变）变量，可以使用 `const` 而非` let`。

```
const myName = "Baakseng";
```

使用 `const` 声明的变量称为“常量”。它们不能被修改，如果你尝试修改就会发现报错

```
    const myName = "Baakseng";

    // var myName = "erbi"
    // 会报错

    // const myName = "erbi";
    // 也会报错

    // let myName = "erbi";
    // 又也会报错
    alert(myName);
```

实例： [110variables08.html](110variables08.html) 



当这变量确定永远不会改变时，就可以使用`const`来赋值，并且清楚地向别人传递这一事实。



# 4. 大写形式的常数

一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

使用大写字母和下划线来命名这些常量。

例如，以所谓的“web”（十六进制）格式为颜色声明常量：

```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```



**好处：**

* COLOR_ORANGE 比 "#FF7F00" 更容易记忆。
* 比起 COLOR_ORANGE 而言，"#FF7F00" 更容易输错。
* 阅读代码时，COLOR_ORANGE 比 #FF7F00 更易懂。



什么时候该为常量使用大写命名，什么时候进行常规命名？让我们弄清楚一点。

作为一个“常数”，意味着值永远不变。但是有些常量在执行之前就已知了（比如红色的十六进制值），还有些在执行期间被“计算”出来，但初始赋值之后就不会改变。

```
const pageLoadTime = /* 网页加载所需的时间 */;
```

上面的pageLoadTime 的值在页面加载之前是未知的，所以采用常规命名。但是它仍然是个常量，因为赋值之后不会改变。

换句话说，大写命名的常量仅用作“**硬编码（hard-coded）**”值的别名。



# 5. var

var和let区别在于：

* var用来声明全局变量

* let用来声明局部变量，是块级的变量

在function中局部变量推荐使用let变量，避免变量名冲突。



**作用域规则**

let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。

```
    function varTest(){
        var x = 5;
        if(x < 10){
            var x = 8;
            console.log(x); // 8
        }
        console.log(x); // 8
    }
    varTest();
```

实例： [110variables09var.html](110variables09var.html) 



```
    function letTest(){
        let x = 5;
        if(x < 10){
            let x = 8;
            console.log(x); // 8
        }
        console.log(x); // 5
    }
    letTest();
```

实例： [110variables09let.html](110variables09let.html) 



从上面两个例子可看出：

var是全局变量，let是局部变量。



# 5. 起名是一门艺术

一个变量名应该有一个清晰、明显的含义，对其存储的数据进行描述。

变量命名是编程过程中最重要且最复杂的技能之一。快速地浏览变量的命名就知道代码是一个初学者还是有经验的开发者写的。

在一个实际项目中，大多数的时间都被用来修改和扩展现有的代码库，而不是从头开始写一些完全独立的代码。当一段时间后，我们做完其他事情，重新回到我们的代码，找到命名良好的信息要容易得多。换句话说，变量要有个好名字。

声明变量之前，多花点时间思考它的更好的命名。你会受益良多。

一些可以遵循的规则：

* 使用易读的命名，比如 `userName` 或者 `shoppingCart`。
  离诸如 a、b、c 这种缩写和短名称远一点，除非你真的知道你在干什么。
* 变量名在能够准确描述变量的同时要足够简洁。不好的例子就是 `data` 和 `value`，这样的名称等于什么都没说。如果能够非常明显地从上下文知道数据和值所表达的含义，这样使用它们也是可以的。
* 脑海中的术语要和团队保持一致。如果网站的访客称为“用户”，则我们采用相关的变量命名，比如` currentUser` 或者 `newUser`，而不要使用`currentVisitor` 或者一个 `newManInTown`。



**重用还是新建？**

最后一点，如果倾向于重用现有的变量，而不是声明一个新的变量。

结果是，这个变量就像是被扔进不同东西盒子，但没有改变它的贴纸。现在里面是什么？谁知道呢。我们需要靠近一点，仔细检查才能知道。

这样节省了一点变量声明的时间，但却在调试代码的时候损失数十倍时间。

额外声明一个变量绝对是利大于弊的。

现代的 JavaScript 压缩器和浏览器都能够很好地对代码进行优化，所以不会产生性能问题。为不同的值使用不同的变量可以帮助引擎对代码进行优化。



# 总结

我们可以使用 var、let 或 const 声明变量来存储数据。

* let — 现代的变量声明方式。
* var — 老旧的变量声明方式。一般情况下，我们不会再使用它。但是，我们会在 旧时的 "var" 章节介绍 var 和 let 的微妙差别，以防你需要它们。
* const — 类似于 let，但是变量的值无法被修改。



变量应当以一种容易理解变量内部是什么的方式进行命名。



# 练习

**1.使用变量**

声明两个变量：`admin` 和 `name`。
将值 `"Baakseng"` 赋给 `name`。
从 `name` 变量中拷贝其值给 `admin`。
使用` alert` 显示 `admin` 的值（必须输出 “Baakseng”）。

```
    let name, admin;
    name = "Baakseng";
    admin = name;
    alert(admin);
```

实例： [110variablesTest01.html](110variablesTest01.html) 



**2.起名**

代表元祖的变量：

```
var gundamName = "RX78-2";
```



网站当前访问者的名字：

```
let currentUserName = "Baakseng";
```



**3.交换两个变量的值**

方法：添加中间的变量

```
    var temp; //声明一个临时盒子
    var ms1 = "GUNDAM"; //ms1盒子里有个高达
    var ms2 = "ZAKU";  //ms2盒子里有个扎古
    temp = ms1; //高达扔进临时盒子
    ms1 = ms2; //把扎古扔进ms1盒子里
    ms2 = temp; //把高达从临时盒子里扔进ms2盒子里
    console.log(ms1);
    console.log(ms2);
```

实例： [110variablesTest02.html](110variablesTest02.html) 