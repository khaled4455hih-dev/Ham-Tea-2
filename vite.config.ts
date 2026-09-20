import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
 
export default defineConfig({
  base: '/Ham-Tea-2/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // يعرّف @ بحيث يشير إلى مجلد src
      // بدونه لا يستطيع فيت حل الاستيرادات مثل @/imports/logo-transparent.png
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
 
