/* File will be replaced by Grunt */
declare var System: any;


// this will be replaced by utils/barrels.js
	var barrels = {};


	var vendors = {
		// angular bundles

		'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
		'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
		'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
		'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
		'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
		'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
		'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
		'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
		'@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

		// other libraries
		'rxjs':											'npm:rxjs',
		'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
		'jquery': 'https://code.jquery.com/jquery-3.1.1.min.js',
		'lodash': 'npm:lodash'
	};

// (function (global) {
	System.config({
		baseURL: '/dist/gbuild/',
		defaultJSExtensions: false,

		paths: {
			// paths serve as alias
			'npm: ': '../../node_modules/'
		},
		// map tells the System loader where to look for things
		map: (<any> Object).assign({
			app: 'app',

		}, vendors),
		// packages tells the System loader how to load when no filename and/or no extension
		packages: (<any> Object).assign({

			app: { main: './index.js', defaultExtension: 'js' },
			rxjs: { main: 'index.js', defaultExtension: 'js' },
			lodash: { main: 'index.js', defaultExtension: 'js' },
			'angular-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },

		}, barrels)
	});
// })(this);
