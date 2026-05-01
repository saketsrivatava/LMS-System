import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server:{
  //   proxy: {
  //     '/api': 'http://localhost:3000', //same origin se aa rhi hai appended+ same origin
  //   }
  // },
  plugins: [react()],
})
