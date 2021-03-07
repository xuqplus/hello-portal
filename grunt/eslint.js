module.exports = {
  options: {
    fix: true
  },
  client: [
    "client/**/*.ts"
  ],
  server: [
    "server/**/*.ts",
    "!node_modules/**/*.ts",
    "!bower_components/**/*.ts"
  ]
}
