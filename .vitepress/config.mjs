import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";
// import markdownItAnchor from "markdown-it-anchor";
// import MarkdownIt from "markdown-it";
// import { tocPlugin } from "@mdit-vue/plugin-toc";

// 目前有两个问题没搞懂，一个是配置了srcDir以后，我的style.css样式不生效了。第二个是markdown扩展插件到底怎么用的啊

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base:'/haidocs/',
  // srcDir: "./docs", // 配置md文档的映射目录，默认根路径
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "小海的文档网站",
  description: "A bugDesigner Site",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    // outline: "deep",
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.svg", // 配置logo位置，public目录
    // 顶部导航栏配置
    nav: [
      {
        text: "前端",
        items: [{ text: "React", link: "/docs/front-end/react" }],
      },
      {
        text: "后端",
        items: [
          {
            text: "SpringBoot集成各种技术",
            link: "/docs/back-end/integrate-tech",
          },
          { text: "用户中心", link: "/docs/back-end/用户中心" },
          { text: "Redis实战", link: "/docs/back-end/Redis实战篇" },
          { text: "RabbitMQ", link: "/docs/back-end/rabbitmq" },
          { text: "ElasticSearch", link: "/docs/back-end/elasticsearch" },
        ],
      },
      {
        text: "数据库",
        items: [{ text: "数据库知识碎片", link: "/docs/data-base/数据库" }],
      },
      {
        text: "Python",
        items: [
          { text: "基础语法", link: "/docs/python/base" },
          { text: "爬虫", link: "/docs/python/spider" },
        ],
      },
      {
        text: "网安",
        items: [
          { text: "信息收集", link: "/docs/net-sec/info-collect" },
          { text: "web攻防", link: "/docs/net-sec/web-aad" },
          { text: "内网渗透", link: "/docs/net-sec/intranet-pene" },
          { text: "漏洞复现", link: "/docs/net-sec/vul-reproduce" },
        ],
      },
      // {
      //   text: "数学建模",
      //   items: [
      //     { text: "数据分析三剑客", link: "/docs/math-model/data-ana" },
      //     { text: "评价类模型", link: "/docs/math-model/eval" },
      //     { text: "预测类模型", link: "/docs/math-model/forecast" },
      //     { text: "优化类模型", link: "/docs/math-model/optimize" },
      //     { text: "分类模型", link: "/docs/math-model/classify" },
      //   ],
      // },
      {
        text: "爬虫案例",
        items: [
          { text: "B站刷播放量接口", link: "/docs/spiders/Bilibili" },
          { text: "某练通爬取", link: "/docs/spiders/dlt" },
          { text: "中考移民问题", link: "/docs/spiders/middle_exam" },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "Electron+Vue3项目打包", link: "/docs/Tutorial/electron_package" },
          { text: "VitePress搭建和部署", link: "/docs/Tutorial/vitepress" }
        ],
      },
      {
        text: "其他",
        items: [
          { text: "Git", link: "/docs/tools/git" },
          { text: "Docker", link: "/docs/tools/docker" },
          { text: "iTime软件使用说明书", link: "/docs/tools/iTime_docs" },
          { text: "常用图标", link: "/docs/tools/icons" },
          { text: "每日计划", link: "/docs/tools/plan" },
          { text: "每日复盘", link: "/docs/tools/review" },
        ],
      },
    ],
    // 侧边栏配置，这个函数自动生成侧边栏
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    navbar: true, //开启导航栏，我设置成false也没啥用不知道为啥
    sidebar: false, // 关闭侧边栏
    lastUpdated: true, // 显示上次修改时间
    aside: "left", // 设置右侧侧边栏在左侧显示
    // 社交链接，内置的都是国外的，国内只能通过svg设置
    socialLinks: [
      // { icon: "github", link: "https://github.com/AZCodingAccount" },
      // {
      //   icon: {
      //     svg: '<svg t="1704636138195" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4340" width="200" height="200"><path d="M1024 499.2c0-209.066667-230.4-375.466667-512-375.466667S0 290.133333 0 499.2c0 204.8 230.4 375.466667 512 375.466667s512-170.666667 512-375.466667z m-371.2-136.533333c0 4.266667-8.533333 4.266667-8.533333 4.266666-4.266667-4.266667-8.533333-8.533333-4.266667-17.066666l12.8 12.8z m93.866667 38.4h-21.333334v-12.8l-4.266666-4.266667v-4.266667l-4.266667-4.266666-4.266667-4.266667h-4.266666v-4.266667h-8.533334v-4.266666h-12.8l-4.266666-4.266667h-21.333334l-4.266666 4.266667h-4.266667l-12.8-12.8 4.266667-4.266667h4.266666v-4.266667h46.933334l4.266666 4.266667h8.533334l4.266666 4.266667h4.266667l4.266667 8.533333v4.266667h4.266666l4.266667 4.266666 8.533333 4.266667v4.266667l4.266667 4.266666v8.533334l4.266667 4.266666v8.533334z m0 0c0 4.266667-4.266667 8.533333-8.533334 8.533333-8.533333 0-12.8-4.266667-12.8-8.533333h21.333334z m-89.6-4.266667c-4.266667 4.266667-8.533333 0-8.533334-4.266667-4.266667 0 0-8.533333 4.266667-8.533333l4.266667 12.8z m55.466666 17.066667h-17.066666v-4.266667h-4.266667v-8.533333h-8.533333v-4.266667h-25.6l-4.266667-12.8h4.266667v-4.266667h25.6v4.266667h8.533333l4.266667 4.266667h4.266666v4.266666h4.266667v4.266667l4.266667 4.266667v4.266666l4.266666 4.266667v4.266667z m0 0c0 8.533333-4.266667 12.8-8.533333 12.8s-8.533333-4.266667-8.533333-12.8h17.066666z m59.733334 106.666666c0 12.8 4.266667 25.6 8.533333 34.133334 8.533333 4.266667 21.333333 8.533333 29.866667 8.533333 12.8 0 25.6-4.266667 34.133333-17.066667 4.266667-25.6 8.533333-55.466667 21.333333-106.666666-29.866667 0-51.2 8.533333-72.533333 25.6-12.8 17.066667-21.333333 34.133333-21.333333 55.466666z m98.133333 140.8c-12.8 17.066667-25.6 29.866667-42.666667 38.4s-38.4 12.8-55.466666 12.8-34.133333-4.266667-46.933334-12.8c-12.8-4.266667-17.066667-12.8-17.066666-29.866666 0-12.8 4.266667-25.6 12.8-38.4 17.066667 17.066667 29.866667 25.6 51.2 25.6 12.8 0 29.866667-8.533333 42.666666-17.066667 12.8-12.8 21.333333-29.866667 25.6-55.466667l-4.266666-4.266666c-17.066667 29.866667-42.666667 42.666667-68.266667 42.666666-17.066667 0-38.4-8.533333-46.933333-29.866666-12.8-12.8-17.066667-34.133333-17.066667-64 0-21.333333 4.266667-42.666667 17.066667-68.266667 21.333333-21.333333 42.666667-38.4 68.266666-51.2 17.066667-4.266667 34.133333-8.533333 46.933334-8.533333s21.333333 4.266667 38.4 4.266666v21.333334c12.8-12.8 21.333333-17.066667 34.133333-17.066667s25.6 12.8 25.6 29.866667v55.466666c-4.266667 17.066667-12.8 34.133333-17.066667 59.733334-4.266667 17.066667-8.533333 38.4-17.066666 59.733333-8.533333 17.066667-17.066667 29.866667-29.866667 46.933333z m-230.4-230.4c12.8 0 25.6 8.533333 38.4 17.066667 8.533333 12.8 12.8 25.6 12.8 51.2 0 17.066667-4.266667 34.133333-8.533333 55.466667-8.533333 17.066667-21.333333 29.866667-34.133334 42.666666-8.533333 12.8-21.333333 21.333333-38.4 29.866667-17.066667 4.266667-29.866667 8.533333-46.933333 8.533333-34.133333 0-55.466667-8.533333-72.533333-25.6-21.333333-21.333333-29.866667-42.666667-29.866667-76.8s8.533333-68.266667 38.4-93.866666c21.333333-25.6 55.466667-38.4 93.866667-38.4 8.533333 0 21.333333 4.266667 29.866666 4.266666 0 8.533333 4.266667 21.333333 4.266667 29.866667 4.266667 0 8.533333-4.266667 12.8-4.266667z m-46.933333 55.466667c0-12.8 4.266667-21.333333 4.266666-25.6 4.266667-8.533333 12.8-17.066667 21.333334-21.333333-34.133333 8.533333-55.466667 17.066667-68.266667 42.666666-12.8 12.8-17.066667 29.866667-17.066667 46.933334 0 21.333333 4.266667 34.133333 12.8 42.666666 8.533333 12.8 17.066667 17.066667 25.6 17.066667 25.6 0 46.933333-17.066667 55.466667-51.2-25.6-12.8-34.133333-29.866667-34.133333-51.2zM396.8 396.8l-17.066667-29.866667c29.866667-21.333333 55.466667-29.866667 72.533334-29.866666 8.533333 0 12.8 4.266667 17.066666 8.533333 4.266667 0 12.8 12.8 12.8 25.6 0 8.533333-8.533333 38.4-21.333333 89.6-8.533333 55.466667-12.8 93.866667-12.8 110.933333 0 21.333333 0 38.4 8.533333 46.933334-17.066667 8.533333-29.866667 17.066667-46.933333 17.066666-12.8 0-21.333333-4.266667-29.866667-12.8-4.266667-8.533333-8.533333-25.6-8.533333-42.666666 0-12.8 4.266667-46.933333 12.8-93.866667 8.533333-51.2 12.8-85.333333 12.8-89.6z m-230.4 238.933333c-17.066667 0-29.866667-4.266667-34.133333-12.8-8.533333-8.533333-12.8-25.6-12.8-42.666666s8.533333-72.533333 21.333333-153.6l-17.066667-42.666667c25.6-17.066667 55.466667-25.6 76.8-25.6 12.8 0 21.333333 8.533333 29.866667 21.333333 21.333333-12.8 46.933333-21.333333 72.533333-21.333333 12.8 0 25.6 4.266667 38.4 12.8 17.066667 8.533333 25.6 21.333333 25.6 38.4 0 38.4-21.333333 64-59.733333 81.066667 38.4 8.533333 59.733333 25.6 59.733333 64 0 25.6-8.533333 42.666667-34.133333 59.733333-17.066667 12.8-38.4 21.333333-64 21.333333s-46.933333-4.266667-59.733333-17.066666c-12.8 12.8-29.866667 17.066667-42.666667 17.066666z m110.933333-85.333333c0-17.066667 0-25.6-8.533333-29.866667-4.266667-4.266667-12.8-8.533333-25.6-8.533333-8.533333 0-25.6 4.266667-38.4 8.533333-4.266667 17.066667-4.266667 38.4-4.266667 55.466667 8.533333 4.266667 21.333333 4.266667 38.4 4.266667 12.8 0 21.333333 0 29.866667-8.533334 8.533333-4.266667 8.533333-12.8 8.533333-21.333333z m-21.333333-145.066667c-8.533333 0-17.066667 0-34.133333 4.266667 0 12.8-4.266667 38.4-12.8 76.8 25.6 0 42.666667-8.533333 55.466666-17.066667s17.066667-21.333333 17.066667-34.133333c0-21.333333-8.533333-29.866667-25.6-29.866667z" p-id="4341" fill="#1296db"></path><path d="M183.466667 776.533333l-81.066667 123.733334 285.866667-46.933334z" p-id="4342" fill="#1296db"></path></svg>',
      //   },
      //   link: "https://blog.bugdesigner.cn",
      // },
      // {
      //   icon: {
      //     svg: '<svg t="1704626282666" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4227" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4228"></path></svg>',
      //   },
      //   link: "https://gitee.com/Albert_han",
      // },
      // {
      //   icon: {
      //     svg: '<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>',
      //   },
      //   link: "https://space.bilibili.com/501122856",
      // },
    ],
    // 底部配置
    footer: {
      copyright: "Copyright@ 2023 Albert Zhang",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
  // 配置markdown扩展
  markdown: {
    lineNumbers: true, // 开启代码块行号
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    // anchor: {
    //   permalink: markdownItAnchor.permalink.headerLink(),
    // },

    // // options for @mdit-vue/plugin-toc
    // // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    // toc: { level: [2, 3] },
    // config: (md) => {
    //   // use more markdown-it plugins!
    //   md.use(tocPlugin);
    // },
  },
});
