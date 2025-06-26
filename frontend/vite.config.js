import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({include: "**/*.jsx",}),
    tailwindcss(),
    svgr(),
  ],
  server: {
    host: true,
    port: 8080,
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
