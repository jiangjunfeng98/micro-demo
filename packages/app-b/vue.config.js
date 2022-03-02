const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const CompressionPlugin = require('compression-webpack-plugin');

const resolve = (dir) => path.join(__dirname, dir);

const name = 'b-app';

module.exports = {
  transpileDependencies: true,
  devServer: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  chainWebpack: (config) => {
    // gzip
    if(process.env.NODE_ENV === 'production') {
      config.plugin('CompressionPlugin').use(CompressionPlugin);
    }
    // auto
    config.plugin('AutoImport').use(AutoImport({
      resolvers: [ElementPlusResolver()]
    }));
    config.plugin('Components').use(Components({
      resolvers: [ElementPlusResolver()]
    }));
    // alias
    config.resolve.alias.set('@', resolve('src'));
    // output
    config.output.set('library', `${name}-[name]`);
    config.output.set('libraryTarget', 'umd');
  }
};
