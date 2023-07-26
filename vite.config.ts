import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      configs: '/src/configs',
      api: '/src/api',
      components: '/src/components',
      hooks: '/src/hooks',
      models: '/src/models',
    },
  },
});
