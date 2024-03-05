// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NODE_ENV === 'development' ? "https://devapi.eyedoctor.com.tw" : "https://api.eyedoctor.com.tw"
    }
  },
  modules: ['nuxt-swiper', 'nuxt3-leaflet', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@vee-validate/nuxt'],
  // pinia: {
  //   storesDirs: ['./stores/**'],
  // },
  css: ['@/assets/css/public.css'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/assets/css/global.scss";'
  //       }
  //     }
  //   }
  // }
})