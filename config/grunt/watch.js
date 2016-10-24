module.exports = function(cnf) {
    return {
        'app-static': {
            files: ['src/app/**/*.js', 'src/app/**/*.css', 'src/app/**/*.html'],

            tasks: [
                'copy:app-static'
            ]
        },
        ts: {
            files: ['src/app/**/*.ts', '!src/app/**/*.spec.ts'],
            tasks: [
                'tslint',
                'ts:app',
                // 'webpack',
                // 'copy', 'rename:html-index',
                // 'karma',
                'protractor',
                // 'jasmine_nodejs',
                // 'typedoc',
                'todo'
                // 'express'
            ]
        },
        spec: {
            files: ['src/app/**/*.spec.ts'],
            tasks: [
                'tslint',
                'ts:spec',
                'todo'
            ]
        },
        js: {
            files: ['src/**/*.js'],

            tasks: [
                'copy:js'
            ]
        },
        sass: {
            files: ['src/**/*.scss'],

            tasks: [
                'sass'
            ]
        },
        e2e: {
            files: ['e2e/**/*.ts'],

            tasks: [
                'ts:e2e',
                'protractor'
            ]
        },
        'html-index': {
            files: ['src/*.html'],

            tasks: [
                'copy:html-index', 'rename:html-index'
            ]
        },
        'karma-conf': {
            files: ['config/karma/*.js'],

            tasks: [
                'copy:karma'
            ]
        }

    }
}
