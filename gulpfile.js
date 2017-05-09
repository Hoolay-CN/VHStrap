// gulp tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var webpack = require('webpack');
var gutil = require("gulp-util");
var WebpackDevServer = require('webpack-dev-server');

var webpackBuild = require('./build/webpack.factory');

var rootPath = path.resolve('.');

gulp.task('build-hoolay-style', [], function() {
  var basePath = rootPath + '/src/styles/hoolay';
  gulp.src(basePath + '/entry.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(basePath));
});

// watch styles
gulp.task('watch-hoolay-style', [], function() {
  var watcher = gulp.watch(rootPath + '/src/styles/hoolay/**/*.scss', ['build-hoolay-style']);

  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type);
  });
});

// webpack - x
gulp.task('dev', ['watch-hoolay-style'], function(callback) {
  var configs = webpackBuild.Factory.withDevelopment({});
  var compiler = webpack(configs, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({}));
    callback();
  });

  // dev server
  new WebpackDevServer(compiler, {
    publicPath: configs.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8888, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8888/webpack-dev-server/index.html");
    // callback();
  });
});
