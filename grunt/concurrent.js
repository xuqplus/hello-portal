module.exports = function(grunt) {
  return {
    bug: {
      tasks: ['clean', 'ts']
    },
    options: {
      logConcurrentOutput: true
    }
  }
};
