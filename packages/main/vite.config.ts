import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    styleImport({
      resolves: [
        ElementPlusResolve()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    open: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
