/*global module:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
		now : grunt.template.today('yyyymmddhhMMss'),
		
		/* ############################################################
		   Watch
		   ############################################################ */
			
			/**
			 * Run predefined tasks whenever watched file patterns are added, changed
			 * or deleted.
			 *
			 * $ grunt watch
			 *
			 * @see https://github.com/gruntjs/grunt-contrib-watch
			 */
			
			watch : {
				
				tmpl : {
					
					files : [
						
						'./files/**/*'
						
					],
					
					tasks : ['default']
					
				}
				
			},
		
		/* ############################################################
		   01 - Clean
		   ############################################################ */
			
			/**
			 * Clean files and folders.
			 *
			 * @see https://github.com/gruntjs/grunt-contrib-clean
			 */
			
			clean : {
				
				options : {
					
					force : true // Sketchy!
					
				},
				
				src : [
					
					'../<%= pkg.name %>/**/*'
					
				]
				
			},
		
	/* ############################################################
	   02 - Include Replace
	   ############################################################ */
		
		/**
		 * Include other files, but with variables in said files,
		 * like php `include`.
		 *
		 * @see https://github.com/alanshaw/grunt-include-replace
		 */
		
		includereplace: {
			
			init: {
				
				cwd: './files',
				src: ['index.html', 'index2.html'],
				dest : '../<%= pkg.name %>',
				expand: true
				
			}
			
		},
		
		/* ############################################################
		   03 - Copy
		   ############################################################ */
			
			/**
			 * Copy files and folders.
			 *
			 * @see https://github.com/gruntjs/grunt-contrib-copy
			 * @see http://gruntjs.com/configuring-tasks#globbing-patterns
			 */
			
			copy : {
				
				files : {
					
					expand : true,
					cwd : './files/',
					src : '*.gif',
					dest : '../<%= pkg.name %>/'
					
				}
				
			}
		
	});
	
	//--------------------------------------------------------------------
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-include-replace');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	//----------------------------------
	
	grunt.registerTask('default', ['clean', 'includereplace', 'copy']);
	
};
