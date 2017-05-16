let path = require('path');
let cooking = require('cooking');

cooking.set({
    entry: './entry.js',
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
    publicPath: '/demos/vhstrap/',
    assetsPath: 'static',
    urlLoaderLimit: 10000,
    extractCSS: '[name].[contenthash:7].css',
    extends: ['vue']
});

// cooking.add('resolve.root', [
//   path.join(__dirname, '..', 'src')
// ]);

cooking.add('resolve.alias', {
    'src': path.join(__dirname, '..', 'src'),
    'vh-src': path.join(__dirname, '..', 'src'),
    'vue': path.join(__dirname, '/node_modules/vue/')
});

// do not use cooking-vue
// cooking.add('loader.vue', {
//   test: /\.vue$/,
//   loader: 'vue'
// });

cooking.add('loader.sass', {
    test: /\.scss$/,
    loader: 'style!css!sass-loader' // cooking will be converted to 2
});

cooking.add('loader.css', {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
});

cooking.config.resolve.extensions.push('.vue');
// cooking.config.resolve.extensions.push('.scss');

cooking.config.module.loaders.js.include = [process.cwd(), path.join(__dirname, '..', 'src')]

cooking.add('externals', {
    // 'vue-router': 'VueRouter',
    // 'vue': 'Vue'
});

let configurations = cooking.resolve();


// configurations.plugins.forEach((n) => {
//     if (n instanceof require('webpack').LoaderOptionsPlugin) {
//         console.dir(n.options.options);
//     }
// });

module.exports = configurations;
