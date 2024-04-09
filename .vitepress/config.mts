import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wikifilm",
  description: "a wiki for film photography",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Cameras', link: '/cameras' },
          { text: 'Film', link: '/film' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ech0devv/wikifilm' }
    ]
  }
})
