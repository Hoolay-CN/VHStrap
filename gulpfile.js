// gulp tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

var rootPath = path.resolve('.') ;

gulp.task('build-hoolay-style', [], function() {
  var basePath = rootPath + '/src/styles/hoolay';
  gulp.src(basePath + '/entry.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(basePath));
});
