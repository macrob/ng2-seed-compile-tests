
declare var System: any;
/* GENERATE BY config/_utils/barrels.js */
var barrels = {};

const cnf = {
	map: {
		vendors: {
		// angular bundles

			'@angular/core': 'unpkg@angular/core/bundles/core.umd.js',
			'@angular/common': 'unpkg@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'unpkg@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'unpkg@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'unpkg@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'unpkgangular/http/bundles/http.umd.js',
			'@angular/router': 'unpkg@angular/router/bundles/router.umd.js',
			'@angular/forms': 'unpkg@angular/forms/bundles/forms.umd.js',
			'@angular/upgrade': 'unpkg@angular/upgrade/bundles/upgrade.umd.js',

			// other libraries
			'rxjs':											'npm:rxjs',
			'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
			// 'jquery': 'https://code.jquery.com/jquery-3.1.1.min.js',
			'jQuery': 'unpkg/jquery',
			'lodash': 'npm:lodash'
		}
	},
	packages: {
		vendors: {
			app: { main: './index.js', defaultExtension: 'js' },
			rxjs: { main: 'index.js', defaultExtension: 'js' },
			lodash: { main: 'index.js', defaultExtension: 'js' },
			'angular-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
		}
	}
};

// (function (global) {
	System.config({
		baseURL: '/dist/gbuild/',
		defaultJSExtensions: false,

		paths: {
			'npm: ': '../../node_modules/',
			'unpkg': 'https://unpkg.com/'
		},

		// map tells the System loader where to look for things
		map: (<any> Object).assign({
			app: 'app',
		}, cnf.map.vendors),

		// packages tells the System loader how to load when no filename and/or no extension
		packages: (<any> Object).assign({}, cnf.packages.vendors, barrels)
	});
// })(this);
