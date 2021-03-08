module.exports = {
    less: {
        files: ['server/public/**/*.less', 'client/**/*.less'],
        tasks: ['less:dev'],
        options: {
            // by default will start a server on port 35729
            livereload: true
        }
    },
    ts: {
        files: ['server/**/*.ts', 'client/**/*.ts'],
        tasks: ['ts:server', 'ts:client'],
        options: {
            // by default will start a server on port 35729
            livereload: true
        }
    },
}
