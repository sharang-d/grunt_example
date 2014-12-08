module.exports = function(grunt) {
  var default_tasks = ['uglify', 'cssmin', 'smoosher', 'clean'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! Minified at <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'build/all.min.js'
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! Minified at <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'build/all.css': ['src/css/*.css']
        }
      }
    },
    smoosher: {
      options: {},
      all: {
        files: {
          'build/final.html': 'src/source.html',
        },
      },
    },
    clean: {
      all: {
        src: ['build/*.{css,js}']
      }
    },
    watch: {
      files: ['src/js/*.js', 'src/css/*.css'],
      tasks: default_tasks
    }
  });

  grunt.loadNpmTasks('grunt-html-smoosher');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', default_tasks);

};