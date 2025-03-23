// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },
  ssr: true,

  srcDir: 'src/',
  appDir: 'src/app',
  serverDir: 'src/app/server',
  dir: {
    pages: 'pages',
    assets: 'app/assets',
    public: 'app/public',
    static: 'app/static',
    plugins: 'shared/plugins',
    middleware: 'app/middleware',
  },

  components: {
    dirs:[ '~/shared/ui' ]
  },

  css: [ '~/app/assets/scss/main.scss' ],
  
  modules: [ '@pinia/nuxt' ],
});