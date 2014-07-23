module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    dir: {
      build: 'build',
      src: 'src',
      tmp: '.tmp'
    },
    clean: ['<%= dir.tmp %>', '<%= dir.build %>'],
    concat: {
      dist: {
        src: ['<%= dir.src %>/*.js'],
        dest: '<%= dir.tmp %>/scripts.js'
      }
    },
    ngAnnotate: {
      dist: {
        src: ['<%= dir.tmp %>/scripts.js'],
        dest: '<%= dir.tmp %>/scripts.js'
      }
    },
    uglify: {
      dist: {
        src: ['<%= dir.tmp %>/scripts.js'],
        dest: '<%= dir.build %>/scripts.js'
      }
    }
  });

  grunt.registerTask('build', ['clean', 'concat', 'ngAnnotate', 'uglify']);
};
