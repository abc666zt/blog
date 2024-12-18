<template><div><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h1>
<p>CSS 指层叠样式表 (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets)，样式定义<strong>如何显示</strong> HTML 元素</p>
<h2 id="_01-css-基础" tabindex="-1"><a class="header-anchor" href="#_01-css-基础"><span>01.CSS 基础</span></a></h2>
<p><strong>1、语法</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span>    <span class="token punctuation">{</span> <span class="token property">color</span> <span class="token punctuation">:</span> red <span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line">选择器    属性     值</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、注释</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/*  */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>3、id 和 class 选择器</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">id      #id</span>
<span class="line">class  .class</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、插入样式表的方法</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">               优先级</span>
<span class="line">1.外部样式表       3</span>
<span class="line">2.内部样式表       2</span>
<span class="line">3.内联样式         1(优先级最高)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5、选择器（高优先级-&gt;低优先级）</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">!important</span>
<span class="line">内联样式</span>
<span class="line">id</span>
<span class="line">class</span>
<span class="line">元素选择器</span>
<span class="line">*</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型"><span>盒子模型</span></a></h3>
<p><code v-pre>标准盒子</code> <code v-pre>怪异盒子</code></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">  box-sizing<span class="token punctuation">:</span> content-box</span>
<span class="line">   <span class="token comment">/**是标准盒子模型   宽高为content*/</span></span>
<span class="line">  box-sizing<span class="token punctuation">:</span> border-box</span>
<span class="line">   <span class="token comment">/*是怪异盒子模型    宽高为border+padding+content*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-css-布局" tabindex="-1"><a class="header-anchor" href="#_02-css-布局"><span>02.CSS 布局</span></a></h2>
<h3 id="_1-定位-position" tabindex="-1"><a class="header-anchor" href="#_1-定位-position"><span>1.定位 position</span></a></h3>
<ul>
<li>
<p><code v-pre>static </code> 默认定位 ， 遵循正常的文档流布局规则</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">不承认 top、bottom、left、right 或 z-index 属性，这意味着这些属性不会对该元素产生任何效果</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>relative</code> 相对定位 ， 相对自身偏移 <strong>仍然占据原来的空间</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">可以使用 top、bottom、left、right 来定义元素偏移量，并且支持 z-index 来控制堆叠顺序</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>fixed</code> 相对<strong>浏览器窗口</strong>定位<strong>固定</strong></p>
</li>
<li>
<p><code v-pre>absolute</code> 绝对定位 ， 根据祖先定位 ， 脱离文档流</p>
</li>
<li>
<p><code v-pre>sticky</code> 介于 <code v-pre>relative</code> 和 <code v-pre>fixed</code> 之间</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">当页面滚动到一定位置时，sticky 元素会“粘”在指定的位置（如顶部），类似于 fixed，但在达到其父容器边界之前它是 relative 的</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-浮动-float" tabindex="-1"><a class="header-anchor" href="#_2-浮动-float"><span>2.浮动 float</span></a></h3>
<p>会使元素向左或向右移动，其周围的元素也会重新排列</p>
<p>清楚浮动方法</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-flex-布局" tabindex="-1"><a class="header-anchor" href="#_2-flex-布局"><span>2.flex 布局</span></a></h3>
<p>弹性盒子布局</p>
<p><strong>使用方法</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>常用属性</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">flex-direction  设置主轴方向</span>
<span class="line">flex-wrap 元素是否可以换行，默认不换行</span>
<span class="line">justify-content  主轴的对齐方式</span>
<span class="line">align-items  交叉轴上的对齐方式</span>
<span class="line">flex 设置比例</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-css-响应式设计" tabindex="-1"><a class="header-anchor" href="#_03-css-响应式设计"><span>03.CSS 响应式设计</span></a></h2>
<h3 id="_1-百分比布局" tabindex="-1"><a class="header-anchor" href="#_1-百分比布局"><span>1.百分比布局</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">计算困难，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-媒体查询" tabindex="-1"><a class="header-anchor" href="#_2-媒体查询"><span>2.媒体查询</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-rem" tabindex="-1"><a class="header-anchor" href="#_3-rem"><span>3.rem</span></a></h3>
<ul>
<li>rem 是相对于 html 根元素的字体大小的单位。</li>
<li>我们通过修改 html 中 font-size 的字体大小来控制 rem 的大小</li>
</ul>
<p><code v-pre>flexible.js</code> 适配不同的浏览器，实现等比例的缩放</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">px: 像素的基本单位</span>
<span class="line">rem: 相对html的字体单位一般16px</span>
<span class="line">em: 相对父盒子的字体单位</span>
<span class="line">vw wh: 相对视口（viewport）的1/100</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-vw、vh" tabindex="-1"><a class="header-anchor" href="#_4-vw、vh"><span>4.vw、vh</span></a></h3>
<h3 id="_5-flex-布局" tabindex="-1"><a class="header-anchor" href="#_5-flex-布局"><span>5.flex 布局</span></a></h3>
<h2 id="_04-动画" tabindex="-1"><a class="header-anchor" href="#_04-动画"><span>04.动画</span></a></h2>
<p><strong>过渡</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/*  宽度变化过程中的过渡效果  */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transition</span><span class="token punctuation">:</span> width 1s linear<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>动画</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> myfirst</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">from</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">to</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/*  使用  */</span></span>
<span class="line"><span class="token property">animation</span><span class="token punctuation">:</span> myfirst 5s<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-实战" tabindex="-1"><a class="header-anchor" href="#_05-实战"><span>05.实战</span></a></h2>
</div></template>


