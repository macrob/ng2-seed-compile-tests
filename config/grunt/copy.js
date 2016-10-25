
module.exports = function (cnf) {
	return {
		template: {flatten: false, cwd: cnf.srcTpl, expand: true, src: ['**/*.html', '**/*.js', '**/*.css', '**/*.md', '**/*.xml', '**/*.ico', '**/*.txt', '**/*.png'], dest: cnf.build },
		app: {flatten: false, cwd: cnf.srcApp, expand: true, src: ['**/*.html', '**/*.js', '**/*.css', '**/*.md', '**/*.xml', '**/*.ico', '**/*.txt', '**/*.png'], dest: cnf.build+'/app/' },
		karma: {flatten: false, cwd: 'config/karma/', expand: true, src: ['**/*.js', '**/*.txt'], dest: cnf.build + '/karma/' }
	};
};
