<template><div><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h1>
<p><strong>推荐学习链接</strong> <a href="https://www.runoob.com/html" target="_blank" rel="noopener noreferrer">菜鸟教程</a></p>
<p><strong>HTML 速查列表 <a href="https://www.runoob.com/html/html-quicklist.html" target="_blank" rel="noopener noreferrer">HTML 速查列表 | 菜鸟教程</a></strong></p>
<p><strong>思维导图</strong></p>
<p><img src="@source/images/html-0.png" alt="图片"></p>
<h2 id="_01-html-简介" tabindex="-1"><a class="header-anchor" href="#_01-html-简介"><span>01.HTML 简介</span></a></h2>
<p><strong>1、HTML 超文本语言</strong></p>
<p><strong>2、结构：</strong></p>
<p>1.声明</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html> 声明为 HTML5 文档</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;html>&lt;/html>根元素 包裹下面2个部分</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.头部元素</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;head>  &lt;/head></span>
<span class="line">里面title标签内 为网页标题</span>
<span class="line">&lt;meta charset="utf-8"> 定义网页编码格式为 utf-8 避免乱码</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.可见内容</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;body>  &lt;/body></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>3、HTML 标签</strong></p>
<p>一般为&lt;&gt;&lt;/&gt;这种形式出现</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">也有少数特殊&lt;/>这种形式 空元素</span>
<span class="line">&lt;hr/>    横线隔开</span>
<span class="line">&lt;br/>    换行</span>
<span class="line">&lt;input/> 输入框</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、HTML 元素</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">HTML元素 包含 HTML标签</span>
<span class="line"></span>
<span class="line">eg：&lt;p>hello&lt;/p></span>
<span class="line">标签：p标签</span>
<span class="line">元素：p标签 text元素（hello）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-html-基础" tabindex="-1"><a class="header-anchor" href="#_02-html-基础"><span>02.HTML 基础</span></a></h2>
<p><strong>标题</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">h1到h6都是</span>
<span class="line">&lt;h1>&lt;/h1>  ... &lt;h6>&lt;/h6></span>
<span class="line">h1的字体大小最大</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>段落</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;p>&lt;/p></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>链接</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;a>&lt;/a>  里面一般有href属性 跳转地址</span>
<span class="line">&lt;a href="https://www.runoob.com">菜鸟教程&lt;a/>  点击跳转菜鸟教程</span>
<span class="line"></span>
<span class="line">特殊情况：</span>
<span class="line">&lt;a href="#id">跳转该id位置&lt;a/>  点击跳转该id位置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;img>&lt;/img> 里面一般有src属性 图片地址</span>
<span class="line">&lt;img src="/images/logo.png" width="258" height="39" /></span>
<span class="line"></span>
<span class="line">特殊：</span>
<span class="line">width和height是它的属性</span>
<span class="line">一般元素的宽高为样式</span>
<span class="line">&lt;div style="width:100px;">&lt;/div></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-html-元素" tabindex="-1"><a class="header-anchor" href="#_03-html-元素"><span>03.HTML 元素</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">开始标签  元素内容  结束标签</span>
<span class="line">  &lt;p>     hello    &lt;/p></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>嵌套元素</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;body></span>
<span class="line">  &lt;p></span>
<span class="line">  &lt;/p></span>
<span class="line">&lt;/body></span>
<span class="line"></span>
<span class="line">body标签里面嵌套了p标签</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-html-属性" tabindex="-1"><a class="header-anchor" href="#_04-html-属性"><span>04.HTML 属性</span></a></h2>
<p><strong>为 HTML 元素提供附加信息</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">属性大致为：</span>
<span class="line">class 类名</span>
<span class="line">id    id值</span>
<span class="line">style 样式</span>
<span class="line">title 描述了元素的额外信息 (作为工具条使用)  img图片里面 图片不能显示时 会显示titl</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;img src="logo.png" alt="Company Logo">   alt提供图片的替代文本</span>
<span class="line"></span>
<span class="line">&lt;button title="Click me">Submit&lt;/button>  title鼠标悬停时显示</span>
<span class="line"></span>
<span class="line">&lt;a href="https://www.example.com" target="_blank" rel="noopener">Open in new tab&lt;/a></span>
<span class="line">指定链接的打开方式（如 _blank 在新窗口中打开）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-html-文本格式化" tabindex="-1"><a class="header-anchor" href="#_05-html-文本格式化"><span>05.HTML 文本格式化</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">常用</span>
<span class="line">加粗 &lt;strong>或者&lt;b></span>
<span class="line">斜体 &lt;em>或者&lt;i></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-html-链接" tabindex="-1"><a class="header-anchor" href="#_06-html-链接"><span>06.HTML 链接</span></a></h2>
<p><strong>基本用法</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;a href="/index.html">本文本&lt;/a> 跳转本地文件页面</span>
<span class="line"></span>
<span class="line">&lt;a href="https://www.runoob.com">菜鸟教程&lt;a/>  点击跳转菜鸟教程</span>
<span class="line"></span>
<span class="line">&lt;a href="#id">跳转该id位置&lt;a/>  点击跳转该id位置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>target 属性</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">_self: 在当前窗口或标签页中打开链接（默认）。</span>
<span class="line">_blank: 在新窗口或新标签页中打开链接。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>空链接</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">href="#"	导航到页面顶部	是	占位符，捕获点击事件</span>
<span class="line">href="javascript:void(0)"	阻止默认行为，不刷新页面	否	阻止跳转，配合 JS 使用</span>
<span class="line">href=""	刷新当前页面	是	需要页面刷新时</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-html-表格" tabindex="-1"><a class="header-anchor" href="#_07-html-表格"><span>07.HTML 表格</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>标1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>标2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>21<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;thead > 用于定义表格的标题部分</span>
<span class="line">&lt;tbody > 用于定义表格的主体部分</span>
<span class="line">&lt;tr > 元素定义行</span>
<span class="line">&lt;th>会加粗字体 &lt;td></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08-html-区块" tabindex="-1"><a class="header-anchor" href="#_08-html-区块"><span>08.HTML 区块</span></a></h2>
<p>HTML 元素被分为<strong>块级元素</strong>、<strong>行内元素</strong> 、<strong>行内块级元素</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">块级元素：</span>
<span class="line">1.独占一行</span>
<span class="line">2.有宽高</span>
<span class="line">3.默认宽度100%</span>
<span class="line"></span>
<span class="line">行内元素：</span>
<span class="line">1.非独占</span>
<span class="line">2.无宽高 外边距（margin）和内边距（padding）仅设置左右方向有效 上下无效 设置行高有效，等同于给父级元素设置行高</span>
<span class="line">3.宽度就是它包含的文字或图片的宽度，不可改变</span>
<span class="line">4.行内元素中不能放块级元素，a 链接里面不能再放链接</span>
<span class="line">&lt;a> &lt;b>   &lt;span></span>
<span class="line"></span>
<span class="line">行内块级元素：</span>
<span class="line">1.非独占</span>
<span class="line">2.有宽高</span>
<span class="line">3.会有空白缝隙，设置它上一级的 font-size 为 0，才会消除间隙</span>
<span class="line">&lt;button> &lt;input>   &lt;textarea> &lt;select> &lt;img></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09-html-表单" tabindex="-1"><a class="header-anchor" href="#_09-html-表单"><span>09.HTML 表单</span></a></h2>
<p><strong>大致结构</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;form action="" method="post"></span>
<span class="line">Username: &lt;input type="text" name="user">&lt;br></span>
<span class="line">Password: &lt;input type="password" name="password"></span>
<span class="line">&lt;input type="submit" value="提交"></span>
<span class="line">&lt;/form></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>属性</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">action 属性定义了表单数据提交的目标 URL</span>
<span class="line">method 属性定义了提交数据的 HTTP 方法 (默认get)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-html-框架" tabindex="-1"><a class="header-anchor" href="#_10-html-框架"><span>10.HTML 框架</span></a></h2>
<p>可以在同一个浏览器窗口中<strong>显示不止一个页面</strong></p>
<p><strong>语法</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;iframe src="URL">&lt;/iframe></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="html5" tabindex="-1"><a class="header-anchor" href="#html5"><span>HTML5</span></a></h1>
<p>HTML5 是 HTML 最新的修订版本，2014 年 10 月由万维网联盟（<strong>W3C</strong>）完成标准制定。</p>
<p>HTML5 的设计目的是为了在<strong>移动设备上支持多媒体</strong>。</p>
<h2 id="_11-html5-图形绘制" tabindex="-1"><a class="header-anchor" href="#_11-html5-图形绘制"><span>11.HTML5 图形绘制</span></a></h2>
<p>Canvas 用于图形的绘制，通过脚本 (通常是 JavaScript)来完成</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SVG 是一种使用 XML 描述 2D 图形的语言。</span>
<span class="line"></span>
<span class="line">Canvas 通过 JavaScript 来绘制 2D 图形</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-html5-语义元素" tabindex="-1"><a class="header-anchor" href="#_12-html5-语义元素"><span>12.HTML5 语义元素</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;header></span>
<span class="line">&lt;nav></span>
<span class="line">&lt;section></span>
<span class="line">&lt;article></span>
<span class="line">&lt;aside></span>
<span class="line">&lt;footer></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/html-12.png" alt="图片"></p>
</div></template>


