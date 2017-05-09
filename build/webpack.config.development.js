var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rootPath = path.resolve(__dirname + '/../');

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: rootPath + "/src/development.js",
  output: {
    path: rootPath + "/dist/",
    filename: "[name]-[hash].js"
  },
  module: {
    urlCSS: {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap'
      }),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development app",
      filename: 'index.html',
      template: 'src/development.html',
    }),
    new ExtractTextPlugin('[name]-[hash].css'),
  ],
}
