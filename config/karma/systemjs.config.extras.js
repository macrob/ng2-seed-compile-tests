/** App specific SystemJS configuration */
System.config({
  packages: {
    // barrels
		'app/config': {main:'index.js', defaultExtension:'js'},

		'app/pages': {main:'index.js', defaultExtension:'js'},
		'app/pages/dashboard': {main:'index.js', defaultExtension:'js'},

		// 'app/shared/mocks': {main:'index.js', defaultExtension:'js'},
		'app/shared/mocks/accounts': { defaultExtension: 'json'},

		'app/shared': {main:'index.js', defaultExtension:'js'},
		'app/shared/contracts': {main:'index.js', defaultExtension:'js'},
		'app/shared/service': {main:'index.js', defaultExtension:'js'},
		'app/widgets': {main:'index.js', defaultExtension:'js'},
		'app/widgets/epese': {main:'index.js', defaultExtension:'js'},
		'app/widgets/accounts': {main:'index.js', defaultExtension:'js'}

  }
});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
