import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/myless/index.html.vue"
const data = JSON.parse("{\"path\":\"/two/myless/\",\"title\":\"Less\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"变量\",\"slug\":\"变量\",\"link\":\"#变量\",\"children\":[]},{\"level\":2,\"title\":\"嵌套\",\"slug\":\"嵌套\",\"link\":\"#嵌套\",\"children\":[]},{\"level\":2,\"title\":\"混合\",\"slug\":\"混合\",\"link\":\"#混合\",\"children\":[]},{\"level\":2,\"title\":\"引入\",\"slug\":\"引入\",\"link\":\"#引入\",\"children\":[]}],\"git\":{\"updatedTime\":1734522976000},\"filePathRelative\":\"two/myless/README.md\"}")
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
