"use strict";

module.exports = function(grunt) {
    grunt.registerTask('clean2', ['clean:client']);
    grunt.registerTask('clean3', ['clean:server', 'clean:server']);
};
