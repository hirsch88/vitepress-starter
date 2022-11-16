export default {
  outDir: "dist",
  title: "VitePress",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "My Custom Title",
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Team", link: "/team" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },

    algolia: {
      appId: "99A13X77GW",
      apiKey: "d5cac2eaa61fdf764051168ccce0b071",
      indexName: "bubu",
    },
  },
};
