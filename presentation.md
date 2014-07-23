## FOTM : Gulp or Grunt

"any experience with Broccoli?"

by Gabe Scholz
July 22, 2014


## Gulp is not Grunt

- These are two very different tools.
- If you're using Grunt and it's working, should you really switch?
- If you are starting a new project, you should at least try Gulp.
- Grunt is awkward for building
- Gulp is awkward for not building


## E X A M P L E

Build a few javascript files

- Concat
- ngAnnotate (AngularJS business)
- Uglify


## G R U N T

- Creates temporary files as its flow
- Gruntfile.js reads like a config file
- Build concurrency possible through plugins (not trivial IMO)


```javascript
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    dir: {
      build: 'build',
      src: 'src',
      tmp: '.tmp'
    },
    clean: ['<%= dir.tmp %>'],
    concat: {
      dist: {
        src: '<%= dir.src %>/*.js',
        dest: '<%= dir.tmp %>/scripts.js'
      }
    },
    ngAnnotate: {
      dist: {
        src: '<%= dir.tmp>/scripts.js',
        dest: '<%= dir.tmp>/scripts.js'
      }
    },
    uglify: {
      dist: {
        src: '<%= dir.tmp %>/scripts.js',
        dest: '<%= dir.build %>/scripts.js'
      }
    }
  });

  grunt.registerTask('build', ['clean', 'concat', 'ngAnnotate', 'uglify']);
};
```


## G U L P

- Uses Node streams
- Gulpfile.js reads like sweet, buttery code
- Concurrency is built in
- Simpler API


```javascript
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
```


```javascript
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
```
