/**
 * Created by charlie on 9/22/16.
 */
var path = require('path');
var rootPath = path.resolve(__dirname + '/../');

module.exports = {
  output: {
    path: rootPath + "/dist/",
    filename: "[name]-[hash].js",
    publicPath: '/',
  },
  resolve: {
    //root: [],
    extensions: ['', '.js', '.vue'],
    //alias: {},
    //fallback: [],
  },
  // plugins: {},
  resolveLoader: {},
  module: {
    js: {
      test: /\.(jsx?|babel|es6)$/,
      include: rootPath + '/src/',
      exclude: /node_modules|bower_components/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    },
    vue: {
      test: /\.vue$/,
      loader: 'vue'
    },
    json: {
      test: /\.json$/,
      loaders: ['json-loader']
    },
    // css: {
    //   test: /\.css$/,
    //   loaders: ['style-loader', 'css-loader']
    // },
    sass: {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    html: {
      test: /\.html$/,
      loaders: ['html-loader?minimize=false']
    },
    font: {
      test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: path.posix.join('fonts', '[name].[hash:7].[ext]')
      }
    },
    image: {
      test: /\.(gif|png|jpe?g)(\?\S*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: path.posix.join('images', '[name].[hash:7].[ext]')
      }
    }
  }
}
