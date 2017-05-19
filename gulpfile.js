/* eslint-disable import/no-extraneous-dependencies */
// gulp tasks
const gulp = require('gulp')
const sass = require('gulp-sass')
const path = require('path')
const webpack = require('webpack')
const gUtil = require('gulp-util')
const WebpackDevServer = require('webpack-dev-server')
const ghpages = require('gh-pages')

const webpackBuild = require('./build/webpack.factory')

const rootPath = path.resolve('.')

gulp.task('build-hoolay-style', [], () => {
  const basePath = `${rootPath}/src/styles/hoolay`
  gulp.src(`${basePath}/entry.scss`)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(basePath))
})

// watch styles
gulp.task('watch-hoolay-style', [], () => {
  const watcher = gulp.watch(`${rootPath}/src/styles/hoolay/**/*.scss`, ['build-hoolay-style'])

  watcher.on('change', (event) => {
    console.log(`File ${event.path} was ${event.type}`)
  })
})

// webpack - x
gulp.task('dev', ['watch-hoolay-style'], (callback) => {
  const configs = webpackBuild.Factory.withDevelopment({})
  const compiler = webpack(configs, (err, stats) => {
    if (err) throw new gUtil.PluginError('webpack', err)
    gUtil.log('[webpack]', stats.toString())
    callback()
  })

  // dev server
  new WebpackDevServer(compiler, {
    publicPath: configs.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8888, 'localhost', (err) => {
    if (err) throw new gUtil.PluginError('webpack-dev-server', err)
    // Server listening
    gUtil.log('[webpack-dev-server]', 'http://localhost:8888/webpack-dev-server/index.html')
    // callback();
  })
})

// ghpages
gulp.task('gh-pages', [], (cb) => {
  ghpages.publish('./docs/dist', function (err) {
    cb(err)
  })
})
