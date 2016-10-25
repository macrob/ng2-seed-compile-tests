module.exports = function (cnf) {
	return {
		build: [cnf.build],
		e2e: [cnf.e2eBuild],
		app: [cnf.build + 'app/'],
		tsclog: ['**/*.tmp.txt']
	};
};
