var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry:'./entry.js',
  dist: './dist',
  template: './docs.tpl',
  devServer: {
    port: 8082,
    publicPath: '/'
  },
  // production
  clean: true,
  hash: true,
  sourceMap: true,
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['sass']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, '..', 'src'),
  // 'pages': path.join(__dirname, 'pages')
});

// do not use cooking-vue
cooking.add('loader.vue', {
	test: /\.vue$/,
  loader: 'vue'
});

cooking.config.resolve.extensions.push('.vue');

cooking.add('externals', {
    // 'vue-router': 'VueRouter',
    // 'vue': 'Vue'
});

module.exports = cooking.resolve();
