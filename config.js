module.exports = {
    conventions: {
        assets:   /^(app)(\\|\/)(assets)/,
        ignored:  [/\/_/, /\.(spec|scenario)\.(js$)/]
    },
    modules: {
        definition:   'commonjs',
        wrapper:      'commonjs'
    },
    paths: {
        'public':   'build',
        'watched':  ['app']
    },

    files: {
        javascripts: {
            joinTo: {
                'js/app.js':      [/^(?!app)/,/^app/]
            }
        },
        stylesheets: {
            defaultExtension: 'scss',
            joinTo: {
                'css/app.css':  /^(app)/
            }
        }
    },
    plugins: {
        sass: {
            mode: 'native'
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        },
        cleancss: {
            keepSpecialComments: 0,
            removeEmpty: true
        },
        babel: {
            presets: ["es2015"],
            "plugins": [
                "angular2-annotations",
                "transform-decorators-legacy",
                "transform-class-properties",
                "transform-flow-strip-types"
            ],
            pattern: /\.(es6|js)$/
        },
        gzip: {
            paths: {
                javascript: 'js',
                stylesheet: 'css'
            }
        }
    },
    sourceMaps: false,
    optimize:   true
};
