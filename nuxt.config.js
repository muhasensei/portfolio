export default {

  target: 'static',

  head: {
    title: 'Разработка веб-приложении',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Resume of a fullstack web-developer, javascript, web development in Kazakhstan. Фрилансер, веб-разрабочик из Казахстана, разработка сайтов.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' , crossorigin: true},
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Literata&family=Press+Start+2P&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '@/plugins/element-ui'
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
    transpile: [/^element-ui/],
  }
}
