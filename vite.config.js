import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        motivation: resolve(__dirname, 'articles/motivation.html'),
        ao_vs_general: resolve(__dirname, 'articles/ao-vs-general.html'),
        coaching_vs_cram: resolve(__dirname, 'articles/coaching-vs-cram.html'),
        self_analysis: resolve(__dirname, 'articles/self-analysis.html'),
        interview: resolve(__dirname, 'articles/interview.html'),
        essay: resolve(__dirname, 'articles/essay.html'),
        balancing: resolve(__dirname, 'articles/balancing.html'),
        mental_health: resolve(__dirname, 'articles/mental-health.html'),
        sfc_ao_guide: resolve(__dirname, 'articles/sfc-ao-guide.html'),
      }
    }
  }
})
