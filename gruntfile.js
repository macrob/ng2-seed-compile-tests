const config = require('config');
const debug = require('debug')('grunt:cnf:gruntfile.js');

console.log('To show debug info set DEBUG="grunt*"');
console.log(' set -x DEBUG \'grunt*\'');

let cnf = {
	srcApp: config.get('src.app'),
	srcTpl:  config.get('src.template'),
	build: 'dist/' + config.get('grunt.build'),
	e2eBuild: 'dist/'+config.get('e2e.build'),
	seleniumPort: config.get('selenium.port'),
	seleniumHost: config.get('selenium.host'),
	httpPort: config.get('http.port'),
	httpHost: config.get('http.host'),
	karmaPort: config.get('karma.port'),
  karmaHost: config.get('karma.host'),
	tests: config.get('tests'),
};

debug(cnf);

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		watch: require('./config/grunt/watch.js')(cnf),

		tslint: require('./config/grunt/tslint.js'),
		todo: require('./config/grunt/todo.js'),
		copy: require('./config/grunt/copy.js')(cnf),
		clean: require('./config/grunt/clean.js')(cnf),
		'http-server': require('./config/grunt/http-server.js')(cnf),
		browserSync: require('./config/grunt/browserSync.js')(cnf),

		/*
		ts:app - compile app ts files
		ts:spec - compile spec ts files
		ts: e2e - e2e app ts files
		*/
		ts: require('./config/grunt/ts.js')(cnf),


		/* End 2 end testing */
		webdrivermanager: require('./config/grunt/webdrivermanager.js')(cnf),
		protractor: require('./config/grunt/protractor.js')(cnf),

		/* KARMA UNIT TEST CNF */
		karma: require('./config/grunt/karma.js')(cnf),

		exec:  require('./config/grunt/exec.js')(cnf),
				//
				// concurrent: {
				// 		dev: {
				// 				tasks: [
				// 						'watch',
				// 						'browserSync'
				// 				],
				// 				options: {
				// 						logConcurrentOutput: true
				// 				}
				// 		}
				// }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-jasmine-nodejs');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-todo');
	grunt.loadNpmTasks('grunt-typedoc');
	grunt.loadNpmTasks('grunt-tslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-webdriver-manager');
	grunt.loadNpmTasks('grunt-selenium-standalone');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-rename');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.loadNpmTasks('grunt-exec');
// grunt.loadNpmTasks('grunt-concurrent');

	grunt.registerTask('server:background', [
		// 'http-server:background'
		'browserSync'
	]);

	grunt.registerTask('compile:app', [
		'tslint',
		'clean:build',

		/* template copy */
		'copy:template',

		'copy:app',
		'ts:app',
		'exec:barrels'
	]);

	grunt.registerTask('compile:spec', [
		'ts:spec',
		'copy:karma',
		'karma'
	]);

	grunt.registerTask('compile:e2e', [
		'clean:e2e',
		'ts:e2e',
		'protractor'
	]);

	grunt.registerTask('hot:app', [
		'compile:app',

		'server:background',
		'exec:info',
		'todo',
		// 'watch:app'
		'watch'
	]);

	grunt.registerTask('hot:app-karma', [
		'compile:app',

		/* karma */
		'compile:spec',

		'server:background',
		'exec:info',
		'todo',
		// 'watch:app-karma'
		'watch'
	]);

	grunt.registerTask('hot:app-karma-e2e', [
		'compile:app',


		/* karma */
		'compile:spec',

		'server:background',
		'webdrivermanager:start',

		/* e2e protractor */
		'compile:e2e',

		'exec:info',
		'todo',
		// 'watch:app-karma-e2e'
		'watch'

	]);

	grunt.registerTask('hot:e2e', [
		'server:background',
		'webdrivermanager:start',

		/* e2e protractor */
		'compile:e2e',

		'exec:info',
		'todo',
		// 'watch:e2e'
		'watch'
	]);

	grunt.registerTask('hot:template', [
		'clean:build',
		'copy:template',
		'server:background',
		// 'watch:template'
		'watch'
	]);

};
