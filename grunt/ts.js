module.exports = function (grunt) {
  grunt.registerTask("default", ["ts:server", "ts:client"]);
  return {
    client: {
      src: ["client/**/*.ts"],
      tsconfig: 'client/tsconfig.json'
    },
    server: {
      src: ["server/**/*.ts"],
      tsconfig: 'server/tsconfig.json'
    }
  }
};
