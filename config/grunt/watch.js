module.exports = function(cnf) {
    return {
        'template': {
            files: [cnf.srcTpl + '**/*.html', cnf.srcTpl + '**/*.js', cnf.srcTpl + '**/*.css', cnf.srcTpl + '**/*.md', cnf.srcTpl + '**/*.xml', cnf.srcTpl + '**/*.ico', cnf.srcTpl + '**/*.txt', cnf.srcTpl + '**/*.png'],

            tasks: [
                'copy:template'
            ]
        },
        'buildE2e': {
            files: [
                cnf.srcTpl + '**/*.html', cnf.srcTpl + '**/*.js', cnf.srcTpl + '**/*.css', cnf.srcTpl + '**/*.md', cnf.srcTpl + '**/*.xml', cnf.srcTpl + '**/*.ico', cnf.srcTpl + '**/*.txt', cnf.srcTpl + '**/*.png',
                'e2e/**/*.ts',
                'src/app/**/*.ts', '!src/app/**/*.spec.ts'
            ],

            tasks: [
                'copy:template',

                'ts:e2e',

                // 'tslint',
                'ts:app',
                // 'todo',

                'protractor'
            ]
        },
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
