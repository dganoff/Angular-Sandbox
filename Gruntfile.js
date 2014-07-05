module.exports = function(grunt) {

	"use strict";

	// Display the execution time when tasks are run:
	require('time-grunt')(grunt);

	// Configuration:
	var SRC = "./src/",
		DIST = "./dist/",
		SERVER_PORT = "7777";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> ver. <%= pkg.version %> <%= grunt.template.today("mm-dd-yyyy") %> */\n'
			},
			dist: {
				files: {
					'.tmp/app.min.js': [SRC + 'js/*.js']
				}
			}
		},

		sass: {
			dist: {
				files: [{
					src : ['**/*.scss', '!**/_*.scss'],
					cwd : 'src/scss',
					dest : DIST + 'css',
					ext : '.css',
					expand : true
				}],
				options: {
					style: 'compressed'
				}
			}
		},

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: SERVER_PORT,
					base: DIST,
					livereload: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			scss: {
				files: [SRC + 'scss/**/*.scss'],
				tasks: 'sass'
			},
			css: {
				files: DIST + 'css/*.css',
				options: {
					livereload: true
				}
			},
			javascript: {
				files: [SRC + 'app/**/*.js'],
				tasks: ['jshint', 'concat'],
				options: {
					livereload: true
				}
			},
			html: {
				files: [
					SRC + 'app/**/*.html'
				],
				tasks: ['copy:html', 'copy:index', 'htmlhint'],
				options: {
					livereload: true
				}
			},
			images: {
				files: [SRC + 'img/*'],
				tasks: ['copy:images'],
				options: {
					livereload: true
				}
			}
		},

		jshint: {
			files: {
				src: [SRC + 'app/**/*.js']
			}
		},

		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': false,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': true
				},
				src: [DIST + '**/*.html']
			}
		},

		copy: {
			// javascript: {
			// 	files: [
			// 		{
			// 			expand: true,
			// 			src: [SRC + 'js/*.js'], // apparently required for latest version of jQuery from bower
			// 			flatten: true,
			// 			dest: DIST + 'js/vendor'
			// 		}
			// 	]
			// },
			index: {
				files: [
					{
						expand: true,
						src: [SRC + 'app/index.html'],
						flatten: true,
						dest: DIST
					}
				]
			},
			html: {
				files: [
					{
						expand: true,
						src: [SRC + 'app/*/*.html'],
						flatten: true,
						dest: DIST + 'views'
					}
				]
			},
			images: {
				files: [
					{
						expand: true,
						src: [SRC + 'img/*'],
						flatten: true,
						dest: DIST + 'img'
					}
				]
			},
			fonts: {
				files: [
					{
						expand: true,
						src: [SRC + 'fonts/*'],
						flatten: true,
						dest: DIST + 'fonts'
					}
				]
			}
		},

		concat: {
			options: {
				separator: ';\n'
			},
			app: {
				src: [
					SRC + 'app/app.js',
					SRC + 'app/*/*.service.js',
					SRC + 'app/*/*.directive.js',
					SRC + 'app/*/*.ctrl.js'
				],
				dest: DIST + 'js/app.min.js'
			},
			vendor: {
				src: [
					SRC + 'js/angular.js',
					SRC + 'js/angular-animate.js',
					SRC + 'js/angular-cookies.js',
					SRC + 'js/angular-resource.js',
					SRC + 'js/angular-route.js',
					SRC + 'js/angular-touch.js'
				],
				dest: DIST + 'js/vendor.js'
			}
		},

		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: ['**']
		},

		clean: {
			build: {
				src: [DIST + "**/*.html"]
			}
		}
	});

	// Load all Grunt tasks via matchdep:
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	// Register Tasks:
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('build', ['newer:sass', 'clean', 'assemble', 'htmlhint', 'newer:copy', 'jshint', 'newer:uglify', 'newer:concat']);
	// grunt.registerTask('pages', ['build', 'gh-pages']);
};
