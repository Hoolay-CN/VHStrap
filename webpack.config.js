var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "[name]-[hash].js"
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      src: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      styles: path.resolve(__dirname, './src/styles'),
      components: path.resolve(__dirname, './src/components')
    }
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     loader: 'eslint-loader',
    //     include: /src/,
    //     exclude: /node_modules/
    //   },
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my first app",
      filename: 'index.html',
      template: 'src/demo.html',
    }),
    new ExtractTextPlugin("[name]-[hash].css"),
  ],
}
