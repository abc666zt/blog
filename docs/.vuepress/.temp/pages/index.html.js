import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"gello\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1734003637000,\"contributors\":[{\"name\":\"wkdzhangting\",\"username\":\"wkdzhangting\",\"email\":\"11590395+wkdzhangting@user.noreply.gitee.com\",\"commits\":1,\"url\":\"https://github.com/wkdzhangting\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
