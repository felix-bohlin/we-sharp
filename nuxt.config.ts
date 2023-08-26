// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  vue: {
    defineModel: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/reset.css',
    '~/styles/global.css',
    '~/styles/default-theme.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      bodyAttrs: {
        class: 'md:h-auto bg-main text-main',
      },
    },
  },
  experimental: {
    viewTransition: true,
  },
})
