export default {
  target: 'static',
  ssr: false,
  modern: process.env.NODE_ENV === 'development' ? false : 'client',

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'map2img',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Quickly turn an address, place or location into a static image. No coding required, free of charge.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/css/main'],

  plugins: ['~plugins/validate', '~plugins/tooltip'],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxtjs/fontawesome'],

  modules: ['@nuxt/http', 'nuxt-lazy-load'],

  build: {},

  fontawesome: {
    icons: {
      solid: ['faMapSigns', 'faImage', 'faRocket', 'faCreditCard', 'faBirthdayCake', 'faPalette'],
      brands: ['faTwitter', 'faGithub'],
      regular: ['faQuestionCircle'],
    },
  },

  publicRuntimeConfig: {
    mapboxKey: process.env.mapboxKey,
    googleMapsKey: process.env.googleMapsKey,
  },
}
