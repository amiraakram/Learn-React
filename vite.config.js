import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // ensures file changes are detected immediately, useful on Windows
    },
    hmr: true  // ensures hot module replacement is active
  }
})