import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "d3-array",
      "d3-hierarchy",
      "d3-scale",
      "d3-shape",
      "d3-format",
      "d3-time-format",
      "d3-color"
    ]
  }
})
