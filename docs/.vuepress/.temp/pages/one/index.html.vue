<template><div><h1 id="第一阶段" tabindex="-1"><a class="header-anchor" href="#第一阶段"><span>第一阶段</span></a></h1>
<p><strong>推荐学习路线</strong> <a href="https://objtube.github.io/front-end-roadmap/#/" target="_blank" rel="noopener noreferrer">B 站 objtube 的卢克儿前端学习路线</a></p>
<p><img src="@source/images/first-0.png" alt="图片"></p>
<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h2>
<p><code v-pre>菜鸟教程</code> HTML 篇认真做笔记+练习走下来，HTML5 看看就行</p>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h2>
<p>css 更看重理解运用。</p>
<p>建议学习方法：</p>
<ul>
<li>
<p>1.首先跟着 <code v-pre>菜鸟教程</code> 看完理论</p>
</li>
<li>
<p>2.直接大量练习，特别经典案例</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>CSS 一定要大量练习！！！</p>
</div>
<h2 id="javescript" tabindex="-1"><a class="header-anchor" href="#javescript"><span>JaveScript</span></a></h2>
<p>打好 JS <code v-pre>基础</code> 很重要。</p>
<p>建议学习方法：</p>
<ul>
<li>
<p>根好该视频打基础 <a href="https://www.bilibili.com/video/BV1Sy4y1C7ha/?p=436&amp;share_source=copy_web&amp;vd_source=556068448e3e9981758eda02d5e5001b" target="_blank" rel="noopener noreferrer">JavaScript 前端课程-dom-bom-js-es6 新语法-jQuery-数据可视化 echarts 黑马 pink 老师前端入门基础视频教程(500 多集)持续</a></p>
</li>
<li>
<p>ES6 很重要，可以看这个视频好好学习 <a href="https://www.bilibili.com/video/BV1uK411H7on/?share_source=copy_web&amp;vd_source=556068448e3e9981758eda02d5e5001b" target="_blank" rel="noopener noreferrer">尚硅谷 Web 前端 ES6 教程，涵盖 ES6-ES11</a></p>
</li>
</ul>
<h2 id="版本管理根据-git" tabindex="-1"><a class="header-anchor" href="#版本管理根据-git"><span>版本管理根据 Git</span></a></h2>
<p><strong>1.下载 git 相关需要</strong></p>
<p>直接浏览器搜索，有很多详细教程</p>
<p><strong>2.注册 GitHub 账户</strong></p>
<p>同上，注意下 GitHub 国内有时候访问不了问题</p>
<p><strong>3.学会简单的 git 使用</strong></p>
<ul>
<li>
<p>在 GitHub 上创建项目后，下面会有一系列提示命令，跟着敲一遍体验一下</p>
</li>
<li>
<p>然后找博客学习具体用法</p>
</li>
</ul>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre v-pre><code><span class="line">// 简单的一些命令，建议初学认真学习这些，其他的了解一下或者不看都行</span>
<span class="line"></span>
<span class="line">git init</span>
<span class="line">git clone 一般为https下复制  //刚开始，一般用该命令从Git仓库拷贝项目</span>
<span class="line"></span>
<span class="line">// 写完代码想提交时，一般会用已下命令</span>
<span class="line">git add .  // 添加文件到缓存命令</span>
<span class="line">git commit -m "填写内容"  // 提交命令</span>
<span class="line"></span>
<span class="line">// 很常用的推拉代码命令</span>
<span class="line">git push</span>
<span class="line">git pull</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.搭建静态博客站点</strong></p>
<p>提供两种简单的方法：</p>
<ul>
<li>
<p><code v-pre>vuepress</code> + <code v-pre>GitHub Pages</code></p>
</li>
<li>
<p><code v-pre>vuepress</code> + <code v-pre> Netlify</code></p>
</li>
</ul>
<p><strong>vuepress 使用方法：</strong></p>
<p>1、vuepress 建议直接跟着官方文档这里开始 <a href="https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">快速上手 | VuePress</a>
2、建议用 手动创建 方式，pnpm 管理</p>
<p><strong>GitHub Pages 部署：</strong></p>
<p>1.在 GitHub 上上传你的项目</p>
<p>2.在项目界面点击 <code v-pre>Setting</code>
<img src="@source/images/one-0.png" alt="图片"></p>
<p>3.根据图下步骤，点击 1 处；填写 2 处，填好后点击 Save；等待几秒，或者直接浏览器刷新，3 处就会处理，你的博客地址就在 3 处
<img src="@source/images/one-1.png" alt="图片"></p>
<p><strong>Netlify 部署：</strong></p>
<p><a href="https://vuepress.vuejs.org/zh/guide/deployment.html#netlify" target="_blank" rel="noopener noreferrer">部署 | VuePress</a></p>
<p>乖乖跟着官网 Netlify 即可</p>
</div></template>


