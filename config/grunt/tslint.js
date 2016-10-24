module.exports = {
	options: {
		configuration: 'tslint.json'
	},
	files: {
		src: ['src/app/**/*.ts', '!src/app/.baseDir.ts', '!**/*.spec.ts', 'src/*.ts'],
	}
};
