module.exports = {
    options: {
        advanced: false,
        keepBreaks: false,
        aggressiveMerging: true
    },
    target: {
        files: [{
            expand: true,
            cwd: 'server/public/stylesheets',
            src: ['*.css', '!*.min.css'],
            dest: 'server/public/stylesheets',
            ext: '.min.css'
        }, {
            'server/public/stylesheets/bundle.min.css': [
                'server/public/stylesheets/ab.css',
                'server/public/stylesheets/bundle.css'
            ]
        }]
    }
};