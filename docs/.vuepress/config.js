import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "前端笔记",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "首页", link: "/" },
      { text: "其他", link: "/test/" },
    ],
    sidebar: [
      {
        text: "开始",
        link: "/"
      },
      {
        text: "第一阶段",
        link: "/one/README.md"
      },
      {
        text: "HTML",
        link: "/one/myhtml/README.md"
      },
      {
        text: "CSS",
        link: "/one/mycss/README.md"
      },
      {
        text: "JavaScript",
        link: "/one/myjs/README.md"
      },
      {
        text: "第二阶段",
        link: "/two/README.md",
      },
      {
        text: "CSS预处理",
        link: "/two/myless/README.md",
      },
    ],
  }),
});
