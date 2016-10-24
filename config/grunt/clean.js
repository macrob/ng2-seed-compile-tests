module.exports = function (cnf) {
	return {
		build: [cnf.build],
		app: [cnf.build + 'app/'],
		assets: [cnf.build + 'assets']
	};
};
