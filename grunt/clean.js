"use strict";

module.exports = function(grunt) {
  return {
    client: [
      'client/**/*.js',
      'client/**/*.js.map',
      'client/**/*.css',
      'client/**/*.css.map'
    ],
    server: [
      'server/**/*.js',
      'server/**/*.js.map',
      'server/**/*.css',
      'server/**/*.css.map'
    ]
  }
};
