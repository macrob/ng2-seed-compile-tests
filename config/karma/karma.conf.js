 // apt install xinit

//set -x CHROME_BIN /usr/bin/chromium-browser
// Xvfb :2 -screen 0 1024x768x24&
 // firefox --display=:2
 // set -x DISPLAY :2
const config = require('config');
const path = require('path');
const util = require('../_utils/');

// const build = 'gbuild'; // grunt (gcnf.build) or webpack (wcnf.build)

const cnf = {
  build: config.get('grunt.build'),
  port: config.get('karma.port'),
  host: config.get('karma.host'),

  root: util.root() + '/',

  src: util.src('app') + '/',      // app source TS files
  npm: util.root('node_modules') + '/',
  testSrcBase: util.src('app') + '/',

  // karma: path.resolve(__dirname) + '/',
  testBase: util.build('app', config.get('grunt.build')) + '/',
  app:  util.build('app', config.get('grunt.build')) + '/', // transpiled app JS and map files
  karma: util.build('karma', config.get('grunt.build')) + '/',

	reportCoverage: config.get('tests.reports.karma.coverage'),
	reportResult: config.get('tests.reports.karma.results')
}


//
// <script src="https://unpkg.com/core-js/client/shim.min.js"></script>
//
// <script src="https://unpkg.com/zone.js@0.6.25?main=browser"></script>
// <script src="https://unpkg.com/reflect-metadata@0.1.3"></script>
// <script src="https://unpkg.com/systemjs@0.19.27/dist/system.src.js"></script>

module.exports = function(config) {

  var preprocessors = {};
    preprocessors[cnf.app + '**/*.js'] = ['coverage'];


  var appAssets  = '/base/app/'; // component assets fetched by Angular's compiler
  // var appAssets  = '/app/'; // component assets fetched by Angular's compiler

  config.set({
    port: cnf.port,
		host: cnf.host,
		// basePath: cnf.root,
    basePath:  util.build('', cnf.build),
    frameworks: ['jasmine'],
    plugins: [
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'), // click 'Debug' in browser to see it
      require('karma-htmlfile-reporter') // crashing w/ strange socket error
    ],
    // browsers: ['PhantomJS', 'Chrome', 'Firefox'],
		// browsers: ['PhantomJS', 'Chrome'],
    browsers: ['PhantomJS'],
    // customLaunchers: {
    //   // From the CLI. Not used here but interesting
    //   // chrome setup for travis CI using chromium
    //   Chrome_travis_ci: {
    //     base: 'Chrome',
    //     flags: ['--no-sandbox']
    //   }
    // },
    files: [
      // // System.js for module loading
      cnf.npm + 'systemjs/dist/system.src.js',
      cnf.npm + 'systemjs/dist/system-polyfills.js',

      // 'https://unpkg.com/systemjs', ReferenceError: Can't find variable: require

      // Polyfills
      'https://unpkg.com/core-js/client/shim.min.js',
      'https://unpkg.com/reflect-metadata',
			// cnf.npm + 'jquery/dist/jquery.js',
      // cnf.npm + 'core-js/client/shim.js',
      // cnf.npm + 'reflect-metadata/Reflect.js',

      'https://unpkg.com/zone.js',
			'https://unpkg.com/zone.js/dist/long-stack-trace-zone.js',
			'https://unpkg.com/zone.js/dist/async-test.js',
			'https://unpkg.com/zone.js/dist/fake-async-test.js',
			'https://unpkg.com/zone.js/dist/sync-test.js',
			'https://unpkg.com/zone.js/dist/proxy.js',
			'https://unpkg.com/zone.js/dist/jasmine-patch.min.js',


      // RxJs
      // { pattern: cnf.npm + 'rxjs/**/*.js', included: false, watched: false },
      // { pattern: cnf.npm + 'rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      // {pattern: cnf.npm + '@angular/**/*.js', included: false, watched: false},
      // {pattern: cnf.npm + '@angular/**/*.js.map', included: false, watched: false},

      // {pattern: cnf.karma + 'systemjs.config.js', included: false, watched: false},
      // {pattern: cnf.karma + 'systemjs.config.extras.js', included: false, watched: false},
      // {pattern: cnf.karma + 'karma-test-shim.js', included: true, watched: false},
      // {pattern: cnf.karma + 'systemjs.config.js', included: true, watched: false},
      // {pattern: cnf.karma + 'systemjs.config.extras.js', included: true, watched: false},

      cnf.karma + 'karma-test-shim.js',
      // cnf.karma + 'systemjs.config.js',
      // cnf.karma + 'systemjs.config.extras.js',

      // transpiled application & spec code paths loaded via module imports
      {pattern: cnf.app + '**/*.js', included: false, watched: true},
      // {pattern: util.build('app', 'widgets', 'creditors') + '**/*.js', included: false, watched: true},
      {pattern: cnf.testBase + '**/*.spec.js', included: false, watched: true},


      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: cnf.app + '../**/*.html', included: false, watched: true},
      {pattern: cnf.app + '../**/*.css', included: false, watched: true},
      // {pattern: cnf.app + '../**/*.css', included: false, watched: true},

      // Paths for debugging with source maps in dev tools
      {pattern: cnf.src + '**/*.ts', included: false, watched: false},
      {pattern: cnf.app + '**/*.js.map', included: false, watched: false},
      {pattern: cnf.testSrcBase + '**/*.spec.ts', included: false, watched: false},
      {pattern: cnf.testBase + '**/*.spec.js.map', included: false, watched: false}
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      '/app/': appAssets
    },

    exclude: [],
    preprocessors: preprocessors,
    // disabled HtmlReporter; suddenly crashing w/ strange socket error
    reporters: ['progress', 'kjhtml', 'html', 'coverage'],//'html'],
    // reporters: ['progress', 'kjhtml', 'coverage'],//'html'],
    coverageReporter: {
      type : 'html',
      dir : '../../'+cnf.reportCoverage
    },
    // reporters: ['progress'],//'html'],
    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '../../'+cnf.reportResult+'karma.html',
      outputDir: '../../'+cnf.reportResult,

      // // Optional
      // pageTitle: 'Unit Tests',
      // subPageTitle: __dirname
    },

    // port: 9876,
    colors: true,
    // logLevel: config.LOG_INFO,
		logLevel: 'ERROR',
    autoWatch: true,
    // browsers: ['Chrome'],
    singleRun: false
  })
}
