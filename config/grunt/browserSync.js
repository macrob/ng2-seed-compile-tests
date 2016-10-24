// module.exports = function (cnf) {
// 	return {
// 	default_options: {
// 		port: 8000,
// 	    bsFiles: {
// 		    port: 8000,
// 	        src: [
// 		"css/*.css",
// 		"*.html",
// 		"**/*.{html,htm,css,js}"
// 	        ]
// 	    },
// 	    options: {
// 		    port: 8000,
// 	        baseDir: "./dist/gbuild/",
// 	    }
// 	}
// };
// }


module.exports = function(cnf) {
    return {
        server: {
            bsFiles: {
                src: [
                    //'test/fixtures/css/*.css',
                    'dist/*.html'
                ]
            },
            options: {
                open: false,
                online: false,
                background: false,
                server: {
                    baseDir: ["dist/"],
                    middleware: [
                        function(req, res, next) {
                            console.log("from middleware 1");
                            next();
                        }
                    ]
                }
            }
        },
        proxy: {
            files: {
                src: [
                    'dist/*.html'
                ]
            },
            options: {
                watchTask: false,
                debugInfo: true,
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                },
                proxy: {
                    host: "172.16.167.153",
                    port: 9001
                }
            }
        }
    };
}
