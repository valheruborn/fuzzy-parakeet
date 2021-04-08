export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'perBlog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Router config
  router: {
    base: '/fuzzy-parakeet/',
    trailingSlash: true,
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // To generate routes for SPA
  generate: {
    dir: 'docs',
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('articles', { deep: true }).only(['slug']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.slug)
    },
    fallback: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // Content Module
  content: {
    liveEdit: false,
    markdown: {

      remarkPlugins: [
        ['remark-emoji']
      ],
      prism: {
        theme: 'prismjs/themes/prism-tomorrow.css'
      }
    }
  },

}
