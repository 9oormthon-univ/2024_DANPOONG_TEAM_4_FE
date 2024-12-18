import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@app', replacement: '/src/app' },
      { find: '@routers', replacement: '/src/routers' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@components', replacement: '/src/components' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@mocks', replacement: '/src/mocks' },
    ],
  },
});
