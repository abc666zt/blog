import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/one/index.html.vue"
const data = JSON.parse("{\"path\":\"/one/\",\"title\":\"第一阶段\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"HTML\",\"slug\":\"html\",\"link\":\"#html\",\"children\":[]},{\"level\":2,\"title\":\"CSS\",\"slug\":\"css\",\"link\":\"#css\",\"children\":[]},{\"level\":2,\"title\":\"JaveScript\",\"slug\":\"javescript\",\"link\":\"#javescript\",\"children\":[]},{\"level\":2,\"title\":\"版本管理根据 Git\",\"slug\":\"版本管理根据-git\",\"link\":\"#版本管理根据-git\",\"children\":[]}],\"git\":{\"updatedTime\":1734522976000},\"filePathRelative\":\"one/README.md\"}")
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
