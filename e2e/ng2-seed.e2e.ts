jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;


describe('Index Page', () => {
	const conf = require('config');

	const maps = {
		index: conf.get('e2e.url') + 'index.html'
	};

	beforeEach( (done: () => void) => {
		done();
	}, 20000);

	it('Index should show title TS', (cb: any) => {
		browser.ignoreSynchronization = true;
		browser.get(maps.index);


		expect(browser.getTitle()).toContain('ng2 Test');
		cb();
	});


	it('Index should show error', (cb: any) => {
		browser.ignoreSynchronization = true;
		browser.get(maps.index);


		expect(browser.getTitle()).toContain('ng222 Test');
		cb();
	});

});
