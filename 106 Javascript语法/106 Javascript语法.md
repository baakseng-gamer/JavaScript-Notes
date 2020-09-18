

JavaScript 是一个程序语言。语法规则定义了语言结构。



## 1 JavaScript 字面量

在编程语言中，一般固定值称为字面量，如 3.14、"Baakseng"等等



### 1.1 数字(Number)字面量

整数或者是小数，或者是科学计数(e)。

```
    <p id="number"></p> //12300000
    <p id="number1"></p> //3.14
    <script>
        document.getElementById("number").innerHTML= 123e5;
        document.getElementById("number1").innerHTML= 3.14;
    </script>
```

实例： [10601number.html](10601number.html) 



### 1.2 字符串（String）字面量 

可以使用单引号或双引号

```
    <script>
        document.getElementById("string1").innerHTML = "Baakseng";
        document.getElementById("string2").innerHTML = 'Baakseng';
    </script>
```

实例： [10602string.html](10602string.html) 



### 1.3 表达式字面量

用于计算

```
        document.getElementById("sum").innerHTML = 5 + 8;  //13
        document.getElementById("product").innerHTML = 5 * 8; //40
```

实例： [10603biaodashi.html](10603biaodashi.html) 



### 1.4 数组（Array）字面量

定义一个数组

```
[40, 100, 1, 5, 25, 10]
```



### 1.5 对象（Object）字面量 

定义一个对象

```
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```



### 1.6 函数（Function）字面量 

定义一个函数

```
function myFunction(a, b) { return a * b;}
```



## 2. JavaScript变量

在编程语言中，变量用于存储数据值。

JavaScript 使用关键字 var 来定义变量， 使用等号来为变量赋值。

后面会讲let和var的区别和使用方法

```
    var x , y;
    x = 5;
    y = x + 2;
    alert(y); //7
```

实例： [10604var.html](10604var.html) 

变量可以通过变量名访问。在指令式语言中，变量通常是可变的。字面量是一个恒定的值。

**注意**

```
变量是一个名称。字面量是一个值。
```



## 3. JavaScript 操作符

JavaScript使用 算术运算符 来计算值

**算术运算符：**

```
    var x = (9 + 1) * 2;
    console.log(x);
```

控制台Console菜单里查看

实例：  [10605caozuofu1.html](10605caozuofu1.html) 



**赋值运算符：**

```
    var x, y, z;
    x = 3;
    y = 6;
    z = (x + y) * 5;
    alert(z); //45
```

实例： [10605caozuofu2.html](10605caozuofu2.html) 



JavaScript语言有多种类型的运算符，后面会讲到

| 类型                   | 实例      | 描述                   |
| :--------------------- | :-------- | :--------------------- |
| 赋值，算术和位运算符   | = + - * / | 在 JS 运算符中描述     |
| 条件，比较及逻辑运算符 | == != < > | 在 JS 比较运算符中描述 |



## 4. JavaScript语句

语句是执行行为（action）的语法结构和命令。

我们已经见过了 alert('Hello, world!') 这样可以用来显示消息的语句。

我们可以在代码中编写任意数量的语句。语句之间可以使用分号进行分割。

例如，我们将 “Hello World” 这条信息一分为二：

```
alert('Hello'); alert('World');
```

通常，每条语句独占一行，以提高代码的可读性：

```
alert('Hello'); 
alert('World');
```

实例： [10606yuju1.html](10606yuju1.html) 



## 5. 分号

当存在分行符（line break）时，在大多数情况下可以省略分号。

下面的代码也是可以运行的：

```
alert('Hello')
alert('World')
```

在这，JavaScript 将分行符理解成“隐式”的分号。这也被称为 自动分号插入。



**注意**

```
在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！
```



有很多换行并不是分号的例子，例如：

```
    alert( 5 +
    3
    +2)
    //10
```

实例： [10607linebreak.html](10607linebreak.html) 

因为 JavaScript 并没有在这里插入分号。显而易见的是，如果一行以加号 "+" 结尾，那么这是一个“不完整的表达式”，不需要分号。所以，这个例子得到了预期的结果。

**但存在 JavaScript 无法确定是否真的需要自动插入分号的情况。**



这种情况下发生的错误是很难被找到和解决的。

**错误例子**

```
如果你好奇地想知道一个这种错误的具体例子，那你可以看看下面这段代码：

[1, 2].forEach(alert)

你不需要考虑方括号 [] 和 forEach 的含义，现在它们并不重要，之后我们会学习它们。让我们先记住这段代码的运行结果：先显示 1，然后显示 2。


现在我们在代码前面插入一个 alert 语句，并且不加分号：

alert("There will be an error")

[1, 2].forEach(alert)

现在，如果我们运行代码，只有第一个 alert 语句的内容被显示了出来，随后我们收到了一个错误！

但是，如果我们在第一个 alert 语句末尾加上一个分号，就工作正常了：

alert("All fine now");

[1, 2].forEach(alert)

现在，我们能得到 “All fine now”，然后是 1 和 2。

无分号的变体（variant）会出现报错，是因为 JavaScript 并不会在方括号 [...] 前添加一个隐式的分号。

所以，因为没有自动插入分号，第一个例子中的代码被视为了一条简单的语句，我们从引擎看到的是这样的：

alert("There will be an error")[1, 2].forEach(alert)
但它应该是两条语句，而不是一条。这种情况下的合并是不对的，所以才会造成错误。诸如此类，还有很多。
```

即使语句被换行符分隔了，我们依然建议在它们之间加分号。这个规则被社区广泛采用。我们再次强调一下 —— 大部分时候可以省略分号，但是最好不要省略分号，尤其对新手来说。



## 6. JavaScript 关键字

JavaScript 关键字用于标识要执行的操作。

和其他任何编程语言一样，JavaScript 保留了一些关键字为自己所用。

var 关键字告诉浏览器创建一个新的变量：

```
var x = 5 + 6;
var y = x * 10;
```

JavaScript 同样保留了一些关键字，这些关键字在当前的语言版本中并没有使用，但在以后 JavaScript 扩展中会用到。

以下是 JavaScript 中最重要的保留字（按字母顺序）：

|          |            |            |              |
| -------- | ---------- | ---------- | ------------ |
| abstract | else       | instanceof | super        |
| boolean  | enum       | int        | switch       |
| break    | export     | interface  | synchronized |
| byte     | extends    | let        | this         |
| case     | false      | long       | throw        |
| catch    | final      | native     | throws       |
| char     | finally    | new        | transient    |
| class    | float      | null       | true         |
| const    | for        | package    | try          |
| continue | function   | private    | typeof       |
| debugger | goto       | protected  | var          |
| default  | if         | public     | void         |
| delete   | implements | return     | volatile     |
| do       | import     | short      | while        |
| double   | in         | static     | with         |



## 7. JavaScript 注释

不是所有的 JavaScript 语句都是"命令"。双斜杠 // 后的内容将会被浏览器忽略：

```
// 你执行不了我！
```



## 8. JavaScript 数据类型

JavaScript 有多种数据类型：数字，字符串，数组，对象等等：

```
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
```

**数据类型的概念**

编程语言中，数据类型是一个非常重要的内容。

为了可以操作变量，了解数据类型的概念非常重要。

如果没有使用数据类型，以下实例将无法执行：

```
16 + "Volvo"
```

6 加上 "Volvo" 是如何计算呢? 以上会产生一个错误还是输出以下结果呢？

```
"16Volvo"
```

你可以在浏览器尝试执行以上代码查看效果。

在接下来的内容中你将学到更多关于数据类型的知识。



## 9. JavaScript 函数

JavaScript 语句可以写在函数内，函数可以重复引用：

引用一个函数 = 调用函数(执行函数内的语句)。

```
function myFunction(a, b) {
    return a * b;                                // 返回 a 乘以 b 的结果
}
```



## 10. JavaScript 字母大小写

JavaScript 对大小写是敏感的。

当编写 JavaScript 语句时，请留意是否关闭大小写切换键。

函数 getElementById 与 getElementbyID 是不同的。

同样，变量 myVariable 与 MyVariable 也是不同的。



## 11. JavaScript 字符集

JavaScript 使用 Unicode 字符集。

Unicode 覆盖了所有的字符，包含标点等字符。

如需进一步了解，可上网翻阅完整的Unicode相关手册或文档。



## 12. 驼峰法命名

当变量名或函式名是由一个或多个单词连结在一起，而构成的唯一识别字时，第一个单词以小写字母开始；第二个单词的首字母大写或每一个单词的首字母都采用大写字母，例如：myFirstName、myLastName，这样的变量名看上去就像骆驼峰一样此起彼伏，故得名。

骆驼式命名法的命名规则可视为一种惯例，并无绝对与强制，为的是增加识别和可读性。

三种变量命名规则：

```
var firstName='king';//小驼峰

var FirstName='queen';//大驼峰

var first_name='maizi';//下划线法
```

