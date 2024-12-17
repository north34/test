import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/test/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/assets/css/base.scss' as *;
          @use '@/assets/css/features.scss' as *;
        `,
      },
    },
  },
})
