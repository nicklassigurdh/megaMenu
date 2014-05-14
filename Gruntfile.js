'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: {
      files: ['build']
    },
    copy: {
      dist: {
          src: 'build/performance.min.js',
          dest: 'demo-app/script/performance.js',
      },
    },
    uglify: {
      options: {
          banner: '<%= banner %>'
      },
      dist: {
          src: 'src/*',
          dest: 'build/performance.min.js'
      },
    },
    watch: {
      scripts: {
          files: ['app/**/*.*'],
          tasks: [],
          options: {
              livereload: true,
          },
      },
    },
    connect: {
      server: {
          options: {
              port: 9080,
              base: 'app',
              keepalive: true,
          }
      }
    },
  });

  // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('server', ['connect', 'server']);

  //grunt.registerTask('preview', ['connect:development']);
  //grunt.registerTask('preview-live', ['default', 'connect:production']);

};
