

// #docregion
// /*global jasmine, __karma__, window*/
// (function (global) {

Error.stackTraceLimit = 0; // "No stacktrace"" is usually best for app testing.

// Uncomment to get full stacktrace output. Sometimes helpful, usually not.
// Error.stackTraceLimit = Infinity; //

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
const build = 'gbuild';

// var karmaCnfPath = 'config/karma/';
var karmaCnfPath = 'karma/';
var jsCnfPath = 'js/';

// var builtPath = 'base/dist/'+build+'/app/';
// var builtPath = 'dist/'+build+'/app/';

__karma__.loaded = function () { };

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {

  return /(\.spec\.js)$/.test(path);
}

function isBuiltFile(path) {
// console.log(path);
  // return /wbuild/.test(path);
  return /app/.test(path);
}
// console.log(window.__karma__.files);process.exit(1);
// console.log(Object.keys(window.__karma__.files));
var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);
// console.log(System);

// process.exit(1);

var map = {
    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
    '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',
  };

var path = {
  // paths serve as alias
  // 'npm:': '../node_modules/'
  'npm:': 'https://unpkg.com/'
};

// console.log(allSpecFiles);

Object.keys(window.__karma__.files).forEach( function(path) {
  // if (/(\.spec\.js)$/.test(path)) {
  //
  // }
  // console.log(/^.*\/(.*\.html)$/.test(path));
  var rs = path.match(/^\/base\/dist\/gbuild\/(.*\.html)$/);
  if (rs !== null) {
    map[rs[1]] = rs[0];
    path[rs[1]] = rs[0];
  }

});
// console.log(map, path);
System.config({
  // baseURL: '/',
  baseURL: '/base',
  // packages: {
  //   '/app/pages/dashboard/dashboard.html': '/base/app/pages/dashboard/dashboard.html'
  // },
  // baseURL: '/',
  // Extend usual application package list with test folder
  // packages: { 'testing': { main: 'index.js', defaultExtension: 'js' } },
  paths: path,
  map: map
  // Assume npm: is set in `paths` in systemjs.config
  // Map the angular testing umd bundles

});

System.import(karmaCnfPath + 'systemjs.config.js')
  .then(importSystemJsExtras)
  .then(initTestBed)
  .then(initTesting);

/** Optional SystemJS configuration extras. Keep going w/o it */
// function importSystemJsExtras(){
//   // console.log('importSystemJsExtras');
//   return System.import(karmaCnfPath + 'systemjs.config.extras.js')
//   .catch(function(reason) {
//     console.log(
//       'Warning: System.import could not load the optional "systemjs.config.extras.js". Did you omit it by accident? Continuing without it.'
//     );
//     console.log(reason);
//   });
// }

function importSystemJsExtras(){
  // console.log('importSystemJsExtras');
  return System.import(karmaCnfPath + 'systemjs.config.extras.js')
	// return System.import(jsCnfPath + 'systemjs.config.js')
  .catch(function(reason) {
    console.log(
      'Warning: System.import could not load the optional "systemjs.config.extras.js". Did you omit it by accident? Continuing without it.'
    );
    console.log(reason);
  });
}

function initTestBed(){
  return Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])

  .then(function (providers) {
    var coreTesting    = providers[0];
    var browserTesting = providers[1];

    coreTesting.TestBed.initTestEnvironment(
      browserTesting.BrowserDynamicTestingModule,
      browserTesting.platformBrowserDynamicTesting());
  })
}

// Import all spec files and start karma
function initTesting () {
  // console.log('fsdf');
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      // console.log(moduleName);
      return System.import(moduleName);
    })
  )
  .then(__karma__.start, __karma__.error);
}


// });
