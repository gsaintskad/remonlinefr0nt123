import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1','60cc-83-25-239-178.ngrok-free.app','5458-83-25-239-178.ngrok-free.app'],
  }
})
//