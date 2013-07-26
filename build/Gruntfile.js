/*global module:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
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
						
						'./src/jquery.<%= pkg.name %>.js'
						
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
		   02 - Includes
		   ############################################################ */
			
			/**
			 * Include other files, like php `include`.
			 *
			 * @see https://github.com/vanetix/grunt-includes
			 */
			
			includes: {
				
				files: {
					
					src: 'index.html',
					dest: '../<%= pkg.name %>/',
					flatten: true,
					cwd: './files/'
					
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
	
	grunt.loadNpmTasks('grunt-includes');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	//----------------------------------
	
	grunt.registerTask('default', ['clean', 'includes', 'copy']);
	
};
