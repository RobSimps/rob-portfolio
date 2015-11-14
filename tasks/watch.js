'use strict';
module.exports = {
	jekyll: {
		files: [
			'<%= srcFolder %>/**/**/*.{html,yml,md}'
		],
		tasks: [
			'replace',
			'jekyll',
			'css:dev',
			'js:dev',
			'images:dev'
		]
	},
	css: {
		files: [
			'<%= assetsFolder %>/sass/**/**/*.scss'
		],
		tasks: [
			'sass',
			'autoprefixer',
			'stripmq',
			'pixrem'
		]
	},
	js: {
		files: [
			'<%= assetsFolder %>/js/**/*.js'
		],
		tasks: [
			'jshint',
			'concat'
		]
	},
	todo: {
		files: [
			'<%= assetsFolder %>/js/**/*.js',
			'<%= assetsFolder %>/sass/**/*.scss'
		],
		tasks: [ 'todo' ]
	}
};
