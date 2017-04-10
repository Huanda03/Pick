var gulp = require('gulp'),
  connect = require('gulp-connect');
 
var path = {
	"html": ['./app/views/**/*.html', './app/index.html'],
	"js": './app/js/**/*.js',
	"css": './app/css/**/*.css'
};

gulp.task('connect', function() {
  connect.server({
    root: 'app',
	port: 8888,
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src(path.html)
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src(path.js)
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(path.css)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(path.html, ['html']);
  gulp.watch(path.js, ['js']);
  gulp.watch(path.css, ['css']);
});
 
gulp.task('default', ['connect', 'watch']);
