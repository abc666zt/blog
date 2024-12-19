import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "前端笔记",
  bundler: viteBundler(),
  theme: defaultTheme({
    contributors:false,
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
        prefix: '/one/',
        link: '/one/',
        children:[
          {
            text: 'HTML',
            link: 'myhtml/README.md',
          },
          {
            text: "CSS",
            link: "mycss/README.md"
          },
          {
            text: "JavaScript",
            link: "myjs/README.md"
          },
        ]
      },
      {
        text: "第二阶段",
        prefix: '/two/',
        link: '/two/',
        children:[
          {
            text: "CSS预处理",
            link: "myless/README.md",
          },
          {
            text: "Vue",
            link: "myvue/README.md",
          },
          {
            text: "React",
            link: "myreact/README.md",
          },
        ]
      },
     
    ],
  }),
});
