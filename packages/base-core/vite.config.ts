import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import del from 'rollup-plugin-delete';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    del({ targets: ['dist'] }),
    vue(),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: false })]
    }),
    dts({
      copyDtsFiles: false
    })
  ],
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'app-base-core',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'dayjs', 'element-plus']
    }
  }
});

