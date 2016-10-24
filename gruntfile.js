const config = require('config');

let cnf = {
	build: 'dist/gbuild/',
	e2eBuild: 'dist/'+config.get('e2e.build'),
	seleniumPort: config.get('selenium.port'),
	seleniumHost: config.get('selenium.host'),
	httpPort: config.get('http.port'),
	httpHost: config.get('http.host'),
	tests: config.get('tests')
};

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		watch: require('./config/grunt/watch.js')(cnf),
		// browserSync: require('./config/grunt/browserSync.js')(cnf),
		webdrivermanager: require('./config/grunt/webdrivermanager.js')(cnf),
		selenium_standalone: {
			serverConfig: require('./config/grunt/selenium_standalone.js')(cnf),
		},
		webpack: {
			app: require('./webpack.config.js')
		},
		'http-server': {
			dev: require('./config/grunt/http-server.js')(cnf)
		},
		sass: require('./config/grunt/sass.js')(cnf),
		ts: require('./config/grunt/ts.js')(cnf),
		clean: require('./config/grunt/clean.js')(cnf),
		copy: require('./config/grunt/copy.js')(cnf),
		rename: {
			'html-index': {
				src: cnf.build + 'index.gbuild.html',
				dest: cnf.build + 'index.html'
			}
		},
		todo: require('./config/grunt/todo.js'),
		// typedoc: {
		// 	build: require('./config/grunt/typedoc.js')(cnf)
		// },
		tslint: require('./config/grunt/tslint.js'),
		karma: require('./config/grunt/karma.js')(cnf),
		protractor: require('./config/grunt/protractor.js')(cnf),
		// connect: {
		// 		server: {
		// 				options: {
		// 						hostname: "172.16.167.153",
		// 						port: 9001,
		// 						base: "dist/"
		// 				}
		// 		}
		// }
	});


	grunt.registerTask('default', [
		'tslint',
		'clean:build',
		'ts',
		// 'webpack',
		'copy', 'rename:html-index',


		'http-server',
		// 'protractor',

		// 'jasmine_nodejs',
		// 'typedoc',
		'todo'
		// 'express'
	]);


	grunt.registerTask('hot', [
		'clean:build',
		'copy', 'rename:html-index',
		'ts',
		'sass',
		// 'copy:karma',
		// 'typedoc',
		// 'selenium_standalone:serverConfig:start',
		'webdrivermanager:start',
		'karma',
		'http-server',
		// 'browserSync:server',
		// 'browserSync:proxy',
		// 'protractor',
		'watch',
	]);

	// grunt.registerTask('server-proxy', ["connect", "browserSync:proxy"]);

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
};
