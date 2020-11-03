(function() {
	var gulp = require('gulp'),
		lint = require('gulp-jshint'),
		rename = require('gulp-rename'),
		uglify = require('gulp-uglify');

	gulp.task('default', function(){
		gulp.src('src/jquery.scroll-with-ease.js')
		// .pipe(lint())
		// .pipe(lint.reporter('default'))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify({preserveComments: 'licence'}))
		.pipe(rename('jquery.scroll-with-ease.min.js'))
		.pipe(gulp.dest('./dist/'));
	});
	
})();