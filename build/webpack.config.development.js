const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rootPath = path.resolve(`${__dirname}/../`)

module.exports = {
  devtool: 'eval',
  entry: `${rootPath}/src/development.js`,
  output: {
    path: `${rootPath}/dist/`,
    filename: '[name]-[hash].js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    urlCSS: {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: 'css-loader?sourceMap'
      })
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development app',
      filename: 'index.html',
      template: 'src/development.html'
    }),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
}
