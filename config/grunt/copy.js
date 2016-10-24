module.exports = function (cnf) {
	return {
		'html-index': {flatten: false, cwd: 'src/', expand: true, src: ['*.html', '**/*.js', '**/*.txt', '**/*.css'], dest: cnf.build },
		'app-static': {flatten: false, cwd: 'src/app/', expand: true, src: ['**/*.html', '**/*.js', '**/*.txt', '**/*.css'], dest: cnf.build + 'app/'},
		js: {flatten: false, cwd: 'src/', expand: true, src: ['**/*.js'], dest: cnf.build },
		assets: {flatten: false, cwd: 'src/assets', expand: true, src: ['**/*.*'], dest: cnf.build + 'assets/' },
		app: {flatten: false, cwd: 'src/app', expand: true, src: ['**/*.ejs', '**/*.html', '**/*.js', '**/*.json', '../*.js', '**/*.txt'], dest: cnf.build + 'app/' },
		root: {flatten: false, cwd: 'src/', expand: true, src: ['!app/**/*.ejs', '!app/**/*.html', '!app/**/*.js', '!app/**/*.txt', '!app/**/*.ejs', '**/*.html', '**/*.js', '**/*.txt', '**/*.css'], dest: cnf.build },
		karma: {flatten: false, cwd: 'config/karma/', expand: true, src: ['**/*.js', '**/*.txt'], dest: cnf.build + 'karma' },
	};
};
