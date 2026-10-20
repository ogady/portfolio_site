import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ogady.github.io',
  base: '/portfolio_site',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
})
