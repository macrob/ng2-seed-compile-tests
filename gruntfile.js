const config = require('config');

let cnf = {
	srcApp: config.get('src.app'),
	srcTpl:  config.get('src.template'),
	build: 'dist/' + config.get('grunt.build'),
	e2eBuild: 'dist/'+config.get('e2e.build'),
	seleniumPort: config.get('selenium.port'),
	seleniumHost: config.get('selenium.host'),
	httpPort: config.get('http.port'),
	httpHost: config.get('http.host'),
	tests: config.get('tests'),
};

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		watch: require('./config/grunt/watch.js')(cnf),

		copy: require('./config/grunt/copy.js')(cnf),
		clean: require('./config/grunt/clean.js')(cnf),
		'http-server': {
			dev: require('./config/grunt/http-server.js')(cnf)
		},

		/*
		ts:app - compile app ts files
		ts:spec - compile spec ts files
		ts: e2e - e2e app ts files
		*/
		ts: require('./config/grunt/ts.js')(cnf),


		/* End 2 end testing */
		webdrivermanager: require('./config/grunt/webdrivermanager.js')(cnf),
		protractor: require('./config/grunt/protractor.js')(cnf),


		karma: require('./config/grunt/karma.js')(cnf),
		exec:  require('./config/grunt/exec.js')(cnf),
	});


	grunt.registerTask('default', [
		'tplCopy',
		'tsApp',
		'http-server'
	]);

	grunt.registerTask('tsApp', [
		'clean:app',
		'copy:app',
		'ts:app',
		'exec:barrels'
	]);

	grunt.registerTask('tsE2e', [
		'clean:e2e',
		'ts:e2e',
	]);


	grunt.registerTask('e2e', [
		'tplCopy',
		'tsApp',
		'http-server',

		'tsE2e',
		'webdrivermanager:start',
		'protractor',
		// 'watch:e2e',
		// 'watch:ts',
		// 'watch:template',

		'watch:buildE2e'

	]);

	grunt.registerTask('e2eServer', [
		'tsE2e',
		'http-server',
		'webdrivermanager:start',
		'protractor',
	]);


	grunt.registerTask('e2eHot', [
		'e2eServer',
		'watch:e2e'
	]);


	grunt.registerTask('tplCopy', [
		'clean:build',
		'copy:template'
	]);

	grunt.registerTask('tplServer', [
		'tplCopy',
		'http-server'
	]);

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
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.loadNpmTasks('grunt-exec');

};
