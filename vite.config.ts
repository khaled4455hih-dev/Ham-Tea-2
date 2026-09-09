import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Ham-Tea-2/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
