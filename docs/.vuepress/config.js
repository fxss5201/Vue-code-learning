const { searchPlugin } = require('@vuepress/plugin-search')
const { defineUserConfig } = require('vuepress')
const { localTheme } = require('./theme')
const { copyCodePlugin } = require('vuepress-plugin-copy-code2')
const { commentPlugin } = require('vuepress-plugin-comment2')
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance")

module.exports = defineUserConfig({
  base: '/Vue-code-learning/',
  lang: 'zh_CN',
  title: 'Vue源码学习',
  description: 'Vue源码学习，及自我总结',
  markdown: {
  },
  theme: localTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md'
          ],
        },
      ]
    },
    docsRepo: 'https://github.com/fxss5201/Vue-code-learning',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
    copyCodePlugin({
      locales: {
        '/': {
          copy: '复制代码成功',
          hint: '复制代码'
        }
      }
    }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'fxss5201/Vue-code-learning-comment',
      repoId: 'R_kgDOHvAYkQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHvAYkc4CQf0c',
      mapping: 'pathname'
    }),
    mdEnhancePlugin({
      container: true,
      tabs: true,
      codetabs: true,
      tasklist: true
    })
  ]
})