import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/proyek2-smartstore.github.io/",
  plugins: [react()],
})
