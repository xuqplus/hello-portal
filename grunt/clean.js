"use strict";

module.exports = function(grunt) {
  return {
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
};
