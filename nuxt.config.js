import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  router: {
    base: '/crossfox_learn/'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - crossfox_learn',
    title: 'crossfox_learn',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;700&family=Roboto+Mono&display=swap" 
      }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://188.225.74.22:5888',
      proxy: false,
      credentials: false
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  plugins: [
    {
      src: '~/plugins/highlightPlugin.js'
    },
    {
      src: '~/plugins/iconLoader.js'
    }
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  extractCSS: {
    ignoreOrder: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(scss|css|vue)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {sourceMap: false},
    },
  }
}
