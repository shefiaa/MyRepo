import path from 'path';
import React from 'react'; // Perbaikan: import React dengan huruf besar
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [React()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://book-crud-service-6dmqxfovfq-et.a.run.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
