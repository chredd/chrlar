module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    project: {
      srcDir: 'static',
      buildDir: '/'
    },

    compass: {
      dist: {
        options: {
          sassDir: '<%= project.srcDir %>/sass',
          cssDir: '',
          imagesDir: 'static/images',
          outputStyle: 'compressed'
        }
      }
    },

    watch: {
      css: {
        files: ['<%= project.srcDir %>/sass/*.scss'],
        tasks: ['dist']
      },
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/*\n' +
                  'Theme Name: chrlar\n' +
                  'Author: chredd\n' +
                  'Version: 0.1\n' +
                  '*/'
        },
        files: {
          src: 'style.css'
        }
      }
    },

    clean: {
      css: ['style.css']
    },

  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-banner');

  // Default task(s).
  grunt.registerTask('default', ['compass']);
  grunt.registerTask('dist', ['clean:css', 'compass', 'usebanner']);

};