import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({include: "**/*.jsx",}),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://172.25.112.1:8080',
        changeOrigin: true,
        secure: false,
      },
    },
    watch: {
      usePolling: true
    }
  }
})
