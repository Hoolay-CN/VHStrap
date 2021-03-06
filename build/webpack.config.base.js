/**
 * Created by charlie on 9/22/16.
 */
const path = require('path')
const rootPath = path.resolve(`${__dirname}/../`)

module.exports = {
  output: {
    path: `${rootPath}/dist/`,
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    // root: [],
    extensions: ['.js', '.vue'],
    alias: {
      'vh-src': `${rootPath}/src/`
    }
    // fallback: [],
  },
  // plugins: {},
  resolveLoader: {},
  module: {
    js: {
      test: /\.(jsx?|babel|es6)$/,
      include: `${rootPath}/src/`,
      exclude: /node_modules|bower_components/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    vue: {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'style-loader!css-loader!sass-loader'
        }
      }
    },
    // json: {
    //  test: /\.json$/,
    //  loaders: ['json-loader']
    // },
    // css: {
    //   test: /\.css$/,
    //   loaders: ['style-loader', 'css-loader']
    // },
    sass: {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    html: {
      test: /\.html$/,
      use: 'html-loader?minimize=false'
    },
    font: {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: 'file-loader'
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
