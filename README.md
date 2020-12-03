# JavaScript-Notes

由于排版问题，[导学](#导学)放到末尾处

<center><strong>索引</strong></center>

## 基础知识 Basic

|                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <a href="101 初识JavaScript\101 初识JavaScript.md">101 初识JavaScript</a> | <a href="102 JS初体验\102 JS初体验.md">102 JS初体验</a>      | <a href="103 开发者控制台\103 开发者控制台.md">103 开发者控制台</a> Devtools |
| <a href="104 Javascript用法\104 Javascript用法.md">104 Javascript用法</a> Howto | <a href="105 Javascript输出\105 Javascript输出.md">105 Javascript输出</a> Output | <a href="106 Javascript语法\106 Javascript语法.md">106 Javascript语法</a> Syntax |
| <a href="107 Javascript语句\107 Javascript语句.md">107 Javascript语句</a> Statements | <a href="108 Javascript注释\108 Javascript注释.md">108 Javascript注释</a> Comments | <a href="109 Javascript交互alert、prompt和confirm\109 Javascript交互alert、prompt和confirm.md">109 Javascript交互alert、prompt和confirm</a> |
| <a href="110 Javascript变量\110 Javascript变量.md">110 Javascript变量</a>  Variables | <a href="111 Javascript数据类型\111 Javascript数据类型.md">111 Javascript数据类型</a> Datatypes | <a href="112 类型转换\112 类型转换.md">112 类型转换</a> Type-conversion |
| <a href="113 运算符\113 运算符.md">113 运算符</a> Operator   | <a href="114 流程控制语句\114 流程控制语句.md">114 流程控制语句</a> | <a href="115 分支语句\115 分支语句.md">115 分支语句</a> if...else & switch |
| <a href="116 循环语句\116 循环语句.md">116 循环语句</a> Loop | <a href="117 数组\117 数组.md">117 数组</a> Array            | <a href="118 函数\118 函数.md">118 函数</a> Function-Basic   |
| <a href="119 作用域、预解析\119 作用域、预解析.md">119 作用域、预解析</a> Scope |                                                              |                                                              |
|                                                              |                                                              | <a href="199 JavaScript特性总结\199 JavaScript特性总结.md">199 JavaScript特性总结</a> Specials |



## 引用类型 Reference Type

|                                                    |                                                              |                                                  |
| -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------ |
| <a href="201 对象\201 对象.md">201 对象</a> Object | <a href="202 自定义、内置和浏览器\202 自定义、内置和浏览器.md">202 自定义、内置和浏览器</a> | <a href="203 算数\203 算数.md">203 算数</a> Math |
|                                                    |                                                              |                                                  |



## 备忘录：



## 其它(以下内容以后分类)

优雅降级和渐进增强

CSS3中的方案

```
.transition {   /* 渐进增强写法 */
  -webkit-transition: all .5s;
     -moz-transition: all .5s;
       -o-transition: all .5s;
          transition: all .5s;  
} 
.transition {   /* 优雅降级写法 */ 
          transition: all .5s;
       -o-transition: all .5s;
     -moz-transition: all .5s;
  -webkit-transition: all .5s;
}
```

推荐第一种写法，即渐进增强



推荐写法
在写CSS3的时候，推荐渐进增强
在写JS的时候，推荐优雅降级；



创建对象自定义方法的不同模式

https://www.cnblogs.com/linququ/p/8733079.html

https://blog.csdn.net/anxinliu2011/article/details/7545399

工厂模式 构造函数模式 原型模式 混合模式等等



## 导学

学完基本的**HTML**,**CSS**以后，可能基本了解常见网页的布局，制作静态的网页，但是还没真正学会制作网页，因为经常逛不少已经成熟运行的网站，很多东西都完全不知道如何运行。其实这个网站不少功能是由**JavaScript**制作出来的。

掌握JS以后，能知道很多交互效果的原理了，而且**JavaScript**是前端技术里重中之中的，以后再深入学习的时候，会碰到**jQuery**，**Vue**，**React**，**Angular**, **NodeJs**等等，如果你掌握了JavaScript，后面学的时候会如虎添翼。一名优秀的前端开发，JavaScript必定是熟练掌握的。



做笔记时采用一边看教程**视频**，一边看教程**文档**的方式。不使用电脑时，可以看**书籍**。**三位一体，法力无边**！！！



**视频**

* **web前端开发必会的技能，JavaScript从零基础入门到精通**

  https://www.bilibili.com/video/BV1ux411d75J

* **前端基础进阶-JavaScript核心 DOM BOM操作**

  https://www.bilibili.com/video/BV1k4411w7sV

以上都有本地视频和配套的资料与源码



**文档**

* 菜鸟教程: https://www.runoob.com/
* 现代Javascript: https://zh.javascript.info/





**书籍**

* 《JavaScript 高级程序设计》
* 《JavaScript DOM 编程艺术》



**认真看！认真学！认真做！**

**学习时，代码一定要敲！不要复制粘贴然后执行看结果！**

**拒绝当CV帝！！！**

