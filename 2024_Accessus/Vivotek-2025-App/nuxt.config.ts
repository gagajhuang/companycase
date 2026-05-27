// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  compatibilityDate: '2025-01-07',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'VIVOTEK Brand Boost 2025',
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'VIVOTEK Brand Boost 2025' },
        { name: 'keywords', content: 'VIVOTEK ,BrandBoost, 晶睿通訊, 晶睿' },
        { hid: 'og:title', property: 'og:title', content: 'VIVOTEK Brand Boost 2025' },
        { hid: 'og:description', name: 'og:description', content: 'VIVOTEK Brand Boost 2025' },
        { name: 'format-detection', content: 'telephone=no' },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: '@/static/image/pc/main/shareImg.png',
        // },
      ],
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // ]
    },
  },
  runtimeConfig: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
    // public: {
    //   API_TOKEN: process.env.API_TOKEN,
    // },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          charset: false,
          additionalData: `
          @use "@/assets/css/main" as *;
          `,
        },
      },
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@vesp/nuxt-fontawesome'
  ],

  // pinia: {
  //   autoImports: ['defineStore'], // 自动引入 Pinia 的 `defineStore`
  // },

  googleFonts: {
    families: {
      'Noto Sans TC': {
        wght: '200..900',
        ital: '200..700',
      },

      'Mulish': {
        wght: '200..900',
        ital: '200..700',
      },
      'Noto Serif SC': true,
    }
  },
  i18n: {
    strategy: 'prefix',
    langDir: resolve('./locales'),
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh',
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root'
    // }
  },
  fontawesome: {
    component: 'fa',
    suffix: false,
    icons: {
      solid: ['angles-down','up-right-from-square'],
      regular: ['user']
    }
  }

})