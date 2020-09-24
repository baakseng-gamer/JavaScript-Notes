# 111 Javascript数据类型

**目录**
- [111 Javascript数据类型](#111-javascript数据类型)
- [概要](#概要)
- [1. 分类](#1-分类)
- [2. Number 数字型](#2-number-数字型)
  - [2.1常规](#21常规)
  - [2.2极大或极小](#22极大或极小)
  - [2.2三个特殊值](#22三个特殊值)
  - [2.3进制](#23进制)
  - [2.4数字范围（仅作了解）](#24数字范围仅作了解)
  - [2.4NaN](#24nan)
- [3. String 字符串型](#3-string-字符串型)
  - [3.1引号的使用](#31引号的使用)
  - [3.1引号嵌套](#31引号嵌套)
  - [3.2转义符](#32转义符)
  - [3.3字符串长度](#33字符串长度)
  - [3.4字符串拼接](#34字符串拼接)
- [4. Boolean 布尔型（逻辑类型）](#4-boolean-布尔型逻辑类型)
- [5. Null 空值](#5-null-空值)
- [6. Undefined未定义的值](#6-undefined未定义的值)
- [7. Object对象](#7-object对象)
- [8. Symbol](#8-symbol)
- [9. 声明变量类型](#9-声明变量类型)
- [10. typeof运算符](#10-typeof运算符)
- [总结](#总结)
- [练习](#练习)


***

# 概要

在计算机中，不同的数据所需占用的存储空间是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是定义了不同的数据类型。

简单来说，数据类型就是数据的类别型号。

比如名字"Baakseng"，年龄18，这些数据的类型是不一样的。

```
var name = "Baakseng"; // 这是一个字符串
var age = 18; // 这是数字型
```



**变量**是用来存储值的所在处，它们有名字和数据类型。变量的数据类型决定了如何将代表这些值的位存储到计算机的内存中。JavaScript 是一种**弱类型**或者说**动态语言**，这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。

```
var x = 0079; //x为数字
var x - "RX78-02" //x为字符串
```

在代码运行时，变量的数据类型是由 JS引擎 根据 = 右边变量值的数据类型来判断 的，运行完毕之后， 变量就确定了数据类型。



# 1. 分类

JS的数据类型；通过typeof来检测，得到的数据类型有

**简单的数据类型（基本类型)：**

* Number(数字型)
* String(字符串类型)
* Boolean(布尔值类型)
* Null(空值)
* Undefined(未定义)
* Symbol



**复杂的数据类型（引用类型）:**

* Object(对象)



**注：**

* Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
* 数组(Array)和函数(Function)需要用别的方法检测出此类型，typeof弄不出来。



# 2. Number 数字型

number 类型代表整数和浮点数。

数字可以做很多操作，比如加减乘除、取余等等



## 2.1常规

```
let age = 18;   //整数
let age = 18.3747; //小数
```



## 2.2极大或极小

极大或极小的数字可以通过科学（指数）计数法来书写

```
let age = 10e5; //1000000 我帮你数啦6个零
let height = 123e-5 //0.12300 方法:e-5就是小数点后面5位
```

实例： [11101number.html](11101number.html) 



## 2.2三个特殊值

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

我们可以通过除以 0 来得到它，或者在代码直接使用它：

```
        let age = 1 / 0;
        let height = Infinity
        console.log(age); //Infinity
        console.log(height); //Infinity
```

实例： [11102number.html](11102number.html) 

无穷小就用 -1 / 0 来计算出来。



## 2.3进制

最常见的进制有二进制、八进制、十进制、十六进制。

八进制数字序列范围：0~7

```
        let num81 = 07; //对应十进制的7
        let num82 = 023; //对应十进制的19
        let num83 = 010; //对应十进制的8
```



十六进制数字序列范围：0 ~ 9 以及 A ~ F

```
        let num161 = 0xF; //对应十进制的15
        let num162 = 0x13; //对应十进制的19
        let num163 = 0x10; //对应十进制的16
```

实例： [11103number.html](11103number.html) 

我们只需要记住，在JS中八进制前面加0，十六进制前面加 0x  。

二进制的参考网上方法。



## 2.4数字范围（仅作了解）

JavaScript中数值的最大值和最小值

```
        console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
        console.log(Number.MIN_VALUE); // 5e-324
```

除了最大值和最小值，还有超出范围：

* 正无穷
  Infinity
  Number.POSITIVE_INFINTY

* 负无穷
  -Infinity
  Number.NEGATIVE_INFINITY

  

**缺陷：**无法参与下一次计算

**检测方法：**用isFinite

* 超出范围 false
* 合法范围true





## 2.4NaN

Not a Number的简写

代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果。

```
console.log("not a number" / 3); //NaN
```

`NaN` 是粘性的。任何对 `NaN` 的进一步操作都会返回 `NaN`：

```
console.log("not a number" * 9 - 3); //NaN
```

实例：  [11105number.html](11105number.html) 



如果检测是否数字型，用isNaN()方法，返回值为true是数字型，false就是非数字型；

```
        let a = "Baakseng";
        let b = 18;
        let c = "18";
        console.log(isNaN(a)); //true
        console.log(isNaN(b)); //false
        console.log(isNaN(c)); //false
```

实例：  [11106isNan.html](11106isNan.html) 







# 3. String 字符串型

由0个或多个16位unicode字符组成；

字符串是存储字符（比如 "Baakseng Lai"）的变量。



## 3.1引号的使用

字符串可以是引号中的任意文本。可以使用**单引号**、**双引号**和**反引号**：

```
        var strA = "Baakseng"; //Baakseng
        var strB = 'Baakseng'; //Baakseng
        var strC = `Baakseng`; //Baakseng
        var strD = '我是柏成'; //我是柏成

        var srcE = 格纳库; 
        //Uncaught ReferenceError: 格纳库 is not defined
```

上面有一行报错的代码，因为没使用引号，而且JS没有这些语法。

添加了引号的数字后不是Number数字型，而变成了String字符串型

```
var strNUM = "13";  //注意这不是Number数字，是字符串，因为加了引号
```

实例： [11107string.html](11107string.html) 



引号内的**任何东西**都是属于字符串，即使里面**没有东西**或者是**空格**，都属于合法的字符串：

```
        var str1 = ""; //啥都没有
        var str2 = ''; //啥都没有
        var str3 = "  "; //两个空格 
        var str4 = "ABC "; //ABC后面还有一个空格 
        
        console.log(typeof(str2)); //string
```

在控制台Console里用鼠标分别在第一行第二行第三行双击：

第一行没任何东西，第二行也没任何东西，但是用`typeof()`方法检测出是字符串。

第三行双击能看到被选中的空格

实例： [11108string.html](11108string.html) 



**反引号**是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如：

```
var str1 = "赤色彗星诞生"; //赤色彗星诞生
var str2 = `机动战士高达THE ORIGIN ${str1}`; //机动战士高达THE ORIGIN 赤色彗星诞生
```

实例： [11109string.html](11109string.html) 



`${...}`内的表达式会被计算，计算结果会成为字符串的一部分。可以在` ${…}` 内放置任何东西：诸如名为 `name `的变量，或者诸如` 1 + 2` 的算数表达式，或者其他一些更复杂的。

```
alert( `the result is ${1 + 2}` ); // the result is 3
```





## 3.1引号嵌套

JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 **(外双内单，外单内双)**

```
var strMsg1 = "那台臭名昭著的'白色恶魔'"; //那台臭名昭著的'白色恶魔'
var strMsg2 = '那台红有角三倍速的"赤色彗星"'; //那台红有角三倍速的"赤色彗星"

var strMsg3 = '相逢在宇宙"; 
//报错 不能 单双引号搭配
```

 [11110string.html](11110string.html) 



## 3.2转义符

类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。
转义符都是 \ 开头的，常用的转义符及其说明如下：

| **转义符** | **解释说明**                   |
| ---------- | ------------------------------ |
| \n         | 换行符，n  是  newline  的意思 |
| \ \        | 斜杠  \                        |
| \'         | '  单引号                      |
| \"         | ”双引号                        |
| \t         | tab 缩进                       |
| \b         | 空格 ，b  是  blank 的意思     |

还有更多的可翻阅网上资料



如果字符串""里面还想加双引号的话，用转义符：

```
alert("夏亚的外号叫\"鸭子\"")
```

实例： [11111string.html](11111string.html) 



## 3.3字符串长度

字符串是由若干字符组成的，这些字符的数量就是字符串的长度。通过字符串的 `length` 属性可以获取整个字符串的长度。

```
        var str1 = 'My name is Baakseng';
        console.log(str1.length); //19 一个空格算1个

        var str2 = "哦类哇刚大木";
        console.log(str2.length); //6 一个中文算1个
```



测试没有任何东西的字符串的长度：

```
var str3 = "";
console.log(str3.length); // 0
```

没有任何东西的字符串长度返回值为0；



测试未赋值的长度：

```
        var str4;
        console.log(str4.length);// 报错
```



测试拼接后的长度：

```
        var lang = "Java";
        lang = lang + "Script";
        console.log(lang); //JavaScript
        console.log(lang.length); //10
```



实例： [11112string.html](11112string.html) 



## 3.4字符串拼接

拼接规则：

* 多个字符串之间可以使用 + 进行拼接，其拼接方式为 **字符串** + **任何类型** = **拼接之后的新字符串**。
* 拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串。

字符串+字符串：

```
var text1 = "Hello" + " " + "Baakseng";
console.log(text1); //Hello Baakseng
```



两个数字字符串相加：

```
var text2 = "123" + "456";
console.log(text2); //123456
console.log(typeof(text2)); //string
```

结果不是计算相加成579，而是变成123456，类型检测结果为string



数字型与数字字符串相加：

```
var text3 = "123" + 11;
console.log(text3); //12311
```

结果数字型和字符串型拼接后变成新的字符串型



实例： [11113string.html](11113string.html) 





# 4. Boolean 布尔型（逻辑类型）

Boolean 类型仅包含两个值：`true` 和 `false`。

* `true`表示 真（对）
* `false`表示假（错）

布尔型和数字型相加的时候， true 的值为 1 ，false 的值为 0。

```
console.log(true + 199); //200
console.log(false + 199); //199
```



boolean可以用来校验：

```
        var a = "Baakseng";
        var b = "baakseng";
        console.log(a == b); //false
        console.log(typeof(a == b)); //boolean
```

检查a和b是否相等，结果是false，即错的。



实例： [11114boolean.html](11114boolean.html) 



可以作为比较的结果：

```
        var a = 4 < 1;
        var b = 4 > 1;
        console.log(a); //false
        console.log(b); //true
```

实例： [11115boolean.html](11115boolean.html) 



可以直接赋值：

```
        var yes = true;
        var no = false;
        console.log(yes); //true
        console.log(yes + no); //1
```

```
        var b = 4 > 1;
        console.log(b == yes); //true
        console.log(b == true); //true
```

实例： [11116boolean.html](11116boolean.html) 



# 5. Null 空值

特殊的 null 值不属于上述任何一种类型。

它构成了一个独立的类型，只包含 `null` 值。

可以通过将变量的值设置为 null 来清空变量：

```
        var a = "Baakseng";
        console.log(a); //Baakseng
        a = null;
        console.log(a); //null
```

注意JS是逐行执行的，a先被赋值后，console输出为被赋的值，不会被下面的a = null受影响。

实例： [11117null.html](11117null.html) 



# 6. Undefined未定义的值

特殊值 `undefined` 和 `null` 一样自成类型。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```
        var myName;
        console.log(myName);
        console.log(typeof myName);
```

实例： [11118undefined.html](11118undefined.html) 



`underfined`可以给变量赋值，但是不建议这样做

```
        var age = 18;
        age = undefined;
        console.log(age);
```

实例： [11119undefined.html](11119undefined.html) 



**==注意==**

使用 `nul`l 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。



# 7. Object对象

是一个复杂的数据类型，也是引用类型。

对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

```
        var person = {
            personName : "Baakseng",
            age : 18,
            perID : "RX78-02"
        };
        console.log(person);
        //建议控制台console查看，内容多
```

实例： [11120object.html](11120object.html) 



对象属性有两种寻址方式：

```
        var hisName = person.personName;
        var hisName = person["personName"];
        //前面两行代码作用一样，是寻址的用法
        console.log(hisName); //Baakseng
```

实例： [11121object.html](11121object.html) 



 **JavaScript 变量均为对象。声明一个变量时，就创建了一个新的对象。**



# 8. Symbol

**symbol** 类型用于创建对象的唯一标识符。我们在这里提到 symbol 类型是为了完整性，但要在学完 **object** 类型后再学习它。

Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。



# 9. 声明变量类型

当您声明新变量时，可以使用关键词 "new" 来声明其类型：

```
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```

**==注意==**

上面的typeof都为`object`



# 10. typeof运算符

`typeof` 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

它支持两种语法形式：

* 作为运算符：typeof a。
* 函数形式：typeof(a)。

总之，有括号和没有括号，得到的结果是一样的。



对 `typeof x` 的调用会以字符串的形式返回数据类型：

```
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

最后三行要说明

1. `Math` 是一个提供数学运算的内建 `object`。后面会学习到它。此处仅作为一个 `object` 的示例。
2. `typeof null` 的结果是 `"object"`。这是官方承认的 `typeof` 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。
3. `typeof alert` 的结果是 `"function"`，因为 `alert` 在 JavaScript 语言中是一个函数。后面会学习函数，那时会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待，并返回 `"function"`。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。



**补充：**

```
typeof NaN; //number
typeof abc; //undefined 因为没有被赋值
```



# 总结

JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 `object` 为复杂数据类型）。

- `number` 用于任何类型的数字：整数或浮点数，在 ±253 范围内的整数。
- `bigint` 用于任意长度的整数。
- `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
- `boolean` 用于 `true` 和 `false`。
- `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
- `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
- `symbol` 用于唯一的标识符。
- `object` 用于更复杂的数据结构。

我们可以通过 `typeof` 运算符查看存储在变量中的数据类型。

- 两种形式：`typeof x` 或者 `typeof(x)`。
- 以字符串的形式返回类型名称，例如 `"string"`。
- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`。



# 练习

**1.下面的脚本会输出什么？**

```
        let name = "Ilya";

        console.log(`hello ${1}`); // ?

        console.log(`hello ${"name"}`); // ?

        console.log(`hello ${name}`); // ?
```

实例： [11199test01.html](11199test01.html) 