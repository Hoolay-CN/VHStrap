var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
    // loaders: [
    //   {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    //   {test: /\.scss$/, loaders: ["style", "css", "sass"]},
    //   {test: /\.vue$/, loader: 'vue'},
    //   {test: /\.css$/, loader: "style-loader!css-loader"},
    // ]
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my first app",
      filename: 'index.html',
      template: 'src/demo.html',
    }),
  ],
}
