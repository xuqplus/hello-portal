"use strict";

module.exports = function(grunt) {
  return {
    client: {
      files: [
        {expand: true, flatten: false, src: ['client/**/*.{min.js,min.css,html}'], dest: 'build'},
      ],
    },
    server: {
      files: [
        {expand: true, flatten: false, src: ['server/**/*.{min.js,min.css,html,ejs}'], dest: 'build'},
      ],
    },
  }
};
