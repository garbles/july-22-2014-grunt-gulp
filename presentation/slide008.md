        // ...

        var dir = {
          build: 'build',
          src: {
            js: 'src/*.js',
            css: 'src/*.scss'
          }
        };

        gulp.task('build:js', function () {
          return gulp.src(dir.src.js)
            .pipe(concat('scripts.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest(dir.build));
        });

        gulp.task('build:css', function () {
          return gulp.src(dir.src.css)
            .pipe(sass())
            .pipe(prefix())
            .pipe(concat('styles.css'))
            .pipe(gulp.dest(dir.build));
        });

        gulp.task('build', ['build:js', 'build:css'], function () {
          // do something after those two tasks are done
        });

        gulp.task('afterBuild', ['build'], function () {
          // do something after build is done
        });
















































































slide 008
