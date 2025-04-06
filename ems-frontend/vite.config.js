import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //20250405 Adding custom port to listen for front-end app
  server: {
    port: 3000
  }
})
