module.exports = {
    dev: {
        options: {
            paths: ['server/public/stylesheets'],
            sourceMap: true
        },
        files: {
            'server/public/stylesheets/style.css': 'server/public/stylesheets/style.less',
            'server/public/stylesheets/bundle.css': 'server/public/**/*.less',
            'server/public/stylesheets/ab.css': ['server/public/a.less', 'server/public/stylesheets/b.less']
        }
    },
    prod: {
        options: {
            paths: ['server/public/stylesheets'],
        },
        files: {
            'server/public/stylesheets/style.css': 'server/public/stylesheets/style.less'
        }
    },
};