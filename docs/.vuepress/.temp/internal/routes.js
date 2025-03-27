export const redirects = JSON.parse("{}");

export const routes = Object.fromEntries([
  [
    "/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/index.html.js"
        ),
      meta: { "title": "" },
    },
  ],
  [
    "/one/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "one_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/one/index.html.js"
        ),
      meta: { "title": "第一阶段" },
    },
  ],
  [
    "/two/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "two_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/index.html.js"
        ),
      meta: { "title": "第二阶段" },
    },
  ],
  [
    "/one/mycss/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "one_mycss_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/one/mycss/index.html.js"
        ),
      meta: { "title": "CSS" },
    },
  ],
  [
    "/one/myhtml/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "one_myhtml_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/one/myhtml/index.html.js"
        ),
      meta: { "title": "HTML" },
    },
  ],
  [
    "/one/myjs/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "one_myjs_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/one/myjs/index.html.js"
        ),
      meta: { "title": "ECMAScript" },
    },
  ],
  [
    "/two/myless/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "two_myless_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/myless/index.html.js"
        ),
      meta: { "title": "Less" },
    },
  ],
  [
    "/two/myreact/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "two_myreact_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/myreact/index.html.js"
        ),
      meta: { "title": "React" },
    },
  ],
  [
    "/two/myvue/",
    {
      loader: () =>
        import(
          /* webpackChunkName: "two_myvue_index.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/myvue/index.html.js"
        ),
      meta: { "title": "Vue" },
    },
  ],
  [
    "/404.html",
    {
      loader: () =>
        import(
          /* webpackChunkName: "404.html" */ "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/404.html.js"
        ),
      meta: { "title": "" },
    },
  ],
  // ["/two/myless/.~README.html", { loader: () => import(/* webpackChunkName: "two_myless_.~README.html" */"D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/myless/.~README.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes);
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes);
    __VUE_HMR_RUNTIME__.updateRedirects(redirects);
  });
}
