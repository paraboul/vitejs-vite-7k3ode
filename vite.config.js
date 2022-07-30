import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    vue({
      template: {
        ssr: true,
      },
    }),
  ],

  ssr: {
    noExternal: /./,
  },
});
