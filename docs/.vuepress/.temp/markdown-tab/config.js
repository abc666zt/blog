import { CodeTabs } from "D:/AAATool/静态博客/myblog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_23nmnq7xmyuzlwjze6ahdmx6ki/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/AAATool/静态博客/myblog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_23nmnq7xmyuzlwjze6ahdmx6ki/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/AAATool/静态博客/myblog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_23nmnq7xmyuzlwjze6ahdmx6ki/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
