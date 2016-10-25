var debug = require('debug')('grunt:cnf');

module.exports = function (cnf) {
	return {
		barrels: {
			cmd: 'node config/_utils/barrels.js'
		},
		info: {
			cmd: function() {
				debug(cnf);
				debug({
					selenium: 'http://' + cnf.seleniumHost + ':' + cnf.seleniumPort + '/',
					karma: 'http://' + cnf.karmaHost + ':' + cnf.karmaPort + '/',
					httpApp: 'http://' + cnf.httpHost + ':' + cnf.httpPort + '/' + cnf.build + '/',
					httpE2e: 'http://' + cnf.httpHost + ':' + cnf.httpPort + '/' + cnf.tests.reports.protractor.results + '/e2e.html',
					httpKarma: 'http://' + cnf.httpHost + ':' + cnf.httpPort + '/' + cnf.tests.reports.karma.coverage,
				});

			return '';
		}
	}
	};
};
