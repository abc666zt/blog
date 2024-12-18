import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/index.html.vue"
const data = JSON.parse("{\"path\":\"/two/\",\"title\":\"第二阶段\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"计算机网络\",\"slug\":\"计算机网络\",\"link\":\"#计算机网络\",\"children\":[]},{\"level\":2,\"title\":\"操作系统\",\"slug\":\"操作系统\",\"link\":\"#操作系统\",\"children\":[]},{\"level\":2,\"title\":\"CSS\",\"slug\":\"css\",\"link\":\"#css\",\"children\":[{\"level\":3,\"title\":\"预处理\",\"slug\":\"预处理\",\"link\":\"#预处理\",\"children\":[]},{\"level\":3,\"title\":\"框架\",\"slug\":\"框架\",\"link\":\"#框架\",\"children\":[]}]},{\"level\":2,\"title\":\"JS 框架\",\"slug\":\"js-框架\",\"link\":\"#js-框架\",\"children\":[{\"level\":3,\"title\":\"Vue\",\"slug\":\"vue\",\"link\":\"#vue\",\"children\":[]},{\"level\":3,\"title\":\"React\",\"slug\":\"react\",\"link\":\"#react\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"two/README.md\"}")
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
