export const themeData = JSON.parse("{\"contributors\":false,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"其他\",\"link\":\"/test/\"}],\"sidebar\":[{\"text\":\"开始\",\"link\":\"/\"},{\"text\":\"第一阶段\",\"prefix\":\"/one/\",\"link\":\"/one/\",\"children\":[{\"text\":\"HTML\",\"link\":\"myhtml/README.md\"},{\"text\":\"CSS\",\"link\":\"mycss/README.md\"},{\"text\":\"JavaScript\",\"link\":\"myjs/README.md\"}]},{\"text\":\"第二阶段\",\"prefix\":\"/two/\",\"link\":\"/two/\",\"children\":[{\"text\":\"CSS预处理\",\"link\":\"myless/README.md\"},{\"text\":\"Vue\",\"link\":\"myvue/README.md\"},{\"text\":\"React\",\"link\":\"myreact/README.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
