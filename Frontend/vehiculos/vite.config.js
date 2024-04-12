import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/vehiculos': {
      target: 'https://localhost:4000',
      changeOrigin: true,
      secure: false,
      ws: true,
    }
  }
})
