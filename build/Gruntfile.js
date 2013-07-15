/*global module:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
		/* ############################################################
		   WATCH
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
						
						'./src/jquery.<%= pkg.name %>.js',
						'../demo/**/*'
						
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
				
				adicio : [
					
					'../adicio/**/*'
					
				],
				
				legacy : [
					
					'../legacy/**/*'
					
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
					dest: '../',
					flatten: true,
					cwd: './files/'
					
				},
				
				adicio : {
					
					src: 'adicio/*.html',
					dest: '../adicio',
					flatten: true,
					cwd: './files/'
					
				},
				
				legacy : {
					
					src: 'legacy/*.html',
					dest: '../legacy',
					flatten: true,
					cwd: './files/'
					
				}
				
			},
			
		/* ############################################################
		   Copy
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
					src : 'bg-01.gif',
					dest : '../adicio/'
					
				},
				
				adicio : {
					
					files : [
						
						{
							
							expand : true,
							cwd : './files/',
							src : 'bg-01.gif',
							dest : '../adicio/'
							
						}
						
					]
					
				}
				
			}
		
	});
	
	//--------------------------------------------------------------------
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-includes');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	//----------------------------------
	
	grunt.registerTask('adicio', ['clean:adicio', 'includes:adicio', 'copy']);
	
	grunt.registerTask('legacy', ['clean:legacy', 'includes:legacy', 'copy']);
	
};
