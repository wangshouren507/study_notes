import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/study_notes/',
  title: "浩然随风",
  // titleTemplate: "长乐未央",
  description: "心之所往，行之所至",
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: '长乐未央',
    outline: {
      label: '页面导航',
    },
    nav: [
      { text: '前端', link: '/frontend/' },
      { text: '博客', link: '/markdown-examples' }
    ],
    sidebar: {
      '/frontend/': [
        {
          text: 'HTML',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'CSS',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'JavaScript',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'TypeScript',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'React',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'Node',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '小程序',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '浏览器',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '工具',
          collapsed: true,
          items: [
            { text: 'git', link: '/frontend//tools/git' },
            { text: 'markdown', link: '/frontend//tools/markdown' },
            { text: 'vscode', link: '/frontend//tools/vscode' },
          ]
        },
        {
          text: '性能优化',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '网络',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '工程化',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '数据结构与算法',
          collapsed: true,
          items: [
          ]
        },
        {
          text: '解决方案',
          collapsed: true,
          items: [
          ]
        },

      ],
      '/blog/': [
        {
          text: '前端学习笔记',
          items: [

          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangshouren507/study_notes' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present 长乐未央'
    },
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/wangshouren507/study_notes/edit/master/src/:path',
      text: '在github上进行编辑'
    },
  },
  markdown: {
    lineNumbers: true, // 显示代码块行号
  },
})
