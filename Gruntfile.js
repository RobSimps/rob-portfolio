module.exports = function( grunt ) {
	/*
	 * Time taken for grunt tasks
	 */
	require( 'time-grunt' )( grunt );

	/*
	 * Load all Grunt tasks
	 */
	require( 'load-grunt-tasks' )( grunt );
	grunt.loadNpmTasks( 'assemble' );

	/*
	 * Define variables for tasks
	 */
	var vars = {
		pkg: grunt.file.readJSON( 'package.json' ),
		assetsFolder: 'assets',
		srcFolder: 'src',
		buildFolder: 'build'
	};

	/*
	 * Set location to load grunt tasks form
	 */
	vars.config = {
		src: 'tasks/*.js'
	};

	var configs = require( 'load-grunt-configs' )( grunt, vars );

	grunt.initConfig( configs );

	/*
	 * Define tasks
	 */
	grunt.registerTask( 'dev', [
		'replace',
		'jekyll',
		'css:dev',
		'js:dev',
		'images:dev',
		'todo',
		'browserSync',
		'watch'
	] );

	grunt.registerTask( 'build', [
		'replace',
		'jekyll',
		'css:build',
		'js:build',
		'icons',
		'critical',
		'images',
		'todo'
	] );


	grunt.registerTask( 'css:dev', [
		'sass:all',
		'autoprefixer',
		'stripmq',
		'pixrem'
	] );

	grunt.registerTask( 'css:build', [
		'css:dev',
		'css_mqpacker',
		'cssmin'
	] );

	grunt.registerTask( 'js:dev', [
		'modernizr',
		'concat',
		'jshint',
		'uglify:inline',
		'copy:js'
	] );

	grunt.registerTask( 'js:build', [
		'js:dev',
		'uglify'
	] );

	grunt.registerTask( 'images:dev', [
		'copy:images',
		'clean:icons',
		'svgstore'
	] );
};
