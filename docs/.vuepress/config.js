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
        text: "第一阶段",
        link: "/"
      },
      {
        text: "HTML",
        link: "/myhtml/README.md"
      },
      {
        text: "test",
        link: "/test/README.md",
      },
    ],
  }),
});
