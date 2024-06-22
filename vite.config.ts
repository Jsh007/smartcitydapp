import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     {
  //       find: '@',
  //       replacement: fileURLToPath(new URL('./src', import.meta.url)),
  //     },
  //     {
  //       find: '@app',
  //       replacement: fileURLToPath(new URL('./src/app', import.meta.url)),
  //     },
  //     {
  //       find: '@assets',
  //       replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
  //     },
  //     {
  //       find: '@config',
  //       replacement: fileURLToPath(new URL('./src/config', import.meta.url)),
  //     },
  //     {
  //       find: '@features',
  //       replacement: fileURLToPath(new URL('./src/features', import.meta.url)),
  //     },
  //     {
  //       find: '@hooks',
  //       replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
  //     },
  //     {
  //       find: '@types',
  //       replacement: fileURLToPath(new URL('./src/types', import.meta.url)),
  //     },
  //     {
  //       find: '@helpers',
  //       replacement: fileURLToPath(new URL('./src/helpers', import.meta.url)),
  //     },
  //     {
  //       find: '@pages',
  //       replacement: fileURLToPath(new URL('./src/features/*/pages', import.meta.url)),
  //     },
  //     {
  //       find: '@templates',
  //       replacement: fileURLToPath(new URL('./src/features/*/templates', import.meta.url)),
  //     },
  //   ],
  // },
  plugins: [tsconfigPaths(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
});
