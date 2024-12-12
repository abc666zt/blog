import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "前端笔记",
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      { text: "首页", link: "/" },
      { text: "其他", link: "/test/" },
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/',
        children: [
          {
            text: 'github',
            link: 'https://github.com',
          },
          // 字符串 - 页面文件路径
        ],
      },
      {
        text: 'test',
        link: '/test/README.md',
      }
      ,
    ],
  }),
});
