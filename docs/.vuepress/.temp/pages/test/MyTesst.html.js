import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/test/MyTesst.html.vue"
const data = JSON.parse("{\"path\":\"/test/MyTesst.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"hello\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"test/MyTesst.md\"}")
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
