<template><div><h1 id="less" tabindex="-1"><a class="header-anchor" href="#less"><span>Less</span></a></h1>
<p><strong>安装</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<p>全局安装</p>
<p>全局安装后，就是给命令行<strong>提供命令</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-g</span> xxx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>项目依赖</p>
<p>给当前项目使用的</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i -S/-D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>-S   <code v-pre>--save-dev</code> 开发和上线都需要使用的模块，不写默认为-S</li>
<li>-D   <code v-pre>--save</code> 只在开发阶段使用</li>
</ul>
</li>
</ul>
<p>以上推荐直接使用 <code v-pre>Easy LESS </code>  VSCode插件</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token variable">@widch<span class="token punctuation">:</span></span>500px<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">@width</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套"><span>嵌套</span></a></h2>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span>red</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&amp;:</p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>           <span class="token comment">// div变色</span></span>
<span class="line">       <span class="token property">color</span><span class="token punctuation">:</span>red</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合" tabindex="-1"><a class="header-anchor" href="#混合"><span>混合</span></a></h2>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token comment">// 情况一</span></span>
<span class="line"><span class="token selector">.myLess()</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span>white</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token mixin-usage function">.myLess</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 情况二</span></span>
<span class="line"><span class="token selector">.myLess(<span class="token variable">@w</span>)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">@w</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token mixin-usage function">.myLess</span><span class="token punctuation">(</span>white<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 情况三</span></span>
<span class="line"><span class="token selector">.myLess(<span class="token variable">@w</span>:white)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">@w</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token mixin-usage function">.myLess</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token variable">@import</span> <span class="token string">'./test.less'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


