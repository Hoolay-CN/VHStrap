var gulp = require('gulp')
var md2vue = require('../build/md2vue')

gulp.task('md2vue', [], function () {
  gulp.src('./_pages/**/*.md')
    .pipe(md2vue({a: 'hi'}))
    .pipe(gulp.dest('./pages'))
})

gulp.task('watch-md2vue', function () {
  var watcher = gulp.watch('./_pages/**/*.md', ['md2vue'])
  watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  })
})
