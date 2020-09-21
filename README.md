# JavaScript-Notes

由于排版问题，我把[导学](#导学)放到末尾处

**索引**

## 一、基础知识

* <a href="101 初识JavaScript\101 初识JavaScript.md">101 初识JavaScript</a>
* <a href="102 JS初体验\102 JS初体验.md">102 JS初体验</a>
* <a href="103 开发者控制台\103 开发者控制台.md">103 开发者控制台</a> Devtools
* <a href="104 Javascript用法\104 Javascript用法.md">104 Javascript用法</a> Howto
* <a href="105 Javascript输出\105 Javascript输出.md">105 Javascript输出</a> Output
* <a href="106 Javascript语法\106 Javascript语法.md">106 Javascript语法</a> Syntax
* <a href="107 Javascript语句\107 Javascript语句.md">107 Javascript语句</a> Statements
* <a href="108 Javascript注释\108 Javascript注释.md">108 Javascript注释</a> Comments
* <a href="109 Javascript交互alert、prompt和confirm\109 Javascript交互alert、prompt和confirm.md">109 Javascript交互alert、prompt和confirm</a> 
* <a href="110 Javascript变量\110 Javascript变量.md">110 Javascript变量</a>  Variables
* <a href="111 Javascript数据类型\111 Javascript数据类型.md">111 Javascript数据类型</a> Datatypes







备忘录：













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







## 导学

做笔记时采用一边看视频教程，一边看两个文档，三相之力，法力无穷！！！



**视频**

web前端开发必会的技能，JavaScript从零基础入门到精通(黑马程序员Pink老师)

https://www.bilibili.com/video/BV1ux411d75J

前端基础进阶-JavaScript核心 DOM BOM操作(黑马程序员Pink老师)

https://www.bilibili.com/video/BV1k4411w7sV



**文档**

菜鸟教程: https://www.runoob.com/

现代Javascript: https://zh.javascript.info/



**认真做！认真做！认真做！**

**代码一定要敲！不要当CV帝（复制粘贴帝）！**