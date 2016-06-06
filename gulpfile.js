var	gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename');

/* Compile less */
gulp.task('less', function () {
	return gulp.src('*.less')
		.pipe(less())
		.pipe(gulp.dest('reddit.css'));
});


/* Watch sass file changes */
gulp.task('watch', function() {
	gulp.watch('*.less', ['less']);
});

gulp.task('default', ['less', 'watch'], function() {

});