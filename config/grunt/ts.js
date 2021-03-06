module.exports = function(cnf) {


	var defaultOptions = {
		'target': 'es5',
		'module': 'commonjs',
		'emitDecoratorMetadata': true,
		'experimentalDecorators': true,
		'sourceMap': true,
		'noEmitHelpers': false,
		'listFiles': true,
		'noImplicitAny': false,
		'allowUnreachableCode': false,
		'noLib': false,
		//  allowSyntheticDefaultImports: true,
		// 'moduleResolution': 'node',
		'rootDir': cnf.srcApp,
		'outDir':  cnf.build
	};


	return {
		app: {
			tsconfig: false,
			options: defaultOptions,
			files: [{
				src: [
					cnf.srcApp + '/**/*.ts',
					'!' + cnf.srcApp + '/**/*.spec.ts'
				],
				dest: cnf.build + '/app/'
			}],
			exclude: [
				'node_modules',
				// '**/*.spec.ts'
			]
		},

		/* karma units tests ts */
		spec: {
			tsconfig: false,
			files: [{
				src: [
					 cnf.srcApp + '/**/*.spec.ts',
				],
				dest: cnf.build + '/app/'
			}],
			// 'exclude': [
			// 	'node_modules',
			// ],
			options: defaultOptions
		},

		/* Protractor tests ts */
		e2e: {
			tsconfig: false,
			files: [{
				src: [
					'e2e/**/*.e2e.ts'
				],
				dest: cnf.e2eBuild
			}],
			options: Object.assign({}, defaultOptions, {
				rootDir: 'e2e/'
			}),
			'exclude': [
				'node_modules',
			],
		}
	};
};
