import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/test/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"hello testtest\",\"slug\":\"hello-testtest\",\"link\":\"#hello-testtest\",\"children\":[]},{\"level\":3,\"title\":\"h\",\"slug\":\"h\",\"link\":\"#h\",\"children\":[]}],\"git\":{\"updatedTime\":1734009863000,\"contributors\":[{\"name\":\"wkdzhangting\",\"username\":\"wkdzhangting\",\"email\":\"11590395+wkdzhangting@user.noreply.gitee.com\",\"commits\":1,\"url\":\"https://github.com/wkdzhangting\"}]},\"filePathRelative\":\"test/README.md\"}")
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
