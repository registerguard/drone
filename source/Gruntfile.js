/* jslint es3: false */
/* global module:false, console:false, process:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		/*----------------------------------( PACKAGE )----------------------------------*/
		
		/**
		 * The `package.json` file belongs in the root directory of your project,
		 * next to the `Gruntfile`, and should be committed with your project
		 * source. Running `npm install` in the same folder as a `package.json`
		 * file will install the correct version of each dependency listed therein.
		 *
		 * Install project dependencies with `npm install` (or `npm update`).
		 *
		 * @see http://gruntjs.com/getting-started#package.json
		 * @see https://npmjs.org/doc/json.html
		 * @see http://package.json.nodejitsu.com/
		 * @see http://stackoverflow.com/a/10065754/922323
		 */
		
		pkg : grunt.file.readJSON('package.json'),
		
		/*----------------------------------( BANNERS )----------------------------------*/
		
		/**
		 * Short and long banners.
		 *
		 * @see http://gruntjs.com/getting-started#an-example-gruntfile
		 */
		
		banner : {
			
			'short' : '/*! ' +
			          '<%= pkg.title || pkg.name %>' +
			          '<%= pkg.version ? " v" + pkg.version : "" %>' +
			          '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
			          '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
			          ' */',
			
			'long' : '/**\n' +
			         ' * <%= pkg.title || pkg.name %>\n' +
			         '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
			         ' *\n' +
			         '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
			         '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
			         '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
			         ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
			         '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
			         '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
			         ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
			         ' */\n\n',
			
		},
		
		/*----------------------------------( VERSIONING )----------------------------------*/
		
		/**
		 * Build date and version.
		 *
		 * @see http://tanepiper.com/blog/2012/11/25/building-and-testing-javascript-with-gruntjs/
		 * @see http://blog.stevenlevithan.com/archives/date-time-format
		 */
		
		now : grunt.template.today('yyyymmdd'), // Alternative: yyyymmddhhMMss
		
		ver : 1, // Increment if more than one build is needed in a single day.
		
		/*----------------------------------( WATCH )----------------------------------*/
		
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed
		 * or deleted.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-watch
		 */
		
		watch : {
			
			files : [
				
				'<%= jshint.init %>',
				'./files/styles/**/*',
				'./files/templates/**/*',
				
			],
			
			tasks : ['default'],
			
		},
		
		/*----------------------------------( JSHINT )----------------------------------*/
		
		/**
		 * Validate files with JSHint.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-jshint
		 * @see http://www.jshint.com/docs/
		 */
		
		jshint : {
			
			options : {
				
				jshintrc : '.jshintrc', // Defined options and globals.
				reporterOutput: '', // See: https://github.com/jshint/jshint/issues/2922#issuecomment-219263558
				
			},
			
			init : [
				
				'./Gruntfile.js',
				
			],
			
		},
		
		/*----------------------------------( ENV )----------------------------------*/
		
		/**
		 * Grunt task to automate environment configuration for future tasks.
		 *
		 * @see https://github.com/onehealth/grunt-env
		 */
		
		env : {
			
			dev : {
				
				NODE_ENV : 'DEVELOPMENT',
				
			},
			
			prod : {
				
				NODE_ENV : 'PRODUCTION',
				
			},
			
		},
		
		/*----------------------------------( CLEAN )----------------------------------*/
		
		/**
		 * Clean files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-clean
		 */
		
		clean : {
			
			options : {
				
				force : true, // Allows for deletion of folders outside current working dir (CWD). Use with caution.
				
			},
			
			dev : [
				
				'../dev/**/*',
				
			],
			
			prod : [
				
				'../prod/<%= pkg.version %>/<%= now %>/<%= ver %>/**/*',
				
			],
			
		},
		
		/*----------------------------------( SASS )----------------------------------*/
		
		/**
		 * Compile Sass to CSS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-sass
		 * @see http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style
		 */
		
		sass : {
			
			options : {
				
				precision : 14,     // How many digits of precision to use when outputting decimal numbers.
				noCache: true,      // Don't cache to sassc files.
				
			},
			
			dev : {
				
				options : {
					
					banner : '<%= banner.long %>',
					style : 'expanded', // Output style. Can be nested, compact, compressed, expanded.
					
				},
				
				files : {
					
					'../dev/css/<%= pkg.name %>.css' : './files/styles/<%= pkg.name %>.scss',
					'../dev/css/development.css' : './files/styles/development.scss',
					
				},
				
			},
			
			prod : {
				
				options : {
					
					banner : '<%= banner.short %>',
					style : 'compressed',
					
				},
				
				files : {
					
					'../prod/<%= pkg.version %>/<%= now %>/<%= ver %>/css/<%= pkg.name %>.min.css' : './files/styles/<%= pkg.name %>.scss',
					
				},
				
			},
			
		},
		
		/*----------------------------------( PREPROCESS )----------------------------------*/
		
		/**
		 * Grunt task around preprocess npm module.
		 *
		 * @see https://github.com/onehealth/grunt-preprocess
		 * @see https://github.com/onehealth/preprocess
		 * @see http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
		 */
		
		preprocess : {
			
			options : {
				
				context : {
					
					title : '<%= pkg.title %>',
					description : '<%= pkg.description %>',
					name : '<%= pkg.name %>',
					version : '<%= pkg.version %>',
					homepage : '<%= pkg.homepage %>',
					production : '<%= pkg.production %>',
					now : '<%= now %>',
					ver : '<%= ver %>',
					
				},
				
			},
			
			dev : {
				
				src : './files/templates/index.html',
				dest : '../dev/index.html'
				
			},
			
			prod : {
				
				files : {
					
					'../prod/<%= pkg.version %>/<%= now %>/<%= ver %>/index.html' : './files/templates/index.html',
					'../prod/index.html' : './files/templates/latest.html'
					
				},
				
			},
			
		},
		
		/*----------------------------------( COPY )----------------------------------*/
		
		/**
		 * Copy files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-copy
		 * @see http://gruntjs.com/configuring-tasks#globbing-patterns
		 */
		
		copy : {
			
			dev : {
				
				expand : true,
				cwd : './files/',
				src : [
					'images/**/*',
				],
				dest : '../dev/',
				
			},
			
			prod : {
				
				expand : true,
				cwd : './files/',
				src : [
					'images/**/*',
				],
				dest : '../prod/<%= pkg.version %>/<%= now %>/<%= ver %>/'
				
			},
			
		},
		
	});
	
	/*----------------------------------( TASKS )----------------------------------*/
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-env');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
		
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.loadNpmTasks('grunt-preprocess');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	//----------------------------------
	
	/**
	 * @see https://github.com/onehealth/grunt-preprocess/issues/7
	 * @see https://github.com/onehealth/grunt-env/issues/4
	 */
	
	grunt.registerTask('printenv', function () { console.log(process.env); });
	
	//----------------------------------
	
	grunt.registerTask('init', ['jshint',]);
	
	grunt.registerTask('dev', ['init', 'env:dev', 'clean:dev', 'sass:dev', 'preprocess:dev', 'copy:dev',]);
	
	grunt.registerTask('prod', ['init', 'dev', 'env:prod', 'clean:prod', 'sass:prod', 'preprocess:prod', 'copy:prod',]);
	
	grunt.registerTask('default', ['dev',]);
	
};
