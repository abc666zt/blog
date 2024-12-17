import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/myjs/index.html.vue"
const data = JSON.parse("{\"path\":\"/myjs/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"js\",\"slug\":\"js\",\"link\":\"#js\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"myjs/README.md\"}")
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
