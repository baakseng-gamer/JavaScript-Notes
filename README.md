# JavaScript-Notes

**索引**

## 一、基础知识

* <a href="101 初识JavaScript\101 初识JavaScript.md">101 初识JavaScript</a>
* <a href="102 JS初体验\102 JS初体验.md">102 JS初体验</a>
* <a href="103 开发者控制台\103 开发者控制台.md">103 开发者控制台</a>
* <a href="104 Javascript用法\104 Javascript用法.md">104 Javascript用法</a>
* <a href="105 Javascript输出\105 Javascript输出.md">105 Javascript输出</a>
* <a href="106 Javascript语法\106 Javascript语法.md">106 Javascript语法</a>



备忘录：

笔记里的电灯泡 添加还有更简洁的JS代码

https://www.runoob.com/js/js-intro.html 看下同学的笔记















































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