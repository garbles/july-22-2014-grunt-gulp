var gulp = require('gulp'),
  concat = require('gulp-concat'),
  ngAnnotate = require('gulp-ng-annotate'),
  uglify = require('gulp-uglify'),

dir = {
  build: 'build',
  src: 'src/*.js'
};

gulp.task('build', function () {
  return gulp.src(dir.src)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(dir.build));
});
