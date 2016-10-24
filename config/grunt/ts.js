module.exports = function(cnf) {
	return {
		app: {
			tsconfig: false,
			files: [{
				src: [
					// 'typings/index.d.ts',
					// 'typings/globals/es6-shim/index.d.ts',
					// 'src/app/**/*.spec.ts',
					// 'src/app/**/*.e2e.ts',
					'src/js/**/*.ts',
					'src/app/**/*.ts',
					'!src/app/**/*.spec.ts'
				],
				dest: cnf.build
			}],
			exclude: [
				'node_modules',
				'**/*.spec.ts'
			],
			options: {
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

				'moduleResolution': 'node',
        'rootDir': 'src/',
				      "baseUrl": "src",
        'paths': {
            '*': [
                'index',
                '*',
                'src'
            ]
        },

				'outDir':  cnf.build
			}
		},
		spec: {
			tsconfig: false,
			files: [{
				src: [
					'src/app/**/*.spec.ts',
				],
				dest: cnf.build
			}],
			'exclude': [
				'node_modules',
			],
			options: {
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

				'moduleResolution': 'node',
				'rootDir': 'src/',
				'paths': {
						'*': [
								'index',
								'*',
								'src'
						]
				},

				'outDir':  cnf.build
			}
		},
		e2e: {
			tsconfig: false,
			files: [{
				src: [
					'e2e/**/*.e2e.ts'
				],
				dest: cnf.e2eBuild
			}],
			'exclude': [
				'node_modules',
			],
			options: {
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

				'moduleResolution': 'node',
        'rootDir': 'e2e/',
        'paths': {
            '*': [
                'index',
                '*',
                'e2e'
            ]
        },

				'outDir':  cnf.build
			}
		}
	};
};
