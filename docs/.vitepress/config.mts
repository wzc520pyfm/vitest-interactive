import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitest Interactive",
  description: "Introduction to interactive vitest api, based on vitest ui",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link:'/introduction', target: '_blank' },
      { 
        text: 'Link',
        items: [
          { text: 'Vitest', link: 'https://vitest.dev/', target: '_blank' },
          { text: 'API', link: 'https://vitest.dev/api/', target: '_blank' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wzc520pyfm/vitest-interactive' }
    ]
  }
})
