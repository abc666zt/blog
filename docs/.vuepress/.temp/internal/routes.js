export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"gello"} }],
  ["/test/", { loader: () => import(/* webpackChunkName: "test_index.html" */"D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/test/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
