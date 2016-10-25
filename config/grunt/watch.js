
module.exports = function(cnf) {
    var _ = require('lodash');

    var tasks = {
        template: {
            files: [
                cnf.srcTpl + '**/*.html',
                cnf.srcTpl + '**/*.js',
                cnf.srcTpl + '**/*.css',
                cnf.srcTpl + '**/*.md',
                cnf.srcTpl + '**/*.xml',
                cnf.srcTpl + '**/*.ico',
                cnf.srcTpl + '**/*.txt',
                cnf.srcTpl + '**/*.png'
            ],
            tasks: [
                'copy:template'
            ]
        },
        app: {
            files: ['src/app/**/*.js', 'src/app/**/*.css', 'src/app/**/*.html'],
            tasks: [
                'copy:app'
            ]
        },
        ts: {
            files: ['src/app/**/*.ts', '!src/app/**/*.spec.ts'],
            tasks: [
                'tslint',
                'ts:app',
                'exec:barrels'
            ]
        },
        spec: {
            files: ['src/app/**/*.spec.ts'],
            tasks: [
                'tslint',
                'ts:spec',
                // 'todo'
            ]
        },
        e2e: {
            files: ['e2e/**/*.ts'],

            tasks: [
                'clean:e2e',
                'ts:e2e',
                'protractor'
            ]
        }
    };

    var utilsTasks = [
        'exec:info',
        'todo'
    ];

    return {
        'app-karma-e2e': {
            files: _.union(tasks.template.files, tasks.ts.files, tasks.spec.files, tasks.app.files, tasks.e2e.files),
            tasks: _.union(tasks.template.tasks, tasks.ts.tasks, tasks.spec.tasks, tasks.app.tasks, tasks.e2e.tasks, utilsTasks),
        },
        'app-karma': {
            files: _.union(tasks.template.files, tasks.ts.files, tasks.spec.files, tasks.app.files),
            tasks: _.union(tasks.template.tasks, tasks.ts.tasks, tasks.spec.tasks, tasks.app.tasks, utilsTasks),
        },
        app: {
            files: _.union(tasks.template.files, tasks.ts.files, tasks.app.files),
            tasks: _.union(tasks.template.tasks, tasks.ts.tasks, tasks.app.tasks, utilsTasks),
        },
        template: tasks.template,
        ts: tasks.ts,
        spec: tasks.spec,
        e2e: tasks.e2e,
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
