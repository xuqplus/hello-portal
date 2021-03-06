"use strict"

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      client: [
        'client/**/*.js',
        'client/**/*.js.map',
        'client/**/*.css'
      ],
      server: [
        'server/**/*.js',
        'server/**/*.js.map',
        'server/**/*.css'
      ]
    }
  });

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean']);
};