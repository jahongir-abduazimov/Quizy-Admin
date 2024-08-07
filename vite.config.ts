import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@interface', replacement: '/src/interface/index.ts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@service', replacement: '/src/service/index.ts' },
      { find: '@notification', replacement: '/src/utils/notification.ts' },
      { find: '@data-service', replacement: '/src/utils/data-service.ts' },
    ]
  }
})
