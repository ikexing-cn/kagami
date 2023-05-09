// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@anu-vue/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/devtools',
  ],
  vite: {
    build: {
      target: 'esnext',
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
