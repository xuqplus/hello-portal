module.exports = {
    server: {
        files: [{
            expand: true,
            src: ['server/*.js', '!server/*.min.js'],
            dest: '.',
            cwd: '.',
            rename: function (dest, src, a) {
                // To keep the source js files and make new files as `*.min.js`:
                // return dest + '/' + src.replace('.js', '.min.js');
                // Or to override to src:
                return dest + '/' + src.replace('.js', '.min.js');
            }
        }]
    },
    options: {
        mangle: {
            reserved: ['jQuery', 'Backbone']
        },
        compress: {
            drop_console: true
        },
        sourceMap: true,
        sourceMapIncludeSources: true
    }
}