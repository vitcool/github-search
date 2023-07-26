import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      config: '/src/config',
      api: '/src/api',
      components: '/src/components',
      hooks: '/src/hooks',
    },
  },
});
