export default {
  target: 'static',
  ssr: false,
  modern: process.env.NODE_ENV === 'development' ? false : 'client',

  head: {
    title: 'map2img',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/css/main'],

  plugins: ['~plugins/validate'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  modules: ['@nuxt/http'],

  build: {},

  fontawesome: {
    icons: {
      solid: [
        'faMapSigns',
        'faImage',
        'faRocket',
        'faCreditCard',
        'faBirthdayCake',
        'faPalette',
      ],
      brands: ['faTwitter', 'faGithub'],
    },
  },

  publicRuntimeConfig: {
    mapboxKey: process.env.mapboxKey,
    googleMapsKey: process.env.googleMapsKey,
  },
}
