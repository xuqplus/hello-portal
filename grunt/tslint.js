module.exports = {
    options: {
      // can be a configuration object or a filepath to tslint.json
      configuration: "tslint.json",
      // If set to true, tslint errors will be reported, but not fail the task
      // If set to false, tslint errors will be reported, and the task will fail
      force: false,
      fix: true
    },
    files: {
      src: [
        "server/**/*.ts",
        "client/**/*.ts",
        "test/**/*.ts",
        "!node_modules/**/*.ts",
        "!bower_components/**/*.ts"
      ]
    }
}
