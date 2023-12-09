import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitest Interactive",
  description: "Introduction to interactive vitest api, based on vitest ui",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link:'/introduction' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wzc520pyfm/vitest-interactive' }
    ]
  }
})
