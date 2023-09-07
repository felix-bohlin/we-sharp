// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: false },
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
    'open-props/gradients.min.css',
    '~/styles/reset.css',
    '~/styles/global.css',
    '~/styles/default-theme.css',
  ],
  app: {
    head: {
      title: 'WeSharp Fitness',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'md:h-auto bg-main text-primary',
      },
    },
  },
  experimental: {
    viewTransition: true,
  },
})
