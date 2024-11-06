// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    finchApiBaseUrl: process.env.FINCH_API_BASE_URL,
    finchApiVersion: process.env.FINCH_API_VERSION
  },
  sourcemap: {
    server: true,
    client: true
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
        db: process.env.REDIS_DB
      }
    }
  }
})