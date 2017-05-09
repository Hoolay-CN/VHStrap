// gulp tasks
var gulp = require('gulp');
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');
var gutil = require('gulp-util');
var concat = require('gulp-concat');

gulp.task('webpack', function(callback) {
	// run webpack
	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		callback();
	});
});

gulp.task('default', ['webpack'], function() {
	// copy css
	gulp.src('./libs/simplemde.min.css')
			.pipe(gulp.dest('./examples'));

	// concat editor
	gulp.src(['./libs/simplemde.min.js', './examples/bundle.js'])
			.pipe(concat('bundle.aio.js'))
			.pipe(gulp.dest('./examples'));
});