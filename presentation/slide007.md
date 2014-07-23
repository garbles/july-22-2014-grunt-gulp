        // ...

        var dir = {
          build: 'build',
          src: 'src/*.js'
        };

        gulp.task('build', function () {
          return gulp.src(dir.src)
            .pipe(concat('scripts.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest(dir.build));
        });
















































































slide 007
