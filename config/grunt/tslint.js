module.exports = {
	options: {
		configuration: 'tslint.json'
	},
	files: {
		src: ['src/app/**/*.ts', '!**/*.baseDir.ts', '!**/*.spec.ts'],
	}
};
