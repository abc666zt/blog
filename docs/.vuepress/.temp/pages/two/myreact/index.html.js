import comp from "D:/AAATool/静态博客/myblog/docs/.vuepress/.temp/pages/two/myreact/index.html.vue"
const data = JSON.parse("{\"path\":\"/two/myreact/\",\"title\":\"React\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1734522976000},\"filePathRelative\":\"two/myreact/README.md\"}")
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
